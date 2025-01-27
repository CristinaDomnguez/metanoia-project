import styles from "./CardResources.module.css";

function extractYoutubeId(url) {
  if (!url || typeof url !== "string") {
    return null;
  }
  const match = url.match(/^(?:[^/]+:\/\/)?[^/]+\/([^/?]+)/);

  return match?.[1];
}

function getIframeSrc(type, url) {
  if (type === "video") {
    return `https://www.youtube.com/embed/${extractYoutubeId(url)}`;
  } else {
    return url;
  }
}

export function CardResources({ item }) {
  return (
    <div
      key={item.id}
      className={`${styles.item} ${
        item.type === "video" ? styles.youtube : styles.podcast
      }`}
    >
      <iframe
        className={styles.iframe}
        key={item.id}
        src={getIframeSrc(item.type, item.url)}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
      <div className={styles.textContainer}>
        <h4 className={styles.title}>{item.title}</h4>
        <p className={styles.description}>{item.description}</p>
      </div>
    </div>
  );
}
