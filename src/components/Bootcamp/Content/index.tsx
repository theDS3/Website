'use client';
import { env } from '@/env/client.mjs';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export interface Lessons {
  name: string;
  date: string;
  recordings?: string[];
  slides?: string;
  notebook?: string;
}

export interface ContentProps {
  year: string;
  hasRecordings?: boolean;
  hasSlides?: boolean;
  hasNotebook?: boolean;
}

const defaultPlaceholderText = {
  noRecording: 'Recordings Coming Soon!',
  noSlides: 'Slides Coming Soon!',
  noNotebook: 'Notebook Coming Soon!',
};

const yearToSheetName: { [key: string]: string } = {
  '2024': 'sheet1',
  '2025': '2025',
};

async function fetchGoogleSheetData(
  sheetId: string,
  apiKey: string,
  year: string,
) {
  const sheetUrl = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${yearToSheetName[year]}?key=${apiKey}`;
  const response = await fetch(sheetUrl);
  const data = await response.json();
  return data.values;
}

export default function Content({
  year,
  hasRecordings = false,
  hasSlides = false,
  hasNotebook = false,
}: ContentProps) {
  const [content, setContent] = useState<Lessons[]>([]);

  useEffect(() => {
    const sheetId = env.NEXT_PUBLIC_ML_SHEET_ID;
    const apiKey = env.NEXT_PUBLIC_SHEETS_KEY;

    fetchGoogleSheetData(sheetId, apiKey, year).then((sheetData) => {
      const lessons = sheetData.slice(1).map((row: string[]) => {
        // otherColumns refers to video1, video2, slides link columns in sheets
        const [name, date, ...otherColumns] = row;

        let recordings: string[] = [];
        let slides = '';
        let notebook = '';

        let col = 0;

        // if we allow recordings, take video1 and video2 column
        if (hasRecordings) {
          recordings = otherColumns
            .slice(col, col + 2)
            .filter((link: string) => link);
          col += 2;
        }

        // if we allow slides, take slides link column
        if (hasSlides) {
          slides = otherColumns[col] || '';
          col += 1;
        }

        if (hasNotebook) {
          notebook = otherColumns[col] || '';
        }

        return {
          name,
          date,
          recordings,
          slides,
          notebook,
        };
      });

      setContent(lessons);
    });
  }, [hasRecordings, hasSlides, hasNotebook, year]);

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
            className={`px-8 py-6 rounded-lg shadow-xl flex flex-col justify-between max-w-80 w-full ${
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
                  <span className="text-gray-400">
                    {hasRecordings ? defaultPlaceholderText.noRecording : ''}
                  </span>
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
                  <span className="text-gray-400">
                    {hasSlides ? defaultPlaceholderText.noSlides : ''}
                  </span>
                )}
              </p>
              <p className="mt-1">
                {lesson.notebook ? (
                  <Link
                    href={lesson.notebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-600 hover:underline">
                    View Notebook
                  </Link>
                ) : (
                  <span className="text-gray-400">
                    {hasSlides ? defaultPlaceholderText.noNotebook : ''}
                  </span>
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
