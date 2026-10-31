import NavBar from '@/components/Navbar';
import TeamSection from '@/app/team';
import { executives } from '@/components/Main/Executives';
import type { TeamMember } from '@/components/TeamCard';
import placeholder from '@/public/placeholder.png';
import ZuhalOlomi from '@/public/Main/Executives/ZuhalOlomi.png';
import FaizaKhan from '@/public/Main/Executives/FaizaKhan.jpg';
import HibbaNouman from '@/public/Main/Executives/HibbaNouman.png';
import MahaRehan from '@/public/Main/Executives/MahaRehan.png';
import Sami from '@/public/Main/Executives/Sami.png';
import QishenChen from '@/public/Main/Executives/QishenChen.png';
import TahmeedRahman from '@/public/Main/Executives/TahmeedRahman.png';
import Tharjika from '@/public/Main/Executives/Tharjika.png';
import Wynnbee from '@/public/Main/Executives/Wynnbee.png';
import Abdul from '@/public/Main/Executives/Abdul.png';

// 24-25 and 25-26 are the same people, so both reuse the list you sent
const team2526: TeamMember[] = executives;
const team2425: TeamMember[] = executives;

// Grab an existing person (name, role and photo) from the executives list
const fromList = (name: string) =>
  executives.find((m) => m.name === name) as TeamMember;

// Until someone's photo is added, their card uses the DS3 logo
const currentTeam: TeamMember[] = [
  {
    name: 'Zuhal Olomi',
    position: 'President',
    src: ZuhalOlomi,
    alt: 'Zuhal Olomi',
    zoom: 1.2,
    shiftUp: 4,
  },
  {
    name: 'Faiza Khan',
    position: 'Vice President of Technology',
    src: FaizaKhan,
    alt: 'Faiza Khan',
    zoom: 1.2,
    shiftUp: 8,
  },
  {
    name: 'Hibba Nouman',
    position: 'Vice President of Academics',
    src: HibbaNouman,
    alt: 'Hibba Nouman',
    zoom: 1.2,
    shiftUp: 8,
  },
  {
    name: 'Maha Rehan',
    position: 'Vice President of Operations',
    src: MahaRehan,
    alt: 'Maha Rehan',
    zoom: 1.2,
    shiftUp: 1,
  },
  fromList('Nirmay Thakkar'), // VP of Finance, already has a photo
  {
    name: 'Eva',
    position: 'Vice President of Marketing',
    src: placeholder,
    alt: 'Eva',
    zoom: 1.2,
    shiftUp: 8,
  },
  {
    name: 'Tahmeed Rahman',
    position: 'Developer',
    src: TahmeedRahman,
    alt: 'Tahmeed Rahman',
    zoom: 1,
    shiftUp: 5,
  },
  {
    name: 'Sami',
    position: 'Developer',
    src: Sami,
    alt: 'Sami',
    zoom: 1.5,
    shiftUp: 8,
  },
  {
    name: 'Qishen Chen',
    position: 'Developer',
    src: QishenChen,
    alt: 'Qishen Chen',
    zoom: 1.5,
    shiftUp: 8,
  },
  {
    name: 'Adbul',
    position: 'Director of Operations',
    src: Abdul,
    alt: 'Adbul',
    zoom: 1.5,
    shiftUp: 8,
  },
  {
    name: 'Wynbee',
    position: 'FILL IN ROLE',
    src: Wynnbee,
    alt: 'Wynbee',
    zoom: 1.5,
    shiftUp: 8,
  },
  {
    name: 'Tharjika',
    position: 'FILL IN ROLE',
    src: Tharjika,
    alt: 'Tharjika',
    zoom: 1.5,
    shiftUp: 8,
  },
  {
    name: 'Deborshi',
    position: 'FILL IN ROLE',
    src: placeholder,
    alt: 'Deborshi',
  },
  {
    name: 'Elena',
    position: 'FILL IN ROLE',
    src: placeholder,
    alt: 'Elena',
  },
  {
    name: 'Stella',
    position: 'FILL IN ROLE',
    src: placeholder,
    alt: 'Stella',
  },
];

export default function TeamPage() {
  return (
    <>
      <NavBar />
      <main className="px-8 pt-28 pb-16">
        <TeamSection
          id="current"
          title="Current Team"
          members={currentTeam}
        />
        <TeamSection
          id="2025-26"
          title="2025-26 Team"
          members={team2526}
        />
        <TeamSection
          id="2024-25"
          title="2024-25 Team"
          members={team2425}
        />
      </main>
    </>
  );
}
