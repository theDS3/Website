import Image from 'next/image';

export default function Outline() {
  const fall_timeline: string[] = [
    'Sept 20',
    'Oct 4',
    'Oct 18',
    'Nov 1',
    'Nov 15',
    'Nov 29',
  ];

  return (
    <section
      id="outline"
      className="flex flex-col items-center justify-center space-y-10 text-white">
      <div className="flex justify-center flex-col gap-8 xl:gap-12 ">
        <h1 className="lg:justify-start col-span-2 text-white text-4xl font-medium tracking-widest md:text-5xl lg:text-7xl text-center sm:flex sm:justify-center">
          Outline
        </h1>
        {fall_timeline.map((date, index) => {
          return <div>{date}</div>;
        })}
        Located at: The Bridge Lab (IC...)
      </div>
    </section>
  );
}
