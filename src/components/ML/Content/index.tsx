'use client';
import Image from 'next/image';

export interface Lessons {
  date: string;
  recording?: string; // Changed to optional
  slides?: string; // Changed to optional
}

export default function Content() {
  const content: Lessons[] = [
    {
      date: 'Sept 20',
      recording: '',
      slides: '',
    },
    {
      date: 'Oct 4',
      recording: '',
      slides: '',
    },
    {
      date: 'Oct 18',
      recording: '',
      slides: '',
    },
    {
      date: 'Nov 1',
      recording: '',
      slides: '',
    },
    {
      date: 'Nov 15',
      recording: '',
      slides: '',
    },
    {
      date: 'Nov 29',
      recording: '',
      slides: '',
    },
  ];

  return (
    <section
      id="content"
      className="flex flex-col items-center justify-center space-y-10 text-white">
      <div className="flex justify-center flex-col gap-8 xl:gap-12">
        <h1 className="lg:justify-start col-span-2 text-white text-4xl font-medium tracking-widest md:text-5xl lg:text-7xl text-center sm:flex sm:justify-center">
          Content
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        {content.map((lesson, index) => (
          <div
            key={index}
            className=" p-8 rounded-lg bg-[#13161b] shadow-xl">
            <h3 className="text-2xl font-bold mb-4">{`Lesson ${index + 1} on ${lesson.date}`}</h3>
            <p className="mb-2">
              {lesson.recording ? (
                <a
                  href={lesson.recording}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600 hover:underline">
                  Watch Recording
                </a>
              ) : (
                <span className="text-gray-400">No Recording Available</span>
              )}
            </p>
            <p>
              {lesson.slides ? (
                <a
                  href={lesson.slides}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600 hover:underline">
                  View Slides
                </a>
              ) : (
                <span className="text-gray-400">No Slides Available</span>
              )}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
