import { useEffect, useRef, useState } from "react";
import styles from "./CarouselEvents.module.css";

export function CarouselEvents({ events }) {
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
          track.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          track.scrollTo({
            left: currentScroll + containerWidth,
            behavior: "smooth",
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

    setIsAutoScrolling(false);

    track.scrollTo({
      left:
        track.scrollLeft +
        (direction === "left" ? -scrollAmount : scrollAmount),
      behavior: "smooth",
    });

    setTimeout(() => setIsAutoScrolling(true), 5000);
  };

  // Función para manejar el clic en una imagen
  const handleImageClick = (eventId) => {
    const targetElement = document.getElementById(eventId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth", // Desplazamiento suave
        block: "start",
      });
    }
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
        {events.map((event) => (
          <div
            className={styles.carouselItem}
            key={event.id}
            onClick={() => handleImageClick(event.id)} // Llama al manejador de clic
          >
            <img
              src={event.imageUrl || "/images/placeholder.png"}
              alt={event.name}
              onError={(e) => (e.target.src = "/images/placeholder.png")}
            />
          </div>
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
