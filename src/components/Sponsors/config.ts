import type { ImageMetadata } from 'astro';

export interface Sponsor {
  id: string;
  logo?: {
    src: ImageMetadata | string;
    alt: string;
  };
  text: string;
  author: string;
  position: string;
}

export const sponsors: Sponsor[] = [
  // TODO: Potential Future Sponsors
  // {
  //   id: 'GeoComply',
  //   logo: {
  //     src: 'GeoComply',
  //     alt: 'GeoComply',
  //   },
  //   text: "omg. Working with DS3 was fantastic and amazing. I cannot wait to do it again because the team was too funny and amazing. If we had the budget, we would've given them 10,000 CAD.",
  //   author: 'Someone at GeoComply',
  //   position: 'CEO of GeoComply',
  // },
  // {
  //   id: 'theScore',
  //   logo: {
  //     src: 'theScore',
  //     alt: 'theScore',
  //   },
  //   text: "Omg. Working with DS3 was fantastic and amazing. I cannot wait to do it again because the team was too funny and amazing. If we had the budget, we would've given them 10,000 CAD.",
  //   author: 'Someone at theScore',
  //   position: 'CEO of theScore',
  // },
  // {
  //   id: 'UOFT_DSI',
  //   logo: {
  //     src: UOFT_DSI,
  //     alt: 'University of Toronto | Data Sciences Institute',
  //   },
  //   text: 'omg. Working with DS3 was fantastic and amazing. I cannot wait to do it again because the team was too responsible',
  //   author: 'Someone at UOFT DSI',
  //   position: 'President of UOFT DSI',
  // },
  {
    id: 'UTSC_CMS',
    text: '... they are trendsetters trailblazers who strive to create an inclusive environment for students on campus and for students to engage with data sciences and statistics and more.',
    author: 'Gwendolyn Wang',
    position: 'Department Manager UTSC CMS',
  },
];
