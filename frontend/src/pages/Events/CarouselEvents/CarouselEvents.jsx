import { useEffect, useRef, useState } from "react";
import styles from "./CarouselEvents.module.css";

export function CarouselEvents({ items }) {
  const trackRef = useRef();
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  // Hook para manejar el desplazamiento automático del carrusel
  useEffect(() => {
    const track = trackRef.current;
    let intervalId;

    const startAutoScroll = () => {
      if (!isAutoScrolling) return;

      intervalId = setInterval(() => {
        const scrollWidth = track.scrollWidth;
        const currentScroll = track.scrollLeft;
        const containerWidth = track.offsetWidth;

        if (currentScroll + containerWidth >= scrollWidth) {
          // Si llegamos al final, volvemos al inicio suavemente
          track.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          // Desplazamos suavemente
          track.scrollTo({
            left: currentScroll + containerWidth,
            behavior: 'smooth'
          });
        }
      }, 3000);
    };

    startAutoScroll();

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isAutoScrolling]);

  // Función para el desplazamiento manual
  const handleScroll = (direction) => {
    const track = trackRef.current;
    const scrollAmount = track.offsetWidth;
    
    // Pausamos el autoscroll temporalmente cuando se hace scroll manual
    setIsAutoScrolling(false);
    
    track.scrollTo({
      left: track.scrollLeft + (direction === "left" ? -scrollAmount : scrollAmount),
      behavior: 'smooth'
    });

    // Reactivamos el autoscroll después de 5 segundos
    setTimeout(() => setIsAutoScrolling(true), 5000);
  };

  return (
    <div className={styles.carousel}>
      <button
        className={`${styles.carouselButton} ${styles.carouselButtonLeft}`}
        onClick={() => handleScroll("left")}
      >
        &#60;
      </button>

      <div className={styles.carouselTrack} ref={trackRef}>
        {items.map((item, index) => (
          <a
            href={`#${item.id}`}
            className={styles.carouselItem}
            key={index}
          >
            <img src={item.image} alt={item.alt} />
          </a>
        ))}
      </div>

      <button
        className={`${styles.carouselButton} ${styles.carouselButtonRight}`}
        onClick={() => handleScroll("right")}
      >
        &#62;
      </button>
    </div>
  );
}