import "./Slogan.css";

export function Slogan() {
  const text = "Descubre diferentes formas de cambiar tu mente";
  return (
    // Contenedor principal para centrar el slogan
    <div className="slogan-container">
      <h1 className="slogan">
        {/* Contenedor de la imagen con su propia animación */}
        <span 
          className="icon-container" 
          style={{ animationDelay: '0s' }}
        >
          <img 
            src="/favicon.png" 
            alt="icono" 
            className="slogan-icon"
          />
        </span>
        {/* Espacio entre la imagen y el texto */}
        <span 
          className="char" 
          style={{ 
            animationDelay: '0.1s',
            whiteSpace: 'pre'
          }}
        >
          {'\u00A0'}
        </span>
        {/* 
        Dividimos el texto en caracteres individuales y mapeamos cada uno
        - split('') divide el string en un array de caracteres
        - map crea un span para cada caracter
      */}
        {text.split("").map((char, index) => (
          <span
            key={index}
            className="char"
            style={{
              // Retraso de la animación para cada letra
              // Modifica el 0.1 para ajustar la velocidad entre letras
              animationDelay: `${index * 0.1}s`,
              opacity: 0,
              whiteSpace: char === ' ' ? 'pre' : 'normal',
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </h1>
    </div>
  );
}
