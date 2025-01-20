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
    title: "Evento 1",
    description: "Descripción del evento 1",
    organizer: "Organizador 1",
    date: "10 Marzo 2025",
  },
  {
    id: "event2",
    image: "./images/Events/4Eventos.png",
    title: "Evento 2",
    description: "Descripción del evento 2",
    organizer: "Organizador 2",
    date: "15 Marzo 2025",
  },
  {
    id: "event3",
    image: "./images/Events/5Eventos.png",
    title: "Evento 3",
    description: "Descripción del evento 2",
    organizer: "Organizador 2",
    date: "15 Marzo 2025",
  },
  {
    id: "event4",
    image: "./images/Events/3Eventos.png",
    title: "Evento 4",
    description: "Descripción del evento 1",
    organizer: "Organizador 1",
    date: "10 Marzo 2025",
  },
  {
    id: "event5",
    image: "./images/Events/4Eventos.png",
    title: "Evento 5",
    description: "Descripción del evento 2",
    organizer: "Organizador 2",
    date: "15 Marzo 2025",
  },
  {
    id: "event6",
    image: "./images/Events/5Eventos.png",
    title: "Evento 6",
    description: "Descripción del evento 2",
    organizer: "Organizador 2",
    date: "15 Marzo 2025",
  },
];
