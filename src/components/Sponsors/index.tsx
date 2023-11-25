import Link from 'next/link';

import Button from '../Button';
import SponsorCard from './SponsorCard';

import { sponsors, type Sponsor } from './sponsor-config';

export default function Sponsors() {
  return (
    <section
      id="sponsors"
      className="text-center">
      <h2 className="text-gray-300 text-5xl font-bold tracking-wider pb-8">
        Support Our Mission!
      </h2>
      <p className="description text-2xl px-4 md:px-20 lg:px-28">
        Support our mission and make your organization visible to numerous
        capable University of Toronto students. From merchandise to customized
        events, we support our industry partners by curating sponsorship
        packages that fit your needs.
      </p>
      <Link href="mailto:thedatascienecube@gmail.com">
        <Button className="mt-6">Contact Us</Button>
      </Link>
      <div className="sponsors flex flex-col md:flex-row justify-center items-center md:justify-between md:items-start md:flex-wrap gap-8 md:gap-16 lg:gap-20 pt-8 md:pt-12">
        {sponsors.map(({ text, author, position }: Sponsor, id) => (
          <SponsorCard
            key={id}
            text={text}
            author={author}
            position={position}
          />
        ))}
      </div>
    </section>
  );
}
