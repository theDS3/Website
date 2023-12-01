import ThemeCard from './CategoryCard';
import { themes } from './categories-config';

export default function Categories() {
  return (
    <section
      id="categories"
      className="flex flex-col items-center justify-center">
      <h2 className="text-gray-300/60 text-5xl font-bold tracking-wide pb-8 text-center">
        Categories
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