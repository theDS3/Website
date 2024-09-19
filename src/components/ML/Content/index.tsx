'use client';
import Link from 'next/link';

export interface Lessons {
  name: string;
  date: string;
  recording?: string; // Changed to optional
  slides?: string; // Changed to optional
}

export default function Content() {
  const content: Lessons[] = [
    {
      name: 'Introduction to ML',
      date: 'Sept 20',
      recording: '',
      slides: '',
    },
    {
      name: 'Data Visualization',
      date: 'Oct 4',
      recording: '',
      slides: '',
    },
    {
      name: 'Regression Techniques',
      date: 'Oct 18',
      recording: '',
      slides: '',
    },
    {
      name: 'Classification Methods',
      date: 'Nov 1',
      recording: '',
      slides: '',
    },
    {
      name: 'Deep Learning I',
      date: 'Nov 15',
      recording: '',
      slides: '',
    },
    {
      name: 'Deep Learning II',
      date: 'Nov 29',
      recording: '',
      slides: '',
    },
  ];

  return (
    <section
      id="content"
      className="flex flex-col items-center justify-center space-y-10">
      <div className="flex justify-center flex-col gap-8 xl:gap-12">
        <h1 className="lg:justify-start col-span-2 text-[#d9d9d9] text-4xl font-medium tracking-widest md:text-5xl lg:text-7xl text-center sm:flex sm:justify-center">
          Content
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        {content.map((lesson, index) => (
          <div
            key={index}
            className="p-8 rounded-lg bg-[#13161b] shadow-xl flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                {lesson.name}
              </h3>
              <p className="mb-2">
                {lesson.recording ? (
                  <Link
                    href={lesson.recording} // Fixed this to use lesson.recording
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-600 hover:underline">
                    View Recording
                  </Link>
                ) : (
                  <span className="text-gray-400">Recording Coming Soon!</span>
                )}
              </p>
              <p>
                {lesson.slides ? (
                  <Link
                    href={lesson.slides}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-600 hover:underline">
                    View Slides
                  </Link>
                ) : (
                  <span className="text-gray-400">Slides Coming Soon!</span>
                )}
              </p>
            </div>
            <p className="text-gray-400 mt-auto text-right">{lesson.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
