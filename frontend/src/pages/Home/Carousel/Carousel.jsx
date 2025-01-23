import { useState, useEffect, useRef } from "react";
import styles from "./Carousel.module.css";

export function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  const media = [
    {
      src: "/images/carousel/Vídeo1.mp4",
      textTop: "DESCONECTA",
      textBottom: "Tu mente",
      duration: 6500, // Convertido a milisegundos
      type: "video",
    },
    {
      src: "/images/carousel/Vídeo2.mp4",
      textTop: "RECONECTA",
      textBottom: "Con lo que quieres ser",
      duration: 6500,
      type: "video",
    },
    {
      src: "/images/carousel/Vídeo3.mp4",
      textTop: "TRANSFORMA",
      textBottom: "TU VIDA paso a paso",
      duration: 6000,
      type: "video",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === media.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? media.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    // Limpiar el timeout anterior
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Establecer el nuevo timeout
    timeoutRef.current = setTimeout(() => {
      nextSlide();
    }, media[currentIndex].duration);

    // Cleanup function
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex]);

  return (
    <div className={styles.carouselContainer}>
      <button
        className={`${styles.carouselButton} ${styles.prev}`}
        onClick={prevSlide}
      >
        &#8249;
      </button>
      <div className={styles.carouselContent}>
        {media.map((item, index) => (
          <div
            key={index}
            className={`${styles.videoContainer} ${
              index === currentIndex ? styles.active : ""
            }`}
          >
            {item.type === "video" ? (
              <>
                <video
                  key={item.src} // Cambiado para forzar el reinicio del video
                  src={item.src}
                  className={`${styles.carouselMedia} ${styles.video} ${
                    index === currentIndex ? styles.active : ""
                  }`}
                  autoPlay
                  muted
                  playsInline // Añadido para mejor compatibilidad móvil
                />
                <div
                  className={`${styles.textOverlay} ${
                    index === currentIndex ? styles.active : ""
                  }`}
                >
                  <h1
                    key={`top-${currentIndex}`} // Añade esta key
                    className={styles.textTop}
                    style={{ animationDuration: `${item.duration / 1000}s` }}
                  >
                    {item.textTop}
                  </h1>
                  <h2
                    key={`bottom-${currentIndex}`} // Añade esta key
                    className={styles.textBottom}
                    style={{ animationDuration: `${item.duration / 1000}s` }}
                  >
                    {item.textBottom}
                  </h2>
                </div>
              </>
            ) : (
              <img
                src={item.src}
                alt={`Slide ${index + 1}`}
                className={`${styles.carouselMedia} ${
                  index === currentIndex ? styles.active : ""
                }`}
              />
            )}
          </div>
        ))}
      </div>
      <button
        className={`${styles.carouselButton} ${styles.next}`}
        onClick={nextSlide}
      >
        &#8250;
      </button>
      <div className={styles.carouselIndicators}>
        {media.map((_, index) => (
          <span
            key={index}
            className={`${styles.indicator} ${
              index === currentIndex ? styles.active : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}
