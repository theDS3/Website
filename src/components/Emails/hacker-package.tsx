import {
  Body,
  Container,
  Html,
  Hr,
  Img,
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
  'Final Day Logistics': (
    <>
      <Text className="text-[#666666] text-md leading-[24px]">
        After all the coding, data crunching, and model-building, join us at the
        Instructional Centre (IC) at the University of Toronto Scarborough for a
        day packed with workshops, networking opportunities, and a free lunch!
      </Text>
      <Text className="text-[#666666] text-md leading-[24px]">
        {<strong className="font-bold">Date: </strong>} Friday Febraury 22th,
        2025
      </Text>
      <Text className="text-[#666666] text-md leading-[24px]">
        {<strong className="font-bold">Venue: </strong>}
        <TextLink
          content="UTSC Instructional Center (IC)"
          href="https://g.co/kgs/LEAs6SM"
        />
      </Text>
      <div className="mt-6 border border-gray-300 rounded-lg overflow-hidden text-[#666666] text-md">
        <div className="bg-gray-200 font-bold flex">
          <div className="w-1/3 p-3 border-r border-gray-300 text-black">
            Time
          </div>
          <div className="w-1/3 p-3 border-r border-gray-300 text-black">
            Venue
          </div>
          <div className="w-1/3 p-3 text-black">Event</div>
        </div>
        <div className="flex border-t border-gray-300">
          <div className="w-1/3 p-3 border-r border-gray-300">11:00 AM</div>
          <div className="w-1/3 p-3 border-r border-gray-300">IC Atrium</div>
          <div className="w-1/3 p-3">Registration</div>
        </div>
        <div className="flex border-t border-gray-300">
          <div className="w-1/3 p-3 border-r border-gray-300">12:10 PM</div>
          <div className="w-1/3 p-3 border-r border-gray-300">IC 130</div>
          <div className="w-1/3 p-3">Opening Ceremony</div>
        </div>
        <div className="flex border-t border-gray-300">
          <div className="w-1/3 p-3 border-r border-gray-300">1:00 PM</div>
          <div className="w-1/3 p-3 border-r border-gray-300">IC 130</div>
          <div className="w-1/3 p-3">Workshop I</div>
        </div>
        <div className="flex border-t border-gray-300">
          <div className="w-1/3 p-3 border-r border-gray-300">1:30 PM</div>
          <div className="w-1/3 p-3 border-r border-gray-300">IC Atrium</div>
          <div className="w-1/3 p-3">Lunch + Networking</div>
        </div>
        <div className="flex border-t border-gray-300">
          <div className="w-1/3 p-3 border-r border-gray-300">2:30 PM</div>
          <div className="w-1/3 p-3 border-r border-gray-300">IC 130</div>
          <div className="w-1/3 p-3">Workshop II</div>
        </div>
        <div className="flex border-t border-gray-300">
          <div className="w-1/3 p-3 border-r border-gray-300">4:30 PM</div>
          <div className="w-1/3 p-3 border-r border-gray-300">IC 130</div>
          <div className="w-1/3 p-3">Closing Ceremony</div>
        </div>
      </div>
      <Hr className="border border-solid border-black my-[26px] mx-0 w-full" />
    </>
  ),
  'Hacker Checklist': (
    <>
      <Text className="text-[#666666] text-md leading-[24px]">
        Feeling a bit overwhelmed? No worries, use our handy checklist to make
        sure you&apos;re all set to hack like a pro! We have a{' '}
        <strong>
          <TextLink
            content=" Datathon Starter Pack "
            href="https://ds3utsc.notion.site/DS3-Datathon-Starter-Pack-e86148d29b884de8b626f107cdf0873c"
          />
        </strong>
        to help you get started.
      </Text>
      <Text className="text-[#666666] text-md leading-[24px]">
        Make sure you can confidently answer the following questions:
      </Text>
      <ul className="text-[#666666]">
        <li key="hacker-checklist-1">
          <Text className="text-[#666666] text-md leading-[24px]">
            Do I know the Final Day Schedule? (See above for timetable and
            logistics)
          </Text>
        </li>
        <li key="hacker-checklist-2">
          <Text className="text-[#666666] text-md leading-[24px]">
            Do I know my DS3ID? (See above)
          </Text>
        </li>
        <li key="hacker-checklist-3">
          <Text className="text-[#666666] text-md leading-[24px]">
            Have I submitted my Team Declaration form regardless of whether I
            have a team or am going solo?
            <TextLink
              content=" Team Declaration Form"
              href="https://forms.gle/DnKZtaC7ZzkQh3cS6"
            />
            , Due Feb 16th at 23:59
          </Text>
        </li>
        <li key="hacker-checklist-5">
          <Text className="text-[#666666] text-md leading-[24px]">
            Have I joined the DS3 Discord and received the hacker role?
            (Instructions in the Acceptance email)
          </Text>
        </li>
        <li key="hacker-checklist-6">
          <Text className="text-[#666666] text-md leading-[24px]">
            Do I know how to get help if I have questions? (Use
            <TextLink
              content=" DS3 Discord"
              href="https://discord.gg/dubRHdvCpP"
            />
            )
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
              <Text className="text-[#666666] text-2xl italic text-center leading-[24px]">
                Hello {fullName}!
              </Text>
              <Text className="text-black text-4xl text-bold text-center leading-[24px]">
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
