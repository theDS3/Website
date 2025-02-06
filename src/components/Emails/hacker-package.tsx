import {
  Body,
  Container,
  Html,
  Hr,
  Img,
  Button,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';

import {
  Content,
  Footer,
  Header,
  TextLink,
  type ContentSections,
  type MailProps,
} from './common';

const sections: ContentSections = {
  'DS3Id and your QR Code': (
    <>
      <Text className="text-md font-normal text-[#666666]">
        Your unique DS3Id, represented by a QR code, is your golden ticket! Make
        sure to have this handy for check-ins and to enjoy the perks (yes, we
        mean food!). Save this email as a favourite for quick access. If images
        aren&apos;t visible, trust the email
        <TextLink
          content=" thedatasciencecube@gmail.com "
          href="mailto:thedatasciencecube@gmail.com"
        />
        in your Outlook inbox settings or seek assistance from a DS3
        Representative at the event.
      </Text>
      <Hr className="border border-solid border-black my-[26px] mx-0 w-full" />
    </>
  ),
  'Kick-off Day + Meet your team!': (
    <>
      {/* <Text className="text-[#666666] text-md leading-[24px]">
        Get ready for an epic start on the Datathon Kick-off day! Dive into
        crucial details that will shape your Datathon journey. Stick around for
        a lively mix-and-mingle, facilitated by the DS3 Operations team (you
        might recognize them from the CMS Scavenger Hunt 😉). It&apos;s
        team-building time! Can&apos;t make it in person? No worries, catch the
        live stream on the DS3 YouTube channel. The recorded live stream will
        also be available on our YouTube channel after the event.
      </Text> */}
      <Text>[Info]</Text>
      <Text className="text-[#666666] text-md leading-[24px]">
        {<strong className="font-bold">Date: </strong>} Monday Febraury 17th,
        2024
      </Text>
      <Text className="text-[#666666] text-md leading-[24px]">
        {<strong className="font-bold">Venue: </strong>}
        <TextLink
          content="UTSC Instructional Center "
          href="https://g.co/kgs/LEAs6SM"
        />
        or DS3 YouTube Kick-off Stream (check your Discord for the link!)
      </Text>
      <Text className="text-[#666666] text-md leading-[24px]">
        {<strong className="font-bold">Time: </strong>} [Info]
      </Text>
      <Hr className="border border-solid border-black my-[26px] mx-0 w-full" />
    </>
  ),
  'Datathon Starter Pack': (
    <>
      <Text className="text-[#666666] text-md leading-[24px]">
        Get started with the Datathon Starter Pack! Whether your a beginner or
        an experienced hacker, this starter pack contains some amazing tools and
        resources that are sure to help you throughout this Datathon. It also
        includes important information such as the [tentative: rulebook and
        schedule]. Don&apos;t forget to check it out!
        <div className="flex flex-col items-center">
          <Link
            href="https://ds3utsc.notion.site/DS3-Datathon-Starter-Pack-e86148d29b884de8b626f107cdf0873c"
            className="text-white bg-black font-medium border-grey rounded-md text-sm px-5 py-2.5 text-center me-2 mb-2">
            Datathon starter pack
          </Link>
        </div>
      </Text>
      <Hr className="border border-solid border-black my-[26px] mx-0 w-full" />
    </>
  ),
  'Hacker Checklist': (
    <>
      [Details]
      {/* <Text className="text-[#666666] text-md leading-[24px]">
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
            have a team or I am going solo.
            <TextLink
              content=" Team Declaration Form"
              href="https://forms.gle/iDCZeCfcSMzaSxC3A"
            />
            , Due Jan 13th at 23:59
          </Text>
        </li>
        <li key="hacker-checklist-4">
          <Text className="text-[#666666] text-md leading-[24px]">
            Everything about hacking, resources, and support
            <TextLink
              content=" Datathon Starter Pack"
              href="https://ds3utsc.notion.site/DS3-Datathon-Starter-Pack-e86148d29b884de8b626f107cdf0873c"
            />
          </Text>
          <ul className="text-[#666666]">
            <li key="hacker-checklist-4-1">
              <Text className="text-[#666666] text-md leading-[24px]">
                Rules and evaluation metrics
                <TextLink
                  content=" Rule Book"
                  href="https://ds3utsc.notion.site/ds3utsc/DS3-Datathon-Starter-Pack-e86148d29b884de8b626f107cdf0873c#70808b537cbd4e32bc476dbe71e57529"
                />
              </Text>
            </li>
            <li key="hacker-checklist-4-1">
              <Text className="text-[#666666] text-md leading-[24px]">
                Kick-off Day Schedule
                <TextLink
                  content=" Kick-off Day Schedule"
                  href="https://ds3utsc.notion.site/Kick-off-Day-Schedule-d4bdc7fa8351424d9d9fd97aeec428f1"
                />
              </Text>
            </li>
            <li key="hacker-checklist-4-1">
              <Text className="text-[#666666] text-md leading-[24px]">
                Final Day Schedule
                <TextLink
                  content=" Final Day Schedule"
                  href="https://ds3utsc.notion.site/Final-Day-Schedule-48f1776517e644a88f1b789075f6a0aa"
                />
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
            How to reach out if I have questions
            <TextLink
              content=" DS3 Discord"
              href="https://discord.gg/dubRHdvCpP"
            />
          </Text>
        </li>
      </ul> */}
    </>
  ),
};

export default function HackerPackage({
  fullName = 'Hacker',
  imageSrc = '/static/datathon.png',
}: MailProps) {
  return (
    <Html>
      <Header />
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
              <Text className="text-[#666666] text-md text-center leading-[24px]">
                Hello {fullName}!
              </Text>
              <Text className="text-[#666666] text-3xl  text-center leading-[24px]">
                Your Hacker Package is here!
              </Text>

              <Text className="text-[#666666] text-md leading-[24px]">
                Get ready for a thrilling week-long Datathon experience! With
                the Datathon just around the corner, this email serves as your
                one-stop guide to everything you need to know to make the most
                of your data-driven adventure.
              </Text>
            </Section>
            <Hr className="border border-solid border-black my-[26px] mx-0 w-full" />

            <Content sections={sections} />
            <Hr className="border border-solid border-black my-[26px] mx-0 w-full" />

            <Text className="text-[#666666] text-2xl">See you there!</Text>
            <Text className="text-[#666666] text-md">
              For any questions or concerns, please visit our{' '}
              <TextLink
                content="website"
                href="https://ds3utsc.com/https://ds3utsc.com/"
              />
              , contact us via our social media accounts, or email at us at
              <TextLink
                content=" thedatasciencecube@gmail.com"
                href="mailto:thedatasciencecube@gmail.com"
              />
              .
            </Text>
            <Text className="text-[#666666] text-md m-0">Best Regards,</Text>
            <Text className="text-[#666666] text-md m-0">
              The Data Science and Statistics Society (DS3)
            </Text>
            <Text className="text-[#666666] text-md m-0">
              The University of Toronto Scarborough
            </Text>
            <Footer />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
