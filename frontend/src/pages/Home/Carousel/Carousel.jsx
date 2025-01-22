import { useState, useEffect } from "react";
import styles from "./Carousel.module.css";

export function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array con las rutas de las imágenes y videos
  const media = [
    {
      src: "/images/carousel/Vídeo1.mp4",
      textTop: "DESCONECTA",
      textBottom: "Tu mente",
      duration: 6.5, // Duración del video en segundos
      type: "video",
    },
    {
      src: "/images/carousel/Vídeo2.mp4",
      textTop: "RECONECTA",
      textBottom: "Con lo que quieres ser",
      duration: 6.5,
      type: "video",
    },
    {
      src: "/images/carousel/Vídeo3.mp4",
      textTop: "TRANSFORMA",
      textBottom: "TU VIDA paso a paso",
      duration: 6.0,
      type: "video",
    },
  ];

  // Función para cambiar al siguiente slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === media.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Función para cambiar al slide anterior
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? media.length - 1 : prevIndex - 1
    );
  };

  // Cambio automático de slide
  useEffect(() => {
    const timer = setInterval(nextSlide, 6500);
    return () => clearInterval(timer); // Limpiar el intervalo cuando el componente se desmonte
  }, []);

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
            {/* Video o Imagen */}
            {item.type === "video" ? (
              <>
                <video
                  key={index}
                  src={item.src}
                  className={`${styles.carouselMedia} ${styles.video} ${
                    index === currentIndex ? styles.active : ""
                  }`}
                  autoPlay
                  loop
                  muted
                />
                {/* Solo mostrar el texto si el video está activo */}
                <div
                  className={`${styles.textOverlay} ${
                    index === currentIndex ? styles.active : ""
                  }`}
                >
                  <h1
                    className={styles.textTop}
                    style={{ animationDuration: `${item.duration}s` }}
                  >
                    {item.textTop}
                  </h1>
                  <h2
                    className={styles.textBottom}
                    style={{ animationDuration: `${item.duration}s` }}
                  >
                    {item.textBottom}
                  </h2>
                </div>
              </>
            ) : (
              <img
                key={index}
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
