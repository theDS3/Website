'use client';

import { motion } from 'framer-motion';
import { brand } from '@/utils/brand';
import { instrumentSerif } from '@/utils/fonts';
import SponsorsCard, { type Sponsors } from './SponsorCard';

import FGF from '@/public/Sponsors/FGFbrands.png';
import KlickHealth from '@/public/Sponsors/klickHealth.png';
import theScore from '@/public/Sponsors/thescore.png';
import VectorInstitute from '@/public/Sponsors/vectorinst.webp';
import MSReactor from '@/public/Sponsors/ms-reactor.png';
import MLH from '@/public/Sponsors/MLH.png';
import Databricks from '@/public/Sponsors/databricks.png';

const sponsors: Sponsors[] = [
  { name: 'Databricks', logo: Databricks, link: 'https://www.databricks.com/' },
  {
    name: 'Vector Institute',
    logo: VectorInstitute,
    link: 'https://vectorinstitute.ai/',
  },
  {
    name: 'Microsoft Reactor',
    logo: MSReactor,
    link: 'https://developer.microsoft.com/en-us/reactor/',
    className: 'p-2',
  },
  { name: 'FGF Brands', logo: FGF, link: 'https://www.fgfbrands.com/' },
  { name: 'TheScore', logo: theScore, link: 'https://www.thescore.com/' },
  { name: 'MLH', logo: MLH, link: 'https://mlh.io/' },
  { name: 'Klick Health', logo: KlickHealth, link: 'https://www.klick.com/' },
];

// The animation slides the track left by exactly half its width, so the
// content is repeated 4 times: the second half then matches the first and
// the loop restarts with no visible jump (even on very wide screens).
const track = [...sponsors, ...sponsors, ...sponsors, ...sponsors];

export default function Sponsors() {
  return (
    <section
      id="sponsors"
      className="scroll-mt-20 py-28 text-center">
      <div className="mx-auto max-w-5xl px-6">
        <motion.p
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1 text-[11px] uppercase tracking-widest text-white/60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}>
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ background: brand.pink }}
          />
          Sponsorship
        </motion.p>

        <motion.h2
          className={`${instrumentSerif.className} text-5xl font-normal leading-tight text-white sm:text-7xl`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
          Support our mission
        </motion.h2>

        <motion.p
          className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-white/80 sm:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ delay: 0.15, duration: 0.6 }}>
          Support our mission and make your organization visible to numerous
          capable University of Toronto students. From merchandise to customized
          events, we curate sponsorship packages that fit your needs.
        </motion.p>

        <motion.a
          href="mailto:thedatasciencecube@gmail.com"
          className="mt-8 inline-block rounded-full border border-white/40 px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#101010]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}>
          Contact us
        </motion.a>
      </div>

      <h3
        className={`${instrumentSerif.className} mt-28 text-4xl font-normal text-white sm:text-5xl`}>
        Our sponsors
      </h3>

      <div
        className="marquee mt-10 w-full overflow-hidden border-y border-white/10 bg-white/[0.04] py-8"
        style={{
          maskImage:
            'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
        }}>
        <div className="marquee-track">
          {track.map((sponsor, idx) => (
            <div
              key={idx}
              className="mx-3 shrink-0">
              <SponsorsCard {...sponsor} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
