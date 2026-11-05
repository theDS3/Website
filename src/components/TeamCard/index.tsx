import Image, { type StaticImageData } from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { teamLinks } from '@/utils/teamlinks';

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

// Used for anyone who has no links of their own
const DS3_GITHUB = 'https://github.com/theDS3';
const DS3_LINKEDIN =
  'https://www.linkedin.com/company/the-data-science-statistics-society/';
// true = people without their own links show the DS3 ones; false = no icons for them
const SHOW_DS3_FALLBACK = true;

const iconClass = 'text-4xl text-white transition-transform hover:scale-110';

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
  github: githubProp,
  linkedin: linkedinProp,
  zoom = 1,
  shiftUp = 0,
}: TeamMember) {
  const personal = teamLinks[name];
  const github =
    githubProp || personal?.github || (SHOW_DS3_FALLBACK ? DS3_GITHUB : '');
  const linkedin =
    linkedinProp ||
    personal?.linkedin ||
    (SHOW_DS3_FALLBACK ? DS3_LINKEDIN : '');

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
          {(github || linkedin) && (
            <div className="pointer-events-none group-hover:pointer-events-auto absolute inset-0 flex items-center justify-center gap-5 bg-purple-600/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${name} on GitHub`}>
                  <FaGithub className={iconClass} />
                </a>
              )}
              {linkedin && (
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${name} on LinkedIn`}>
                  <FaLinkedin className={iconClass} />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="py-5">
        <h3 className="text-2xl font-normal text-white capitalize relative mb-[27px]">
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
