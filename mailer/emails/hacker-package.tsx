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
  | 'DS3Id and your QR Code'
  | 'Kick-off Day + Meet your team!'
  | 'Datathon Starter Pack'
  | 'Hacker Checklist';

const createLinkTag = (content: string, href: string, className = '') => (
  <Link
    className={`text-blue-500 no-underline ${className}`}
    href={href}>
    {content}
  </Link>
);

const sections: Record<HeadingTypes, React.JSX.Element> = {
  'DS3Id and your QR Code': (
    <Text className="text-md font-normal text-[#666666]">
      Your unique DS3Id, represented by a QR code, is your golden ticket! Make
      sure to have this handy for check-ins and to enjoy the perks (yes, we mean
      food!). Save this email as a favourite for quick access. If images
      aren&apos;t visible, trust the email{' '}
      {createLinkTag(
        'thedatasciencecube@gmail.com',
        'mailto:thedatasciencecube@gmail.com',
      )}{' '}
      in your Outlook inbox settings or seek assistance from a DS3
      Representative at the event.
    </Text>
  ),
  'Kick-off Day + Meet your team!': (
    <>
      <Text className="text-[#666666] text-md leading-[24px]">
        Get ready for an epic start on the Datathon Kick-off day! Dive into
        crucial details that will shape your Datathon journey. Stick around for
        a lively mix-and-mingle, facilitated by the DS3 Operations team (you
        might recognize them from the CMS Scavenger Hunt 😉). It&apos;s
        team-building time! Can&apos;t make it in person? No worries, catch the
        live stream on the DS3 YouTube channel. The recorded live stream will
        also be available on our YouTube channel after the event.
      </Text>
      <Text className="text-[#666666] text-md leading-[24px]">
        {<strong className="font-bold">Date: </strong>} 13th January 2023
      </Text>
      <Text className="text-[#666666] text-md leading-[24px]">
        {<strong className="font-bold">Venue: </strong>}{' '}
        {createLinkTag('UTSC Instructional Center', 'https://g.co/kgs/LEAs6SM')}{' '}
        or DS3 YouTube Kick-off Stream (check your Discord for the link!)
      </Text>
      <Text className="text-[#666666] text-md leading-[24px]">
        {<strong className="font-bold">Time: </strong>} 14:00 to 17:00
      </Text>
    </>
  ),
  'Datathon Starter Pack': (
    <Text className="text-[#666666] text-md leading-[24px]">
      Unlock the full potential of your hacking skills with the Datathon Starter
      Pack. Whether you&apos;re a seasoned pro or a newcomer, this starter pack
      is a powerful weapon. The DS3 Academics team has compiled a treasure trove
      of resources to help you craft that winning model. It also includes
      important information such as the rulebook and the schedule. Be sure to
      check it out!{' '}
      {createLinkTag(
        'Datathon Starter Pack',
        'https://ds3utsc.notion.site/DS3-Datathon-Starter-Pack-e86148d29b884de8b626f107cdf0873c',
      )}
    </Text>
  ),
  'Hacker Checklist': (
    <>
      <Text className="text-[#666666] text-md leading-[24px]">
        Feeling a bit overwhelmed? No worries, use our handy checklist to make
        sure you&apos;re all set to hack like a pro!
      </Text>
      <Text className="text-[#666666] text-md leading-[24px]">
        Answer the following questions: I know...
      </Text>
      <ul className="text-[#666666]">
        <li key="hacker-checklist-1">
          <Text className="text-[#666666] text-md leading-[24px]">
            The DS3 Datathon Kick-off Day details (See above)
          </Text>
        </li>
        <li key="hacker-checklist-2">
          <Text className="text-[#666666] text-md leading-[24px]">
            My DS3Id (See above)
          </Text>
        </li>
        <li key="hacker-checklist-3">
          <Text className="text-[#666666] text-md leading-[24px]">
            My Team declaration has been submitted irrespective of whether I
            have a team or I am going solo. (
            {createLinkTag(
              'Team Declaration Form',
              'https://forms.gle/iDCZeCfcSMzaSxC3A',
            )}
            , Due Jan 13th at 23:59)
          </Text>
        </li>
        <li key="hacker-checklist-4">
          <Text className="text-[#666666] text-md leading-[24px]">
            Everything about hacking, resources, and support (
            {createLinkTag(
              'Datathon Starter Pack',
              'https://ds3utsc.notion.site/DS3-Datathon-Starter-Pack-e86148d29b884de8b626f107cdf0873c',
            )}
            )
          </Text>
          <ul className="text-[#666666]">
            <li key="hacker-checklist-4-1">
              <Text className="text-[#666666] text-md leading-[24px]">
                Rules and evaluation metrics (
                {createLinkTag(
                  'Rule Book',
                  'https://ds3utsc.notion.site/ds3utsc/DS3-Datathon-Starter-Pack-e86148d29b884de8b626f107cdf0873c#70808b537cbd4e32bc476dbe71e57529',
                )}
                )
              </Text>
            </li>
            <li key="hacker-checklist-4-1">
              <Text className="text-[#666666] text-md leading-[24px]">
                Kick-off Day Schedule (
                {createLinkTag(
                  'Kick-off Day Schedule',
                  'https://ds3utsc.notion.site/Kick-off-Day-Schedule-d4bdc7fa8351424d9d9fd97aeec428f1',
                )}
                )
              </Text>
            </li>
            <li key="hacker-checklist-4-1">
              <Text className="text-[#666666] text-md leading-[24px]">
                Final Day Schedule (
                {createLinkTag(
                  'Final Day Schedule',
                  'https://ds3utsc.notion.site/Final-Day-Schedule-48f1776517e644a88f1b789075f6a0aa',
                )}
                )
              </Text>
            </li>
          </ul>
        </li>
        <li key="hacker-checklist-5">
          <Text className="text-[#666666] text-md leading-[24px]">
            I have joined the DS3 Discord and have the hacker role assigned
            (Instructions in the Acceptance email)
          </Text>
        </li>
        <li key="hacker-checklist-6">
          <Text className="text-[#666666] text-md leading-[24px]">
            How to reach out if I have questions (
            {createLinkTag('DS3 Discord', 'https://discord.gg/dubRHdvCpP')})
          </Text>
        </li>
      </ul>
    </>
  ),
};

export default function HackerPackage({
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
      <Preview>Get Ready to Hack at DS3 Datathon 2024, {fullName}!</Preview>
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
                We hope the excitement is building up because DS3 Datathon 2024
                is just around the corner! 🚀 This email is your go-to guide for
                all the essential info and resources you&apos;ll need to make
                the most of this data-driven adventure.
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
              We can&apos;t wait to witness your incredible feats at the
              Datathon! Prepare for an enriching experience filled with learning
              and unforgettable moments.
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
