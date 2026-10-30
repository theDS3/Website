import Image, { type StaticImageData } from 'next/image';

export interface TeamMember {
  name: string;
  position: string;
  src: StaticImageData;
  alt: string;
  github?: string;
  linkedin?: string;
  zoom?: number; // 1 = normal, 1.3 = 30% bigger
  shiftUp?: number; // positive moves the photo up, negative moves it down
}

// TODO: replace with the real DS3 links
const DS3_GITHUB = 'https://github.com/YOUR-DS3-ORG';
const DS3_LINKEDIN = 'https://www.linkedin.com/company/YOUR-DS3-PAGE';

const iconClass = 'h-9 w-9 fill-white transition-transform hover:scale-110';

// Title color by role. "Vice President" must be checked before "President",
// because "president" is also inside "vice president".
function positionColor(position: string) {
  const p = position.toLowerCase();
  if (p.includes('vice president') || /\bvp\b/.test(p)) return 'text-[#ff68b6]';
  if (p.includes('president')) return 'text-[#00d120]';
  if (p.includes('director') || p.includes('developer'))
    return 'text-[#d45fff]';
  return 'text-white';
}

export default function TeamCard({
  name,
  position,
  src,
  alt,
  github = DS3_GITHUB,
  linkedin = DS3_LINKEDIN,
  zoom = 1,
  shiftUp = 0,
}: TeamMember) {
  return (
    <div className="group text-center grid justify-center items-center ">
      <div className="flex justify-center items-center">
        <div className="relative overflow-hidden rounded-2xl">
          <Image
            src={src}
            alt={alt}
            placeholder="blur"
            style={{ transform: `scale(${zoom}) translateY(${-shiftUp}%)` }}
            className="block w-[140px] sm:w-[220px] md:w-[180px] min-[1800px]:w-[280px]"
          />
          <div className="pointer-events-none group-hover:pointer-events-auto absolute inset-0 flex items-center justify-center gap-5 bg-purple-600/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${name} on GitHub`}>
              <svg
                viewBox="0 0 24 24"
                className={iconClass}>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${name} on LinkedIn`}>
              <svg
                viewBox="0 0 24 24"
                className={iconClass}>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="py-5">
        <h3 className="text-2xl font-bold text-white capitalize relative mb-[27px]">
          {name}
        </h3>
        <p
          className={`text-lg font-semibold capitalize ${positionColor(position)}`}>
          {position}
        </p>
      </div>
    </div>
  );
}
