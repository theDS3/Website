'use client';
import Link from 'next/link';

export interface Lessons {
  name: string;
  date: string;
  recording_1?: string; // Changed to optional
  recording_2?: string; // Changed to optional
  slides?: string; // Changed to optional
}

export default function Content() {
  const content: Lessons[] = [
    {
      name: 'Introduction to ML',
      date: 'Sept 20',
      recording_1: 'https://youtu.be/S1ELzaj4m-Y?si=tw15VWqSMUJjtFPC',
      recording_2: 'https://youtu.be/57_4_0ebrJ8?si=F-OHeFv0K28Zpqk7',
      slides: 'https://drive.google.com/file/d/1C0x-Tgy_-NmNNBQX2dVve7_hrKLqqyyK/view?usp=sharing',
    },
    {
      name: 'Data Visualization',
      date: 'Oct 4',
      recording_1: '',
      recording_2: '',
      slides: '',
    },
    {
      name: 'Regression Techniques',
      date: 'Oct 18',
      recording_1: '',
      recording_2: '',
      slides: '',
    },
    {
      name: 'Classification Methods',
      date: 'Nov 1',
      recording_1: '',
      recording_2: '',
      slides: '',
    },
    {
      name: 'Deep Learning I',
      date: 'Nov 15',
      recording_1: '',
      recording_2: '',
      slides: '',
    },
    {
      name: 'Deep Learning II',
      date: 'Nov 29',
      recording_1: '',
      recording_2: '',
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
            className="px-8 py-6 rounded-lg bg-[#13161b] shadow-xl flex flex-col justify-between max-w-md w-full">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                {lesson.name}
              </h3>
                {lesson.recording_1 && lesson.recording_2 ? (
                <div className='space-y-1'>
                    <p>
                        <Link
                            href={lesson.recording_1} // Fixed this to use lesson.recording
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-600 hover:underline">
                            View Recording Part 1
                        </Link>
                    </p>
                    <p>
                        <Link
                            href={lesson.recording_2} // Fixed this to use lesson.recording
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-600 hover:underline">
                            View Recording Part 2
                        </Link>
                    </p>
                </div>
                ) : (
                  <span className="text-gray-400">Recordings Coming Soon!</span>
                )}
              <p className='mt-1'>
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
