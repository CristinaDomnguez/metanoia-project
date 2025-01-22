import { useState, useEffect, useRef } from "react";

export function useInView() {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView((isInView) => isInView || entry.isIntersecting);
      },
      {
        threshold: 0.1, // El elemento se considera visible cuando el 10% es visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isInView];
}
