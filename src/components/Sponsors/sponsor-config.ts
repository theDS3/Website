export interface Sponsor {
  logo?: {
    src: string;
    alt: string;
  };
  text: string;
  author: string;
  position: string;
}

export const sponsors: Sponsor[] = [
  {
    text: '"... they are trendsetters trailblazers who strive to create an inclusive environment for students on campus and for students to engage with data sciences and statistics and more."',
    author: 'Gwendolyn Wang',
    position: 'Department Manager UTSC CMS',
  },
];
