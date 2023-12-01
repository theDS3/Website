import ThemeCard, { type Theme } from './ThemeCard';

import Academia from '@/public/Datathon/Themes/Academia.svg';
import Government from '@/public/Datathon/Themes/Government.svg';
import Industry from '@/public/Datathon/Themes/Industry.svg';

const themes: Theme[] = [
  {
    name: 'Academia',
    image: Academia,
  },
  {
    name: 'Industry',
    image: Industry,
  },
  {
    name: 'Government',
    image: Government,
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
        {themes.map(({ name, image }, id) => (
          <ThemeCard
            key={id}
            name={name}
            image={image}
          />
        ))}
      </div>
    </section>
  );
}
