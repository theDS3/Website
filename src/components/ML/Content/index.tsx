'use client';
import { env } from '@/env/client.mjs';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export interface Lessons {
  name: string;
  date: string;
  recordings?: string[];
  slides?: string;
}

async function fetchGoogleSheetData(sheetId: string, apiKey: string) {
  const sheetUrl = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Sheet1?key=${apiKey}`;
  const response = await fetch(sheetUrl);
  const data = await response.json();
  return data.values;
}

export default function Content() {
  const [content, setContent] = useState<Lessons[]>([]);

  useEffect(() => {
    const sheetId = env.NEXT_PUBLIC_ML_SHEET_ID;
    const apiKey = env.NEXT_PUBLIC_SHEETS_KEY;

    fetchGoogleSheetData(sheetId, apiKey).then((sheetData) => {
      const lessons = sheetData.slice(1).map((row: any) => ({
        name: row[0],
        date: row[1],
        recordings: row.slice(2, 4).filter((link: string) => link),
        slides: row[4] || '',
      }));
      setContent(lessons);
    });
  }, []);

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
              new Date() > new Date(lesson.date)
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
            <p className="text-gray-400 mt-auto text-right">
              {new Date(lesson.date).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
              })}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
