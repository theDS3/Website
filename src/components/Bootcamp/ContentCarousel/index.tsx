'use client';

import React, { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Content from '@/components/Bootcamp/Content';

export default function ContentCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'center' }
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  //@ts-ignore
  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    return () => emblaApi.off('select', onSelect);
  }, [emblaApi]);

  const contents = [
    {
      year: '2025',
      hasSlides: true,
      hasRecordings: false,
      hasNotebook: true,
      hasContent: true,
      title: 'Agentic AI Content 2025',
    },
    {
      year: '2024',
      hasSlides: true,
      hasRecordings: true,
      hasNotebook: false,
      hasContent: true,
      title: 'ML Bootcamp Content 2024',
    },
  ]

  return (
    <div className="relative w-full">
      <div ref={emblaRef} className="overflow-hidden flex flex-col-reverse">

        <div className="flex order-1 md:order-2">
          {
            contents.map((content, index) => (
              <div key={content.year} className="flex-[0_0_100%] select-none p-0">
                <Content
                  year={content.year}
                  hasSlides={content.hasSlides}
                  hasRecordings={content.hasRecordings}
                  hasNotebook={content.hasNotebook}
                  hasContent={content.hasContent}
                  title={content.title}
                />
              </div>
            ))
          }
        </div>
        
        <div className="flex justify-center mt-5 pb-2 order-2 md:order-1 overflow-visible">
          {[0, 1].map((index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`w-[14px] h-[14px] mx-[6px] rounded-full transition-transform transition-opacity duration-200 ease-linear cursor-pointer
              ${
                selectedIndex === index ? 'opacity-100 scale-[1.15] bg-[#a855f7]' : 'bg-[#a855f7] opacity-40'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}