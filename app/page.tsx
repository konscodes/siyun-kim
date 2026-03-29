import Nav from "@/components/Nav";
import WorkGrid from "@/components/WorkGrid";
import { works } from "@/data/works";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main className={styles.main}>
        <WorkGrid works={works} priorityCount={3} />
      </main>
    </>
  );
}
