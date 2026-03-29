export type Work = {
  slug: string;
  title: string;
  year: number;
  client: string;
  role: string;
  description: string;
  thumbnailUrl: string;
  thumbnailAspect: "landscape" | "portrait" | "square";
  vimeoId: string;
  stillImages: string[];
};

export const works: Work[] = [
  {
    slug: "echoes-of-silence",
    title: "Echoes of Silence",
    year: 2024,
    client: "Universal Music Group",
    role: "Producer / Director",
    description:
      "A meditative visual journey exploring the space between sound and stillness. Shot over three days in Iceland's interior highlands, the film layers ambient texture against vast volcanic landscapes to evoke the fragility of memory.",
    thumbnailUrl: "https://picsum.photos/seed/eos/800/1100",
    thumbnailAspect: "portrait",
    vimeoId: "1084537",
    stillImages: [
      "https://picsum.photos/seed/eos1/1200/675",
      "https://picsum.photos/seed/eos2/1200/675",
      "https://picsum.photos/seed/eos3/1200/800",
    ],
  },
  {
    slug: "neon-pastoral",
    title: "Neon Pastoral",
    year: 2024,
    client: "A24 / Pitchfork",
    role: "Producer",
    description:
      "A commission for A24's short film series pairing emerging musicians with visual directors. The piece contrasts fluorescent urban sprawl with tender domestic interiors, blurring the line between documentary and performance.",
    thumbnailUrl: "https://picsum.photos/seed/np/800/500",
    thumbnailAspect: "landscape",
    vimeoId: "1084537",
    stillImages: [
      "https://picsum.photos/seed/np1/1200/675",
      "https://picsum.photos/seed/np2/1200/675",
    ],
  },
  {
    slug: "groundwork",
    title: "Groundwork",
    year: 2023,
    client: "Nike",
    role: "Executive Producer",
    description:
      "A brand film for Nike's global 'Just Move' campaign following three grassroots athletes across Lagos, Jakarta, and Detroit. The narrative champions everyday perseverance over spectacle.",
    thumbnailUrl: "https://picsum.photos/seed/gw/800/800",
    thumbnailAspect: "square",
    vimeoId: "1084537",
    stillImages: [
      "https://picsum.photos/seed/gw1/1200/675",
      "https://picsum.photos/seed/gw2/1200/675",
      "https://picsum.photos/seed/gw3/1200/800",
    ],
  },
  {
    slug: "low-light",
    title: "Low Light",
    year: 2023,
    client: "Domino Records",
    role: "Producer / Director",
    description:
      "Music video for singer-songwriter Hana Mori's debut single. Entirely handheld and shot on 16mm reversal, the film follows a single continuous night across Tokyo's quieter districts.",
    thumbnailUrl: "https://picsum.photos/seed/ll/800/1050",
    thumbnailAspect: "portrait",
    vimeoId: "1084537",
    stillImages: [
      "https://picsum.photos/seed/ll1/1200/675",
      "https://picsum.photos/seed/ll2/1200/675",
    ],
  },
  {
    slug: "surface-tension",
    title: "Surface Tension",
    year: 2023,
    client: "Apple Music",
    role: "Producer",
    description:
      "An original short produced for Apple Music's Artist Spotlight series. The film interweaves studio rehearsal footage with performance excerpts to reveal the process behind a debut album.",
    thumbnailUrl: "https://picsum.photos/seed/st/800/600",
    thumbnailAspect: "landscape",
    vimeoId: "1084537",
    stillImages: [
      "https://picsum.photos/seed/st1/1200/675",
      "https://picsum.photos/seed/st2/1200/675",
      "https://picsum.photos/seed/st3/1200/800",
    ],
  },
  {
    slug: "parallel-lines",
    title: "Parallel Lines",
    year: 2022,
    client: "Sundance Institute",
    role: "Producer",
    description:
      "A short documentary developed through Sundance's Documentary Lab examining the parallel lives of two former classmates — one in Seoul, one in Brooklyn — reconnecting remotely during the pandemic.",
    thumbnailUrl: "https://picsum.photos/seed/pl/800/900",
    thumbnailAspect: "portrait",
    vimeoId: "1084537",
    stillImages: [
      "https://picsum.photos/seed/pl1/1200/675",
      "https://picsum.photos/seed/pl2/1200/675",
    ],
  },
  {
    slug: "fold",
    title: "Fold",
    year: 2022,
    client: "Self-Initiated",
    role: "Producer / Director",
    description:
      "An experimental short exploring origami as metaphor for identity. Commissioned for the Venice Biennale's 'Material Minds' satellite exhibition, the film was shot entirely in a single Tokyo workshop over one afternoon.",
    thumbnailUrl: "https://picsum.photos/seed/fold/800/600",
    thumbnailAspect: "landscape",
    vimeoId: "1084537",
    stillImages: [
      "https://picsum.photos/seed/fold1/1200/675",
      "https://picsum.photos/seed/fold2/1200/675",
      "https://picsum.photos/seed/fold3/1200/800",
    ],
  },
  {
    slug: "the-long-season",
    title: "The Long Season",
    year: 2022,
    client: "HBO / Vice",
    role: "Line Producer",
    description:
      "A six-part docuseries following migrant farm workers across California's Central Valley over a single harvest season. The project received the Peabody Award for Documentary Excellence.",
    thumbnailUrl: "https://picsum.photos/seed/tls/800/1150",
    thumbnailAspect: "portrait",
    vimeoId: "1084537",
    stillImages: [
      "https://picsum.photos/seed/tls1/1200/675",
      "https://picsum.photos/seed/tls2/1200/675",
    ],
  },
  {
    slug: "blue-hour",
    title: "Blue Hour",
    year: 2021,
    client: "XL Recordings",
    role: "Producer / Director",
    description:
      "Music video for the title track of Elara's debut LP. A single unbroken take through a decommissioned power station, choreographed in real time with the song's shifting tempo.",
    thumbnailUrl: "https://picsum.photos/seed/bh/800/700",
    thumbnailAspect: "landscape",
    vimeoId: "1084537",
    stillImages: [
      "https://picsum.photos/seed/bh1/1200/675",
      "https://picsum.photos/seed/bh2/1200/675",
      "https://picsum.photos/seed/bh3/1200/800",
    ],
  },
  {
    slug: "still-water",
    title: "Still Water",
    year: 2021,
    client: "Aesop",
    role: "Producer",
    description:
      "Brand film for Aesop's seasonal campaign, shot across coastal Japan. The film draws on wabi-sabi aesthetics to communicate the brand's commitment to craft and restraint.",
    thumbnailUrl: "https://picsum.photos/seed/sw/800/1000",
    thumbnailAspect: "portrait",
    vimeoId: "1084537",
    stillImages: [
      "https://picsum.photos/seed/sw1/1200/675",
      "https://picsum.photos/seed/sw2/1200/675",
    ],
  },
  {
    slug: "transit",
    title: "Transit",
    year: 2021,
    client: "Criterion Collection",
    role: "Associate Producer",
    description:
      "A making-of documentary produced for Criterion's release of a restored Japanese New Wave classic. The film conducts archival interviews and visits original locations across Osaka.",
    thumbnailUrl: "https://picsum.photos/seed/tr/800/600",
    thumbnailAspect: "landscape",
    vimeoId: "1084537",
    stillImages: [
      "https://picsum.photos/seed/tr1/1200/675",
      "https://picsum.photos/seed/tr2/1200/675",
      "https://picsum.photos/seed/tr3/1200/800",
    ],
  },
  {
    slug: "common-ground",
    title: "Common Ground",
    year: 2020,
    client: "Levi's",
    role: "Executive Producer",
    description:
      "A global brand campaign shot across six cities exploring how denim functions as shared cultural language. The series ran across digital platforms and outdoor installations in New York, London, and Seoul.",
    thumbnailUrl: "https://picsum.photos/seed/cg/800/850",
    thumbnailAspect: "portrait",
    vimeoId: "1084537",
    stillImages: [
      "https://picsum.photos/seed/cg1/1200/675",
      "https://picsum.photos/seed/cg2/1200/675",
    ],
  },
];

export function getWorkBySlug(slug: string): Work | undefined {
  return works.find((w) => w.slug === slug);
}

export function getAdjacentWorks(slug: string): {
  prev: Work | null;
  next: Work | null;
} {
  const index = works.findIndex((w) => w.slug === slug);
  return {
    prev: index > 0 ? works[index - 1] : null,
    next: index < works.length - 1 ? works[index + 1] : null,
  };
}
