'use client';
import Link from 'next/link';

export interface Lessons {
  name: string;
  date: string;
  recordings?: string[];
  slides?: string;
}

export default function Content() {
  const content: Lessons[] = [
    {
      name: 'Introduction to ML',
      date: 'Sept 20',
      recordings: [
        'https://youtu.be/S1ELzaj4m-Y?si=tw15VWqSMUJjtFPC',
        'https://youtu.be/57_4_0ebrJ8?si=F-OHeFv0K28Zpqk7',
      ],
      slides:
        'https://drive.google.com/file/d/1C0x-Tgy_-NmNNBQX2dVve7_hrKLqqyyK/view?usp=sharing',
    },
    {
      name: 'Data Visualization',
      date: 'Oct 4',
      recordings: ['https://bit.ly/DataVizRec'],
      slides: 'https://bit.ly/DS3DataVizSlides',
    },
    {
      name: 'Regression Techniques',
      date: 'Oct 18',
      recordings: [],
      slides: '',
    },
    {
      name: 'Classification Methods',
      date: 'Nov 1',
      recordings: [],
      slides: '',
    },
    {
      name: 'Deep Learning I',
      date: 'Nov 15',
      recordings: [],
      slides: '',
    },
    {
      name: 'Deep Learning II',
      date: 'Nov 29',
      recordings: [],
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
            className={`px-8 py-6 rounded-lg shadow-xl flex flex-col justify-between max-w-md w-full ${
              lesson.recordings && lesson.recordings.length > 0
                ? 'bg-[#2f0d3f]'
                : 'bg-[#13161b]'
            }`}>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                {lesson.name}
              </h3>
              <div className="space-y-1">
                {lesson.recordings && lesson.recordings.length > 0 ? (
                  lesson.recordings.map((recording, idx) => (
                    <p key={idx}>
                      <Link
                        href={recording}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-600 hover:underline">
                        View Recording {idx + 1}
                      </Link>
                    </p>
                  ))
                ) : (
                  <span className="text-gray-400">Recordings Coming Soon!</span>
                )}
              </div>
              <p className="mt-1">
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
