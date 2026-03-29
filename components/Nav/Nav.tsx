"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Nav.module.css";

export default function Nav() {
  const pathname = usePathname();

  const isContact = pathname === "/contact";

  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.name}>
        Siyun Kim
      </Link>
      <div className={styles.links}>
        <Link
          href="/"
          className={`${styles.link} ${!isContact ? styles.active : ""}`}
        >
          work
        </Link>
        <span className={styles.separator}>—</span>
        <Link
          href="/contact"
          className={`${styles.link} ${isContact ? styles.active : ""}`}
        >
          contact
        </Link>
      </div>
    </nav>
  );
}
