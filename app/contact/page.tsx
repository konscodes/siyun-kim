import Image from "next/image";
import Nav from "@/components/Nav";
import styles from "./page.module.css";

export const metadata = {
  title: "Contact — Siyun Kim",
  description: "Get in touch with Siyun Kim, Producer.",
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.photoWrapper}>
            <Image
              src="https://picsum.photos/seed/siyunkim/600/750"
              alt="Siyun Kim"
              width={600}
              height={750}
              className={styles.photo}
              priority
            />
          </div>
          <div className={styles.info}>
            <h1 className={styles.name}>Siyun Kim</h1>
            <p className={styles.role}>Producer</p>
            <p className={styles.bio}>
              Based in Tokyo. Producing film, music video, and commercial
              work with a focus on visual storytelling and cross-cultural
              narratives. Open to collaborations worldwide.
            </p>
            <ul className={styles.links}>
              <li>
                <a
                  href="mailto:siyun@example.com"
                  className={styles.contactLink}
                >
                  siyun@example.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/siyun-k-971bb4150/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactLink}
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
