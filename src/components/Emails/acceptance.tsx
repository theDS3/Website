import {
  Body,
  Container,
  Html,
  Img,
  Link,
  Hr,
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

const imageSrc = '/static/datathon.png';

const timelineSection: ContentSections = {
  Timeline: (
    <>
      <div className="mb-4">
        <>
          {/* <span className="bg-green-900 text-green-300 text-xs font-medium mr-2 mb-4 px-2.5 py-1 rounded-full">
            In-Person
          </span> */}
          <time
            className="mb-4 text-md font-normal leading-none text-gray-400 underline"
            dateTime="2024-02-17">
            February 17th
          </time>
        </>
        <div className="text-md pt-1 text-gray-500">Kick-off Day</div>
        <Text className="mb-4 text-md font-normal text-[#666666]">
          insert description here
        </Text>
      </div>
      <div className="mb-4">
        <div className="">
          {/* <span className="bg-purple-900 text-purple-300 text-xs font-medium mr-2 mb-4 px-2.5 py-1 rounded-full">
            Virtual
          </span> */}
          <time
            className="mb-4 text-md font-normal leading-none text-gray-400 underline underline-offset-1"
            dateTime="2024-02-18">
            February 18th to 21st
          </time>
        </div>
        <div className="text-md pt-1 text-gray-500">Datathon Week</div>
        <Text className="text-md font-normal text-[#666666]">
          insert description here
        </Text>
      </div>
      <div>
        <>
          {/* <span className="bg-green-900 text-green-300 text-xs font-medium mr-2 mb-4 px-2.5 py-1 rounded-full">
            In-Person
          </span> */}
          <time
            className="mb-4 text-md font-normal leading-none text-gray-400 underline"
            dateTime="2024-02-22">
            February 22th
          </time>
        </>
        <div className="text-md pt-1 text-gray-500">Final Day</div>
        <Text className="mb-4 text-md font-normal text-[#666666]">
          insert description here
        </Text>
      </div>
    </>
  ),
};

const sections: ContentSections = {
  'Team Declaration': (
    <>
      <Text className="text-[#666666] text-md leading-[24px]">
        Looking for team members? Connect with other participant virtually by
        hopping onto our discord server! Once you've found your member(s),{' '}
        <strong>
          fill out the{' '}
          <TextLink
            content=" Team Declaration Form "
            href="https://forms.gle/yrwj8cSrDi7jVbVm9"
          />{' '}
          before February 17th, at 11:59PM.{' '}
        </strong>
        Note that{' '}
        <strong>
          solo participants are still required to submit a Team Declaration form{' '}
        </strong>
        with a single member on the form.
      </Text>
      <Hr className="border border-solid border-black my-[26px] mx-0 w-full" />
    </>
  ),
  'Next Steps': (
    <ul className="text-[#666666]">
      <li key="next-step-1">
        <Text className="text-[#666666] text-md leading-[24px]">
          Keep an eye on your inbox for the hacker package coming later this
          week. It will inform you of any other logistics, assign you a DS3Id,
          provide you with a Datathon Starter Pack, and more!
        </Text>
      </li>
      <li key="next-step-2">
        <Text className="text-[#666666] text-md leading-[24px]">
          If you are no longer able to attend and participate in this years
          Datathon, let us know at
          <TextLink
            content=" thedatasciencecube@gmail.com"
            href="mailto:thedatasciencecube@gmail.com"
          />
          .
        </Text>
      </li>
      <li key="next-step-3">
        <Text className="text-[#666666] text-md leading-[24px]">
          Haven&apos;t joined our Discord yet? Click
          <TextLink
            content=" here "
            href="https://discord.gg/dubRHdvCpP"
          />
          to join and automatically obtain the Hacker role!
        </Text>
      </li>
      <li key="next-step-4">
        <Text className="text-[#666666] text-md leading-[24px]">
          Already a member of our Discord? Click
          <TextLink
            content=" here "
            href="https://discord.gg/dubRHdvCpP"
          />
          to self-assign yourself with the Hacker role!.
        </Text>
      </li>
    </ul>
  ),
};

export default function Acceptance({
  fullName = 'Data Enthusiast',
  imageSrc = '/static/datathon.png',
}: MailProps) {
  return (
    <Html>
      <Header />
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
              <Text className="text-[#666666] text-lg text-center italic leading-[24px]">
                Hey there {fullName}!
              </Text>
              <Text className="text-[#666666] text-3xl text-bold text-center leading-[24px]">
                You've been accepted!
              </Text>
              <Text className="text-[#666666] text-md leading-[24px]">
                <strong>Congratulations!</strong> We are pleased to inform you
                that you have been accepted to attend our annual Datathon,
                taking place on <strong>February 17th to 22nd</strong> at the
                <strong> University of Toronto Scarborough</strong>. Get ready
                for a one-of-a-kind hackathon experience, where you will have
                the opportunity to complete an exciting project using data
                science and machine learning! We can't wait to see what you come
                up with during this thrilling week-long experience!
              </Text>
              <div className="flex flex-col items-center">
                <Link
                  href="https://forms.gle/kas3sn9UeJ8EfXHk7"
                  className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">
                  RSVP
                </Link>
              </div>
              {/* <Text className="text-[#666666] text-md leading-[24px]">
                Here are some important details to guide you through the
                upcoming Datathon:
              </Text> */}
              <Hr className="border border-solid border-black my-[26px] mx-0 w-full" />
            </Section>
            <Content sections={timelineSection} />
            <Hr className="border border-solid border-black my-[26px] mx-0 w-full" />

            <Content sections={sections} />
            <Hr className="border border-solid border-black my-[26px] mx-0 w-full" />

            <Text className="text-[#666666] text-3xl text-bold  leading-[24px]">
              Once again, congratulations!
            </Text>

            <Text className="text-[#666666] text-md leading-[24px]">
              The third annual Datathon hosted by the Data Science and
              Statistics Society offers a unique hackathon experience in
              performing data prediction based on a variety of data sets. It's
              an opportunity to collaborate, innovate, and showcase your data
              science skills, all made possible by the extraordinary efforts of
              our team, together with the support of our sponsors and the
              University of Toronto Scarborough.
            </Text>
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
