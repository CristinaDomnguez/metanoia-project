import { useState, useEffect } from "react";
import "./Carousel.css";

export function Carousel() {
  // Estado para controlar qué imagen se muestra
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array con las rutas de las imágenes
  const images = [
    "/images/carousel/photo1.avif",
    "/images/carousel/photo2.avif",
    "/images/carousel/photo3.avif"
  ];

  // Función para ir a la siguiente imagen
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Función para ir a la imagen anterior
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Avance automático cada 5 segundos
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="carousel-container">
      {/* Botón para imagen anterior */}
      <button className="carousel-button prev" onClick={prevSlide}>
        &#8249;
      </button>

      {/* Contenedor de imágenes */}
      <div className="carousel-content">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`carousel-image ${
              index === currentIndex ? "active" : ""
            }`}
          />
        ))}
      </div>

      {/* Botón para siguiente imagen */}
      <button className="carousel-button next" onClick={nextSlide}>
        &#8250;
      </button>

      {/* Indicadores de posición */}
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}
