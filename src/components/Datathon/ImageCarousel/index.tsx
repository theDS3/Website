'use client';
import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image';
import Autoplay from "embla-carousel-autoplay";

type PropType = {
  images: string[]
  options?: EmblaOptionsType
}

const ImageCarousel: React.FC<PropType> = (props) => {
  const { images, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {images.map((source) => (
            <div className="embla__slide" key={source}>
              <Image src={source}
                alt="Image"
                width={1400}
                height={1400}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ImageCarousel

