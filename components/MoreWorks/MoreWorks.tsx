import { Work } from "@/data/works";
import WorkTile from "@/components/WorkTile";
import styles from "./MoreWorks.module.css";

type Props = {
  works: Work[];
};

export default function MoreWorks({ works }: Props) {
  if (works.length === 0) return null;

  return (
    <section className={styles.section}>
      <p className={styles.label}>More work</p>
      <div className={styles.grid}>
        {works.map((work) => (
          <WorkTile key={work.slug} work={work} />
        ))}
      </div>
    </section>
  );
}
