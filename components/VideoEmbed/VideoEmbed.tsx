import styles from "./VideoEmbed.module.css";

type Props = {
  vimeoId: string;
  title?: string;
};

export default function VideoEmbed({ vimeoId, title = "Video" }: Props) {
  return (
    <div className={styles.wrapper}>
      <iframe
        className={styles.iframe}
        src={`https://player.vimeo.com/video/${vimeoId}?byline=0&portrait=0&title=0&color=ffffff`}
        title={title}
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
