import { Work } from "@/data/works";
import WorkTile from "@/components/WorkTile";
import styles from "./WorkGrid.module.css";

type Props = {
  works: Work[];
  priorityCount?: number;
};

export default function WorkGrid({ works, priorityCount = 3 }: Props) {
  return (
    <div className={styles.grid}>
      {works.map((work, i) => (
        <WorkTile key={work.slug} work={work} priority={i < priorityCount} />
      ))}
    </div>
  );
}
