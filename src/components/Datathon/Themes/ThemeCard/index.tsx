import Image, { type StaticImageData } from 'next/image';

export interface Theme {
  name: string;
  image: StaticImageData;
}
export default function ThemeCard({ name, image }: Theme) {
  return (
    <div className="w-90 mx-10 pt-4">
      <div className="grid items-center justify-center text-center">
        <Image
          src={image}
          alt={name}
          width={350}
          height={350}
          className="rounded-lg"
        />
        <h3 className="text-2xl text-white font-bold">{name}</h3>
      </div>
    </div>
  );
}
