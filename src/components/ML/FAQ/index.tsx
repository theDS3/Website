'use client';

import { useState } from 'react';

export default function FAQ() {
  const faqs = [
    {
      question: 'What is the focus of the event?',
      answer:
        'Engage in interactive labs and practical exercises designed to enhance your understanding and application of Machine Learning concepts.',
    },
    {
      question: 'How many students can register?',
      answer: 'Capacity: 50 students.',
    },
    {
      question: 'What opportunities does the workshop provide?',
      answer:
        'Provide an opportunity for participants to focus on building real-world projects.',
    },
    {
      question: 'What will participants receive from this experience?',
      answer:
        'Yes, participants will receive a Certificate of Completion, signed by CMS faculty.',
    },
    {
      question: 'What is the format of the event?',
      answer:
        'A bi-weekly workshop series to build a foundation in Machine Learning technologies and methodologies.',
    },
  ];

  const [activeIndexes, setActiveIndexes] = useState<number[]>([]);
  const [allOpen, setAllOpen] = useState(false);

  const toggleFAQ = (index: number) => {
    if (activeIndexes.includes(index)) {
      setActiveIndexes(activeIndexes.filter((i) => i !== index)); // Remove from active
    } else {
      setActiveIndexes([...activeIndexes, index]); // Add to active
    }
  };

  return (
    <section
      id="faq"
      className="flex flex-col items-center justify-center min-h-screen p-6">
      <div className="flex flex-col w-full max-w-4xl gap-8 xl:gap-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-center flex-grow text-[#d9d9d9] text-4xl font-medium tracking-widest md:text-5xl lg:text-7xl">
            FAQ
          </h1>
        </div>

        <div className="w-full max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#13161b] border border-white mb-4 rounded-lg shadow-lg">
              <h2
                onClick={() => toggleFAQ(index)}
                className="text-lg md:text-2xl font-bold cursor-pointer flex justify-between items-center p-4 text-white">
                {faq.question}
                <span className="ml-4">
                  {activeIndexes.includes(index) ? '-' : '+'}
                </span>
              </h2>
              {activeIndexes.includes(index) && (
                <p className="p-4 text-sm md:text-base text-white">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
