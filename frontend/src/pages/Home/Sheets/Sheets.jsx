import "./Sheets.css";

export function Sheets() {
  // Array de objetos con la información de cada tarjeta
  const cardData = [
    {
      image: "/images/Sheets/photo6.avif",
      text: "Recursos",
      link: "/ruta1",
    },
    {
      image: "/images/Sheets/photo5.avif",
      text: "Ayudas",
      link: "/ruta2",
    },
    {
      image: "/images/Sheets/photo4.avif",
      text: "Centros de atención",
      link: "/ruta3",
    },
    {
      image: "/images/Sheets/photo7.avif",
      text: "Eventos",
      link: "/ruta4",
    },
  ];

  return (
    // Contenedor principal de la sección
    <section className="sheets-section">
      <div className="cards-container">
        {cardData.map((card, index) => (
          // AÑADIR LINK CUANDO LO TENGAMOS
          <div className="card-link" key={index}>
            <div className="card">
              <div className="image-container">
                <img
                  src={card.image}
                  alt={`Card ${index + 1}`}
                  className="card-image"
                />
              </div>
              {/* Contenedor del texto*/}
              <div className="text-container">
                <p>{card.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
