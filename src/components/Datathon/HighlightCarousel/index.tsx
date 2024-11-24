'use client';

import React, { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';

interface ImageCarouselProps {
  images: string[];
}

export function ImageCarousel({ images }: ImageCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'center',
    },
    [Autoplay({ playOnInit: true, stopOnInteraction: false, delay: 3000 })],
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
    <div className="relative w-full max-w-[95vw] mx-auto px-6 sm:px-8 lg:px-12 mt-8">
      <h2 className="text-white text-5xl font-bold tracking-wide pb-14 text-center">
        Last Year's Highlights
      </h2>
      <div
        ref={emblaRef}
        className="overflow-hidden">
        <div className="flex px-6 sm:px-8 lg:px-12 gap-6 sm:gap-8 lg:gap-10">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative flex-[0_0_90%] sm:flex-[0_0_60%] lg:flex-[0_0_40%] transition-transform duration-300">
              <div
                className={`transition-transform duration-300 ${
                  selectedIndex === index
                    ? 'scale-110 opacity-100'
                    : 'scale-95 opacity-80'
                }`}>
                <div
                  className="relative w-full h-0"
                  style={{ paddingBottom: '66.25%' }}>
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

      <div className="flex justify-center mt-8 space-x-3 sm:space-x-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full transition-colors ${
              selectedIndex === index ? 'bg-white' : 'bg-gray-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
