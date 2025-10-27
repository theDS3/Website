'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

interface ImageCarouselProps {
  images: string[];
}

export function ImageCarousel({ images }: ImageCarouselProps) {
  return (
    <section className="w-full flex flex-col items-center mt-20">
      <h1 className="text-[#d9d9d9] text-4xl md:text-6xl font-semibold tracking-widest text-center pb-4 md:pb-6">
        Bootcamp Highlights
      </h1>

      <div className="w-full max-w-[2200px] relative">
        <div className="mb-8 px-4 md:px-8 pt-6 md:pt-8  pb-12">
          <Swiper
            modules={[Autoplay, Pagination, EffectCoverflow]}
            spaceBetween={20}
            centeredSlides
            loop
            grabCursor
            slideToClickedSlide={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            effect="coverflow"
            coverflowEffect={{
              rotate: 0,
              stretch: -80,
              depth: 150,
              modifier: 2,
              slideShadows: false,
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1.1, spaceBetween: 10 },
              640: { slidesPerView: 1.5, spaceBetween: 15 },
              1024: { slidesPerView: 2.2, spaceBetween: 20 },
              1440: { slidesPerView: 2.5, spaceBetween: 25 },
            }}>
            {images.map((img, idx) => (
              <SwiperSlide key={idx}>
                {({ isActive }) => (
                  <div
                    className={`relative rounded-3xl overflow-hidden transition-all duration-500 ease-out will-change-transform cursor-pointer ${
                      isActive
                        ? 'scale-[1.15] brightness-100 z-10'
                        : 'scale-95 brightness-[0.65] opacity-80'
                    }`}
                    style={{
                      aspectRatio: '16/9',
                      width: '100%',
                      maxWidth: '900px',
                      margin: '0 auto',
                      pointerEvents: 'auto',
                    }}>
                    <Image
                      src={img}
                      alt={`Bootcamp Project ${idx + 1}`}
                      fill
                      quality={100}
                      className="object-cover transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 70vw, 50vw"
                      priority={idx === 0}
                    />
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <style
          jsx
          global>{`
          html,
          body {
            overflow-x: hidden !important;
          }

          .swiper {
            overflow: visible !important;
          }

          .swiper-wrapper {
            overflow: visible !important;
          }

          .swiper-slide {
            height: auto !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            padding: 30px 0 !important;
          }

          .swiper-pagination {
            position: relative !important;
            width: 100% !important;
            display: flex !important;
            justify-content: center !important;
            align-items: center !important;
            gap: 12px !important;
            padding: 40px 0 20px 0 !important;
          }

          .swiper-pagination-bullet {
            width: 14px !important;
            height: 14px !important;
            background: #a855f7 !important;
            opacity: 0.4 !important;
            margin: 0 6px !important;
            border-radius: 50% !important;
            transition:
              transform 0.2s ease,
              opacity 0.2s ease !important;
            cursor: pointer !important;
          }

          .swiper-pagination-bullet-active {
            opacity: 1 !important;
            transform: scale(1.15) !important;
            background: #a855f7 !important;
          }

          .swiper-button-next,
          .swiper-button-prev {
            display: none !important;
          }

          .swiper {
            padding-bottom: 0 !important;
          }

          .swiper-slide > div {
            overflow: hidden !important;
          }
        `}</style>
      </div>
    </section>
  );
}

