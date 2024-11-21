'use client';

import React, { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';

interface ImageCarouselProps {
  images: string[];
}

export function ImageCarousel({ images }: ImageCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  //@ts-ignore
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);

    return () => emblaApi.off('select', onSelect);
  }, [emblaApi]);

  return (
    <div className="relative w-full max-w-[90vw] mx-auto px-4 sm:px-6 lg:px-8">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex gap-4 sm:gap-6 lg:gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative flex-[0_0_80%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] transition-transform duration-300"
            >
              <div
                className={`transition-transform duration-300 ${selectedIndex === index
                  ? 'scale-105 opacity-100'
                  : 'scale-90 opacity-75'
                  }`}
              >
                <div
                  className="relative w-full h-0"
                  style={{ paddingBottom: '56.25%' }}
                >
                  <Image
                    src={image}
                    alt={`Image ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg shadow-lg"
                    priority={index === 0}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


      <div className="flex justify-center mt-6 space-x-2 sm:space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-colors ${selectedIndex === index ? 'bg-white' : 'bg-gray-500'
              }`}
          />
        ))}
      </div>
    </div>
  );
}

