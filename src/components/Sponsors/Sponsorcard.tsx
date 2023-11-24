import { Sponsor } from './config';

interface SponsorCardProps {
  sponsor: Sponsor;
}

const SponsorCard: React.FC<SponsorCardProps> = ({ sponsor }) => {
  return (
    <div className="sponsor mx-auto rounded-lg bg-gray-900 shadow-lg p-5 flex flex-col max-w-md lg:max-w-xl">
      <p className="text-2xl pb-2">{sponsor.text}</p>
      <p className="text-sm font-bold text-right pb-1 pt-8">{sponsor.author}</p>
      <p className="text-xs font-medium text-right pb-1">{sponsor.position}</p>
    </div>
  );
};

export default SponsorCard;
