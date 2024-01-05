import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';
import * as React from 'react';

type HeadingTypes =
  | 'Time & Date:'
  | 'Location:'
  | 'Hacker Package:'
  | 'Team Declaration:'
  | 'Communication:'
  | 'Important note:';

interface MailProps {
  fullName: string;
  imageSrc?: string;
}

const sections: Record<HeadingTypes, React.JSX.Element> = {
  'Time & Date:': (
    <Text className="text-black text-[14px] leading-[24px]">
      The DS3 Datathon 2023 will be held on Tuesday 21<sup>st</sup> ‎ February
      2023 - from 08:00 to 21:00.
    </Text>
  ),
  'Location:': (
    <Text className="text-black text-[14px] leading-[24px]">
      Our event will be happening in the ‎
      <Link
        className="text-blue-600 no-underline"
        href="https://www.google.com/maps/place/Instructional+Centre+(IC)/@43.7868131,-79.193142,17z/data=!3m1!5s0x89d4da71edafc075:0xd8c2ab42332259f5!4m5!3m4!1s0x89d4db8ed0b31a77:0x89d9d2bb51234c76!8m2!3d43.7867303!4d-79.1894516?shorturl=1">
        Instructional Centre at the University of Toronto Scarborough
      </Link>
      . Check-in booths will be located in front of the lift area, please bring
      a valid ID for check-in.
    </Text>
  ),
  'Hacker Package:': (
    <Text className="text-black text-[14px] leading-[24px]">
      Your ‎
      <Link
        className="text-blue-600 no-underline"
        href="https://drive.google.com/file/d/13e-l95gdolcdpSeKK-_g1N2cfnB0VlI_/view?usp=sharing">
        Hacker Package
      </Link>
      ‎ contains essential information such as the schedule, hacking rules,
      important links, and logistical details. Please go through it carefully!
    </Text>
  ),
  'Team Declaration:': (
    <Text className="text-black text-[14px] leading-[24px]">
      Team declaration rules are mentioned in the Hacker Package. Please go
      through them and after reading if you wish to declare a team, fill up ‎
      <Link
        className="text-blue-600 no-underline"
        href="https://forms.gle/KcbCMuJXJpa4y5vT8">
        this
      </Link>
      ‎ form before 23:59 on February 20th, 2023.
    </Text>
  ),
  'Communication:': (
    <Text className="text-black text-[14px] leading-[24px]">
      You can reach us at ‎
      <Link
        className="text-blue-600 no-underline"
        href="mailto:thedatasciencecube@gmail.com">
        thedatasciencecube@gmail.com
      </Link>
      , but please expect a delay in response due to the high volume of emails
      on our end. Contact us on our ‎
      <Link
        className="text-blue-600 no-underline"
        href="https://linktr.ee/datasciencecube">
        social media channels ‎
      </Link>
      or on our ‎
      <Link
        className="text-blue-600 no-underline"
        href="https://discord.gg/xDpujjZ">
        discord server ‎
      </Link>
      for quicker responses. Do not reach out to executives on discord through
      DMs as we might be unable to read and respond to your messages in time.
    </Text>
  ),

  'Important note:': (
    <ul>
      <li className="text-black text-[14px] leading-[24px]">
        If you do not arrive before 09:30 on the 21<sup>st</sup> of February,
        you will not be able to participate in the Datathon.
      </li>
      <li className="text-black text-[14px] leading-[24px]">
        You will be provided meals only as per the restrictions you mentioned in
        the registration form.
      </li>
      <li className="text-black text-[14px] leading-[24px]">
        You are required to attend opening and closing ceremonies to participate
        in the Datathon.
      </li>
    </ul>
  ),
};

function createSections(
  heading: string,
  content: React.JSX.Element,
  key: number,
) {
  return (
    <Section key={key}>
      <Heading
        as="h2"
        className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
        {heading}
      </Heading>
      {content}
    </Section>
  );
}

export default function HackerPackage({
  fullName = 'Hacker',
  imageSrc = '/static/email-banner.jpg',
}: MailProps) {
  return (
    <Html>
      <Head />
      <Preview>Welcome to the DS3 Datathon</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="my-3 mx-auto p-10 w-[500px]">
            <Section className="mt-[32px]">
              <Img
                src={imageSrc}
                alt="DS3 Datathon Banner"
                width="470"
                className="my-0 mx-auto"
              />
            </Section>
            <Section>
              <Text className="text-black text-[14px] leading-[24px]">
                Hello {fullName}!
              </Text>
              <Text className="text-black text-[14px] leading-[24px]">
                Thank you for registering for the Data Science and Statistics
                Society Datathon 2023! We&apos;ve been working tirelessly to put
                together a fantastic event and we&apos;re so excited to welcome
                you to it. But first, some things you need to know:
              </Text>
            </Section>
            {Object.entries(sections).map(([heading, content], key) =>
              createSections(heading, content, key),
            )}
            <Text className="text-black text-[14px] m-0">Best Regards,</Text>
            <Text className="text-black text-[14px]  m-0">
              The Data Science and Statistics Society (DS3)
            </Text>
            <Text className="text-black text-[14px]  m-0">
              The University of Toronto Scarborough
            </Text>
            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Heading as="h5">About Us</Heading>
            <Text className="text-[#666666] text-[12px] leading-[24px] italic">
              Our Mission as The Data Science and Statistics Society (DS3) is to
              create a platform for peer mentorship, career exploration and
              professional skills development among UTSC students from all
              disciplines interested in Data Science and Statistics. We aim to
              hold events that explore the field of Data Science, expand our
              member&apos;s professional skill sets, and create a collaborative
              and vibrant Data Science and Statistics community.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
