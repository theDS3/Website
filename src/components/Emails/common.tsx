import {
  Font,
  Head,
  Heading,
  Hr,
  Link,
  Section,
  Text,
} from '@react-email/components';

export interface MailProps {
  fullName: string;
  imageSrc?: string;
}

interface TextLinkProps {
  content: string;
  href: string;
  className?: string;
}

export type ContentSections = Record<string, JSX.Element>;

type FallbackFont =
  | 'Arial'
  | 'Helvetica'
  | 'Verdana'
  | 'Georgia'
  | 'Times New Roman'
  | 'serif'
  | 'sans-serif'
  | 'monospace'
  | 'cursive'
  | 'fantasy';

export const TextLink = ({ content, href, className = '' }: TextLinkProps) => (
  <Link
    className={`text-blue-500 no-underline ${className}`}
    href={href}>
    {content}
  </Link>
);

export const Header = ({
  fontFamily = 'Verdana',
  fallbackFontFamily = 'Verdana',
}: {
  fontFamily?: string;
  fallbackFontFamily?: FallbackFont;
}) => {
  return (
    <Head>
      <Font
        fontFamily={fontFamily}
        fallbackFontFamily={fallbackFontFamily}></Font>
    </Head>
  );
};

export const Content = ({ sections }: { sections: ContentSections }) => {
  return (
    <>
      {Object.entries(sections).map(([heading, content], key) => (
        <Section key={`content-${key}`}>
          <Heading
            key={key}
            as="h2"
            className="text-gray-500 text-2xl font-normal text-center p-0 my-[30px] mx-0">
            {heading}
          </Heading>
          {content}
        </Section>
      ))}
    </>
  );
};

export const Footer = () => {
  return (
    <>
      <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
      <Heading
        as="h3"
        className="text-lg text-gray-400">
        About Us
      </Heading>
      <Text className="text-[#666666] text-md leading-[24px] italic">
        Our Mission as The Data Science and Statistics Society (DS3) is to
        create a platform for peer mentorship, career exploration and
        professional skills development among UTSC students from all disciplines
        interested in Data Science and Statistics. We aim to hold events that
        explore the field of Data Science, expand our member&apos;s professional
        skill sets, and create a collaborative and vibrant Data Science and
        Statistics community.
      </Text>
    </>
  );
};
