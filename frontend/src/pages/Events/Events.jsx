import { CarouselEvents } from "./CarouselEvents/CarouselEvents";
import styles from "./Events.module.css";
import { ListEvents } from "./ListEvents/ListEvents";
import { TextEvent } from "./TextEvent/TextEvent";

export function Events() {
  return (
    <div className={styles.mainContainer}>
      <CarouselEvents items={eventItems} />
      <TextEvent />
      <ListEvents events={eventItems} />
    </div>
  );
}

const eventItems = [
    {
      id: "event1",
      image: "./images/Events/3Eventos.png",
      name: "Festival de Música Clásica",
      description: "Un emocionante festival que reúne a los mejores intérpretes de música clásica. Disfruta de obras maestras interpretadas por orquestas reconocidas internacionalmente en un ambiente único.",
      address: "Auditorio Municipal, Calle Principal 123",
      phone: "+(34) 911 234 567",
      web: "www.festivalmusica.com",
      mail: "contacto@festivalmusica.com",
      centerName: "Conservatorio de Música",
      date: "10 Marzo 2025",
      userId: "user123"
    },
    {
      id: "event2",
      image: "./images/Events/4Eventos.png",
      name: "Exposición de Arte Contemporáneo",
      description: "Descubre las últimas tendencias en arte contemporáneo con obras de artistas emergentes y consagrados. Una muestra que desafía los límites tradicionales del arte.",
      address: "Galería Moderna, Avenida del Arte 45",
      phone: "+(34) 922 345 678",
      web: "www.galeriamoderna.com",
      mail: "info@galeriamoderna.com",
      centerName: "Centro Cultural Metropolitano",
      date: "15 Marzo 2025",
      userId: "user124"
    },
    {
      id: "event3",
      image: "./images/Events/5Eventos.png",
      name: "Taller de Fotografía Digital",
      description: "Aprende las técnicas más avanzadas de fotografía digital con profesionales del sector. Incluye sesiones prácticas y teoría sobre composición y edición.",
      address: "Escuela de Artes, Plaza Mayor 78",
      phone: "+(34) 933 456 789",
      web: "www.escuelafoto.com",
      mail: "cursos@escuelafoto.com",
      centerName: "Escuela de Artes Visuales",
      date: "15 Marzo 2025",
      userId: "user125"
    },
    {
      id: "event4",
      image: "./images/Events/3Eventos.png",
      name: "Teatro Infantil: El Bosque Mágico",
      description: "Una obra de teatro interactiva para toda la familia. Adéntrate en un mundo de fantasía donde los niños son los protagonistas de la aventura.",
      address: "Teatro Infantil, Calle del Sol 234",
      phone: "+(34) 944 567 890",
      web: "www.teatroinfantil.com",
      mail: "reservas@teatroinfantil.com",
      centerName: "Centro de Artes Escénicas",
      date: "10 Marzo 2025",
      userId: "user126"
    },
    {
      id: "event5",
      image: "./images/Events/4Eventos.png",
      name: "Conferencia de Innovación Tecnológica",
      description: "Expertos en tecnología comparten las últimas innovaciones en IA, robotica y desarrollo sostenible. Networking y demostraciones en vivo.",
      address: "Centro de Convenciones, Avenida Tecnológica 567",
      phone: "+(34) 955 678 901",
      web: "www.techconference.com",
      mail: "info@techconference.com",
      centerName: "Instituto de Tecnología Aplicada",
      date: "15 Marzo 2025",
      userId: "user127"
    },
    {
      id: "event6",
      image: "./images/Events/5Eventos.png",
      name: "Festival Gastronómico Internacional",
      description: "Un viaje culinario alrededor del mundo con los mejores chefs locales e internacionales. Degustaciones, talleres y demostraciones de cocina en vivo.",
      address: "Recinto Ferial, Paseo Gastronómico 890",
      phone: "+(34) 966 789 012",
      web: "www.foodfestival.com",
      mail: "contacto@foodfestival.com",
      centerName: "Escuela de Gastronomía",
      date: "15 Marzo 2025",
      userId: "user128"
    }
  ];
  
