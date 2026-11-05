import { instrumentSerif } from '@/utils/fonts';

export default function BlobTitle({
  children,
  color,
}: {
  children: React.ReactNode;
  color: string;
}) {
  return (
    <>
      <svg
        width="0"
        height="0"
        className="absolute"
        aria-hidden>
        <filter
          id="blob"
          x="-10%"
          y="-20%"
          width="120%"
          height="140%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.008 0.02"
            numOctaves={1}
            seed={3}
            result="n">
            <animate
              attributeName="baseFrequency"
              dur="9s"
              values="0.008 0.02;0.012 0.028;0.008 0.02"
              repeatCount="indefinite"
            />
          </feTurbulence>
          <feDisplacementMap
            in="SourceGraphic"
            in2="n"
            scale={16}
            xChannelSelector="R"
            yChannelSelector="G"
            result="d"
          />
          <feGaussianBlur
            in="d"
            stdDeviation={4}
            result="b"
          />
          <feColorMatrix
            in="b"
            type="matrix"
            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -9"
          />
        </filter>
      </svg>
      <h1
        className={`${instrumentSerif.className} text-8xl font-normal leading-none tracking-wide sm:text-[11rem]`}
        style={{
          color,
          WebkitTextStroke: `5px ${color}`,
          filter: 'url(#blob)',
        }}>
        {children}
      </h1>
    </>
  );
}
