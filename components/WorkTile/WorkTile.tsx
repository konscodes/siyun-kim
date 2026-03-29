import Link from "next/link";
import Image from "next/image";
import { Work } from "@/data/works";
import styles from "./WorkTile.module.css";

type Props = {
  work: Work;
  priority?: boolean;
};

export default function WorkTile({ work, priority = false }: Props) {
  return (
    <Link href={`/work/${work.slug}`} className={styles.tile}>
      <div className={styles.imageWrapper}>
        <Image
          src={work.thumbnailUrl}
          alt={work.title}
          width={800}
          height={
            work.thumbnailAspect === "portrait"
              ? 1050
              : work.thumbnailAspect === "square"
                ? 800
                : 540
          }
          className={styles.image}
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className={styles.overlay}>
          <span className={styles.overlayTitle}>{work.title}</span>
        </div>
      </div>
    </Link>
  );
}
