'use client';

import React, { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
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

  return (
    <div className="relative w-full">
      <div ref={emblaRef} className="overflow-hidden flex flex-col-reverse">

        <div className="flex order-1 md:order-2">

          <div className="flex-[0_0_100%] select-none p-0">
            <Content
              year="2025"
              hasSlides={true}
              hasRecordings={false}
              hasNotebook={true}
              hasContent={true}
            />
          </div>

          <div className="flex-[0_0_100%] select-none">
            <Content
              year="2024"
              hasSlides={true}
              hasRecordings={true}
              hasNotebook={false}
              hasContent={true}
              title={"ML Bootcamp 2024"}
            />

          </div>
        </div>
        
        <div className="flex justify-center mt-4 order-2 md:order-1">
          {[0, 1].map((index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`w-3 h-3 rounded-full mx-2 transition-colors ${
                selectedIndex === index ? 'bg-white' : 'bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}