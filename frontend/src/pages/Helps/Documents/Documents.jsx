import styles from "./Document.module.css";

export function Document() {
  const pdfs = [
    {
      title: "Comprendiendo la ansiedad",
      file: "/pdfs/1comprendiendo_ansiedad.pdf",
      cover: "/images/Helps/1ansiedad.png",
    },
    {
      title: "Comprendiendo la ansiedad",
      file: "/pdfs/2consejos_dormir.pdf",
      cover: "/images/Helps/2dormir.png",
    },
    {
      title: "Comprendiendo la ansiedad",
      file: "/pdfs/3panico.pdf",
      cover: "/images/Helps/3panico.png",
    },
    {
      title: "Comprendiendo la ansiedad",
      file: "/pdfs/4transtorno_ansiedad.pdf",
      cover: "/images/Helps/4transtorno_ansiedad.png",
    },
    {
      title: "Comprendiendo la ansiedad",
      file: "/pdfs/5afrontando_estres.pdf",
      cover: "/images/Helps/5estres.png",
    },
    {
      title: "Comprendiendo la ansiedad",
      file: "/pdfs/6tranquilizantes.pdf",
      cover: "/images/Helps/6tranquilizantes.png",
    },
    {
      title: "Comprendiendo la ansiedad",
      file: "/pdfs/7antidepresivos.pdf",
      cover: "/images/Helps/7antidepresivos.png",
    },
  ];

  return (
    <>
      <div className={styles.header}>
        <h2>Documentación de Interés</h2>
        <p>
          En esta sección hemos recopilado documentación de la Junta de
          Andalucía que puede resultarte interesante. Esperamos que con ella
          puedas entender mejor algunos conceptos y te sirva de ayuda.
        </p>
      </div>
      <div className={styles.pdfContainer}>
        {pdfs.map((pdf, index) => (
          <div key={index} className={styles.pdfItem}>
            <img src={pdf.cover} alt={pdf.title} className={styles.pdfCover} />
            <div className={styles.pdfActions}>
              <a
                href={pdf.file}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.readButton}
              >
                Leer
              </a>
              <a href={pdf.file} download className={styles.downloadButton}>
                Descargar
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
