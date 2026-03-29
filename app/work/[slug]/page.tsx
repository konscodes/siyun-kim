import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import VideoEmbed from "@/components/VideoEmbed";
import MoreWorks from "@/components/MoreWorks";
import { works, getWorkBySlug, getAdjacentWorks } from "@/data/works";
import styles from "./page.module.css";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return works.map((work) => ({ slug: work.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);
  if (!work) return {};
  return {
    title: `${work.title} — Siyun Kim`,
    description: work.description,
  };
}

export default async function WorkPage({ params }: Props) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);

  if (!work) notFound();

  const { prev, next } = getAdjacentWorks(slug);
  const moreWorks = works.filter((w) => w.slug !== slug).slice(0, 6);

  return (
    <>
      <Nav />
      <main className={styles.main}>
        <div className={styles.hero}>
          <aside className={styles.sidebar}>
            <h1 className={styles.title}>{work.title}</h1>
            <dl className={styles.meta}>
              <div className={styles.metaRow}>
                <dt className={styles.metaLabel}>Year</dt>
                <dd className={styles.metaValue}>{work.year}</dd>
              </div>
              <div className={styles.metaRow}>
                <dt className={styles.metaLabel}>Client</dt>
                <dd className={styles.metaValue}>{work.client}</dd>
              </div>
              <div className={styles.metaRow}>
                <dt className={styles.metaLabel}>Role</dt>
                <dd className={styles.metaValue}>{work.role}</dd>
              </div>
            </dl>
            <p className={styles.description}>{work.description}</p>
            <nav className={styles.adjacentNav}>
              {prev ? (
                <Link href={`/work/${prev.slug}`} className={styles.adjacentLink}>
                  ← {prev.title}
                </Link>
              ) : (
                <span />
              )}
              {next ? (
                <Link href={`/work/${next.slug}`} className={styles.adjacentLink}>
                  {next.title} →
                </Link>
              ) : (
                <span />
              )}
            </nav>
          </aside>
          <div className={styles.videoArea}>
            <VideoEmbed vimeoId={work.vimeoId} title={work.title} />
          </div>
        </div>

        {work.stillImages.length > 0 && (
          <div className={styles.stills}>
            {work.stillImages.map((src, i) => (
              <div key={i} className={styles.stillWrapper}>
                <Image
                  src={src}
                  alt={`${work.title} — still ${i + 1}`}
                  width={1200}
                  height={675}
                  className={styles.stillImage}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        )}

        <MoreWorks works={moreWorks} />
      </main>
    </>
  );
}
