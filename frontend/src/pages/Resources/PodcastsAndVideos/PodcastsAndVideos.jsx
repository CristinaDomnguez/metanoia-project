import styles from "./PodcastsAndVideos.module.css";
import { FaPlay } from "react-icons/fa6";

export default function PodcastsAndVideos({ items }) {
  return (
  
    <div className={styles.mainContainer}>
      <section className={` ${styles.videosContainer}, ${styles.podcastsContainer}`}>
        {items.map((item) => (
          <div key={item.id} className={` ${styles.videos}, ${styles.podcast}`}>
            <img
              src={item.imageUrl}
              alt={`Imagen de ${item.title}`}
              className={` ${styles.imageVideos}, ${styles.imagePodcasts}`}
            />
            <div className={styles.textContent}>
              <h4 className={styles.title}>{item.title}</h4>
              <p className={styles.description}>{item.description}</p>
              <a
                title="Ir a youtube"
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={item.type == "video" ? styles.linkVideo : styles.linkPodcast}
              >
                <FaPlay className={` ${styles.videosIcon}, ${styles.spotifyIcon}`} />
              </a>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
