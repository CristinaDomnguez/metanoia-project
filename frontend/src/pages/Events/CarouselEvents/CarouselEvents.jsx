import { useEffect, useRef, useState } from "react";
import styles from "./CarouselEvents.module.css";

export function CarouselEvents() {
  const trackRef = useRef();
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  // Cargar imágenes dinámicamente desde la carpeta public con sufijo "-logo.png"
  const images = [
    "/images/Events/junta-logo.png",
    "/images/Events/junta-logo.png",
    "/images/Events/3Eventos.png",
    "/images/Events/5Eventos.png",
    "/images/Events/4Eventos.png",
    "/images/Events/federacion-logo.png",
    "/images/Events/uma-logo.png",
  ];

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
          track.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          // Desplazamos suavemente
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

    // Pausamos el autoscroll temporalmente cuando se hace scroll manual
    setIsAutoScrolling(false);

    track.scrollTo({
      left:
        track.scrollLeft +
        (direction === "left" ? -scrollAmount : scrollAmount),
      behavior: "smooth",
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
        {images.map((image, index) => (
          <a
            href={`#event${index + 1}`}
            className={styles.carouselItem}
            key={index}
          >
            <img
              src={image}
              alt={`Evento ${index + 1}`}
              onError={(e) => (e.target.src = "/images/placeholder.png")} // Fallback a un placeholder
            />
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
