import { Button } from '@/components/Button';
import SponsorCard, { type Sponsor } from '@/components/SponsorCard';

const sponsors: Sponsor[] = [
  {
    text: '"... they are trendsetters trailblazers who strive to create an inclusive environment for students on campus and for students to engage with data sciences and statistics and more."',
    author: 'Gwendolyn Wang',
    position: 'Department Manager UTSC CMS',
  },
];

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
      {/** Do not replace the <a> tag below with <Link>
       *   <Link> does not work after a single click
       */}
      <a href="mailto:thedatascienecube@gmail.com">
        <Button className="mt-6">Contact Us</Button>
      </a>
      <div className="sponsors flex flex-col md:flex-row justify-center items-center md:justify-between md:items-start md:flex-wrap gap-8 md:gap-16 lg:gap-20 pt-8 md:pt-12">
        {sponsors.map((sponsor: Sponsor, id) => (
          <SponsorCard
            key={id}
            {...sponsor}
          />
        ))}
      </div>
    </section>
  );
}
