import Image from 'next/image';

export interface lessons {
  date: string;
  recording: string;
  slides: string;
}

export default function Content() {
  const content: lessons[] = [
    {
      date: 'Sept 20',
      recording: 'https://example.com/recording1',
      slides: 'https://example.com/slides1',
    },
    {
      date: 'Oct 4',
      recording: 'https://example.com/recording2',
      slides: 'https://example.com/slides2',
    },
    {
      date: 'Oct 18',
      recording: 'https://example.com/recording3',
      slides: 'https://example.com/slides3',
    },
    {
      date: 'Nov 1',
      recording: 'https://example.com/recording3',
      slides: 'https://example.com/slides3',
    },
    {
      date: 'Nov 15',
      recording: 'https://example.com/recording3',
      slides: 'https://example.com/slides3',
    },
    {
      date: 'Nov 29',
      recording: 'https://example.com/recording3',
      slides: 'https://example.com/slides3',
    },
  ];

  return (
    <section
      id="content"
      className="flex flex-col items-center justify-center space-y-10 text-white">
      <div className="flex justify-center flex-col gap-8 xl:gap-12 ">
        <h1 className="lg:justify-start col-span-2 text-white text-4xl font-medium tracking-widest md:text-5xl lg:text-7xl text-center sm:flex sm:justify-center">
          Content
        </h1>
      </div>
      <div className="mt-10">
        {content.map((lesson, index) => (
          <div
            key={index}
            className="mb-6">
            <h3 className="text-2xl font-bold">{`Lesson ${index + 1} on ${lesson.date}`}</h3>
            <p>
              <a
                href={lesson.recording}
                className="text-blue-500 underline">
                Watch Recording
              </a>
            </p>
            <p>
              <a
                href={lesson.slides}
                className="text-blue-500 underline">
                View Slides
              </a>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
