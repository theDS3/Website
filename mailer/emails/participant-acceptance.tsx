import {
  Body,
  Container,
  Font,
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

interface MailProps {
  fullName: string;
  imageSrc?: string;
}

type HeadingTypes =
  | 'Timeline'
  | 'Location'
  | 'Team Declaration'
  | 'Communication'
  | 'Next Steps';

const createLinkTag = (content: string, href: string, className = '') => (
  <Link
    className={`text-blue-500 no-underline ${className}`}
    href={href}>
    {' '}
    {content}{' '}
  </Link>
);

const sections: Record<HeadingTypes, React.JSX.Element> = {
  Timeline: (
    <>
      <div className="mb-10">
        <>
          <span className="bg-green-900 text-green-300 text-xs font-medium mr-2 mb-4 px-2.5 py-1 rounded-full">
            In-Person
          </span>
          <time
            className="mb-1 text-sm font-normal leading-none text-gray-500"
            dateTime="2024-01-13">
            13<sup>th</sup> Jan 2024
          </time>
        </>
        <Text className="text-lg underline underline-offset-1 text-gray-400 pt-1">
          Kick-off Day
        </Text>
        <Text className="mb-4 text-md font-normal text-[#666666]">
          Join us for an electrifying start and get to know your fellow hackers
          at the Team Mix and Mingle event.
        </Text>
      </div>
      <div className="mb-10">
        <div className="mb-1 text-sm font-normal leading-none text-gray-500">
          <span className="bg-purple-900 text-purple-300 text-xs font-medium mr-2 mb-4 px-2.5 py-1 rounded-full">
            Virtual
          </span>
          <time dateTime="2024-01-13">
            14<sup>th</sup> Jan 2024
          </time>{' '}
          -{' '}
          <time dateTime="2024-01-20">
            20<sup>th</sup> Jan 2024
          </time>
        </div>
        <Text className="text-lg underline underline-offset-1 text-gray-400 pt-1">
          Datathon Week
        </Text>
        <Text className="text-md font-normal text-[#666666]">
          Work collaboratively with your team to crack the challenges presented
          on Kick-off Day. Don&apos;t worry; DS3&apos;s got your back with
          asynchronous mentorship on our Discord Server.
        </Text>
      </div>
      <div>
        <>
          <span className="bg-green-900 text-green-300 text-xs font-medium mr-2 mb-4 px-2.5 py-1 rounded-full">
            In-Person
          </span>
          <time
            className="mb-1 text-sm font-normal leading-none text-gray-500"
            dateTime="2024-01-20">
            20<sup>th</sup> Jan 2024
          </time>
        </>
        <Text className="text-lg underline underline-offset-1 text-gray-400 pt-1">
          Final Day
        </Text>
        <Text className="text-md font-normal text-[#666666]">
          Attend the final day for workshops, networking, and the grand awards
          ceremony. Trust us; you won&apos;t want to miss it! Attendance is
          mandatory on this day in order to compete for prizes.
        </Text>
      </div>
    </>
  ),
  Location: (
    <Text className="text-[#666666] text-md leading-[24px]">
      All in-person events will take place at the
      {createLinkTag(
        'Instructional Centre, U of T Scarborough',
        'https://maps.app.goo.gl/zJKxeX7dL2hf2z4WA',
      )}
      Check-in booths will be by the lifts, so bring your ID for a smooth entry.
    </Text>
  ),
  'Team Declaration': (
    <>
      <Text className="text-[#666666] text-md leading-[24px]">
        Forming a team is key! Hop on our Discord Server to meet potential
        teammates. Join us for an in-person mix-n-mingle or connect with others
        virtually. Once you&apos;ve found your dream team, fill out the
        {createLinkTag(
          'Team Declaration Form',
          'https://forms.gle/yrwj8cSrDi7jVbVm9',
        )}
        by {<strong className="font-bold">January 13th, 2023, 23:59</strong>}.{' '}
        Remember, no changes are allowed after submission, so choose wisely!{' '}
        {
          <strong className="font-bold">
            If you decide to participate solo, you still need to declare your
            team with a single member in the form.
          </strong>
        }
      </Text>
    </>
  ),
  Communication: (
    <Text className="text-[#666666] text-md leading-[24px]">
      Got questions? Our Discord Server is the place to be. Use relevant
      channels for faster responses, but please avoid sliding into
      executives&apos; DMs. We&apos;re here to help, and your questions matter!
    </Text>
  ),
  'Next Steps': (
    <ul className="text-[#666666]">
      <li key="next-step-1">
        <Text className="text-[#666666] text-md leading-[24px]">
          Keep an eye on your inbox for the hacker package later this week.
          It&apos;ll spill the beans on datasets, workshops, evaluation metrics,
          resources, and rules.
        </Text>
      </li>
      <li key="next-step-2">
        <Text className="text-[#666666] text-md leading-[24px]">
          If plans change and you are no longer able to participate, let us know
          at
          {createLinkTag(
            'thedatasciencecube@gmail.com',
            'mailto:thedatasciencecube@gmail.com',
          )}
          .
        </Text>
      </li>
      <li key="next-step-3">
        <Text className="text-[#666666] text-md leading-[24px]">
          Haven&apos;t joined our Discord yet? Click
          {createLinkTag('here', 'https://discord.gg/dubRHdvCpP')} to join and
          automatically obtain the Hacker role!
        </Text>
      </li>
      <li key="next-step-4">
        <Text className="text-[#666666] text-md leading-[24px]">
          Already a member of our Discord? Click
          {createLinkTag('here', 'https://discord.gg/dubRHdvCpP')} to
          self-assign yourself with the Hacker role!.
        </Text>
      </li>
    </ul>
  ),
};

export default function ParticipantAcceptance({
  fullName = 'Hacker',
  imageSrc = '/static/datathon.png',
}: MailProps) {
  return (
    <Html>
      <Head>
        <Font
          fontFamily="Verdana"
          fallbackFontFamily="Verdana"></Font>
      </Head>
      <Preview>Welcome to the DS3 Datathon</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="my-3 mx-auto">
            <Section className="mt-[32px]">
              <Img
                src={imageSrc}
                alt="DS3 Datathon Banner"
                className="my-0 mx-auto"
              />
            </Section>
            <Section>
              <Text className="text-[#666666] text-md leading-[24px]">
                Hello {fullName}!
              </Text>
              <Text className="text-[#666666] text-md leading-[24px]">
                Congratulations on being selected to participate in the DS3
                Datathon 2024! 🎉
              </Text>
              <Text className="text-[#666666] text-md leading-[24px]">
                We&apos;re thrilled to have you on board for this exciting data
                science adventure. Get ready for a week full of learning,
                collaboration, and innovation!
              </Text>
              <div className="flex flex-col items-center">
                <Link
                  href="https://forms.gle/kas3sn9UeJ8EfXHk7"
                  className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">
                  RSVP
                </Link>
              </div>
              <Text className="text-[#666666] text-md leading-[24px]">
                Here are some important details to guide you through the
                upcoming Datathon:
              </Text>
            </Section>
            {Object.entries(sections).map(([heading, content], key) => (
              <Section key={key}>
                <Heading
                  key={key}
                  as="h2"
                  className="text-gray-500 text-2xl font-normal text-center p-0 my-[30px] mx-0">
                  {heading}
                </Heading>
                {content}
              </Section>
            ))}
            <Text className="text-[#666666] text-md">
              Get ready for an unforgettable Datathon experience! We&apos;re
              counting down the days to kick-off.
            </Text>
            <Text className="text-[#666666] text-md m-0">Best Regards,</Text>
            <Text className="text-[#666666] text-md m-0">
              The Data Science and Statistics Society (DS3)
            </Text>
            <Text className="text-[#666666] text-md m-0">
              The University of Toronto Scarborough
            </Text>
            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Heading
              as="h3"
              className="text-lg text-gray-400">
              About Us
            </Heading>
            <Text className="text-[#666666] text-md leading-[24px] italic">
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
