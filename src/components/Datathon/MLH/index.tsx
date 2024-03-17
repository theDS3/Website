import Image from 'next/image';
import Link from 'next/link';

export default function Badge() {
  return (
    <Link
      id="mlh-trust-badge"
      style={{
        maxWidth: '100px',
        minWidth: '60px',
        position: 'fixed',
        right: '10px',
        top: 0,
        width: '15%',
      }}
      href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2024-season&utm_content=gray"
      target="_blank"
      rel="noopener">
      <Image
        priority
        src="https://s3.amazonaws.com/logged-assets/trust-badge/2024/mlh-trust-badge-2024-gray.svg"
        alt="Major League Hacking 2024 Hackathon Season"
        width={150}
        height={50}
      />
    </Link>
  );
}
