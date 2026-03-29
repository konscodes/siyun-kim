import Link from "next/link";
import Nav from "@/components/Nav";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className={styles.main}>
        <p className={styles.code}>404</p>
        <p className={styles.message}>Page not found.</p>
        <Link href="/" className={styles.link}>
          ← Back to work
        </Link>
      </main>
    </>
  );
}
