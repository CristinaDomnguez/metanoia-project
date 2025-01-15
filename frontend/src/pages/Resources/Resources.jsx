import "./Resources.css";
import PodcastsAndVideos from "../../components/PodcastsAndVideos/PodcastsAndVideos";

export default function Resources() {
  return (
    <>
      {/* Sección introductoria */}
      <section className="intro-section layout-box">
        <div className="text-container">
          <div className="container">
            <p className="text">
              Tener la opinion de gente versada en la materia siempre es una
              buena guía. Hemos hecho esta seleccion podcast y videos que
              creemos te aportaran luz.
            </p>
            <p className="text">
              Con los numerosos recursos que te ofrecemos, queremos que tengas
              suficiente material para que puedas elegir lo que mejor se ajusta
              a tus necesidades, sin tener que sentirte agobiado por la
              necesidad de visualizar o escuchar todo el material que ponemos a
              tu disposición.
            </p>
            <p className="text">
              Queremos ayudarte a que consigas ver otro color a la vida y que
              puedas superar todos los obstáculos que se presenten en tu camino.
            </p>
          </div>
        </div>
      </section>
      <PodcastsAndVideos />
    </>
  );
}
