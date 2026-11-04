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
import BlobTitle from '@/components/v2/BlobTitle';
import PageShell from '@/components/v2/PageShell';
import { brand } from '@/utils/brand';

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
    position: 'Vice President of Outreach',
    src: MahaRehan,
    alt: 'Maha Rehan',
    zoom: 1.3,
    shiftUp: 2,
  },
  {
    name: 'Wynnbee Chua',
    position: 'Vice President of Operations',
    src: Wynnbee,
    alt: 'Wynnbee Chua',
    zoom: 1.2,
    shiftUp: 1,
  },
  fromList('Nirmay Thakkar'),
  {
    name: 'Ayah Najarbashi',
    position: 'Vice President of Marketing',
    src: placeholder,
    alt: 'Ayah Najarbashi',
    zoom: 1.2,
    shiftUp: 8,
  },
  {
    name: 'Eva Abdul',
    position: 'Vice President of Marketing',
    src: placeholder,
    alt: 'Eva Abdul',
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
    name: 'Sami Shahid',
    position: 'Developer',
    src: Sami,
    alt: 'Sami Shahid',
    zoom: 1.3,
    shiftUp: 8,
  },
  {
    name: 'Qishen Chen',
    position: 'Developer',
    src: QishenChen,
    alt: 'Qishen Chen',
    zoom: 1.2,
    shiftUp: 6,
  },
  {
    name: 'Abdul',
    position: 'Director of Operations',
    src: Abdul,
    alt: 'Abdul',
    zoom: 1.5,
    shiftUp: 6,
  },
  {
    name: 'Tharjiha Suthekara',
    position: 'Director of Operations',
    src: Tharjika,
    alt: 'Tharjiha Suthekara',
    zoom: 1.1,
    shiftUp: 0.1,
  },
  {
    name: 'Deborshi Chakraborty',
    position: 'Director of Academics',
    src: placeholder,
    alt: 'Deborshi Chakraborty',
  },
  {
    name: 'Kevin Thiha',
    position: 'Director of Academics',
    src: placeholder,
    alt: 'Kevin Thiha',
  },
  {
    name: 'Elena Osipyan',
    position: 'Director of Academics',
    src: placeholder,
    alt: 'Elena Osipyan',
  },
  {
    name: 'Stella Pham',
    position: 'Director of Marketing',
    src: placeholder,
    alt: 'Stella Pham',
  },
];

export default function TeamPage() {
  return (
    <PageShell>
      <main className="px-4 pb-16 pt-32">
        <div className="mb-8 text-center">
          <BlobTitle color={brand.green}>Our team</BlobTitle>
        </div>
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
    </PageShell>
  );
}
