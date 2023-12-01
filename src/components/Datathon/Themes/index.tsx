import ThemeCard, { type Theme } from './ThemeCard';

import Academia from '@/public/Datathon/Themes/Academia.svg';
import Government from '@/public/Datathon/Themes/Government.svg';
import Industry from '@/public/Datathon/Themes/Industry.svg';

const themes: Theme[] = [
  {
    name: 'Academia',
    image: Academia,
    description:
      'Capture the essence of curiosity. Academia unveils the beauty of data science through research, innovation, and the relentless pursuit of knowledge.',
  },
  {
    name: 'Industry',
    image: Industry,
    description:
      'The heartbeat of businesses. Data scientists transform raw data into actionable insights, shaping industries and fostering growth.',
  },
  {
    name: 'Government',
    image: Government,
    description:
      'Armed with analytics, data scientists enhance public services, and ensure data-driven strategies to empower nations and thrive in the digital age.',
  },
];

export default function Themes() {
  return (
    <section
      id="themes"
      className="flex flex-col items-center justify-center">
      <h2 className="text-gray-300/60 text-5xl font-bold tracking-wide pb-8 text-center">
        Themes
      </h2>
      <p className="text-bold text-2xl text-center">
        Experience life like a data scientist in the areas of ...
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3">
        {themes.map(({ name, image, description }, id) => (
          <ThemeCard
            key={id}
            name={name}
            image={image}
            description={description}
          />
        ))}
      </div>
    </section>
  );
}
