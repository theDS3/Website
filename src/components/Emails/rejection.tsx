import {
  Body,
  Container,
  Html,
  Img,
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

const sections: ContentSections = {
  'About the Datathon': (
    <>
      <Text className="text-[#666666] text-md leading-[24px]">
        The third annual Datathon hosted by the Data Science and Statistics
        Society offers a unique hackathon experience in performing data
        prediction based on a variety of data sets. It&apos;s an opportunity to
        collaborate, innovate, and showcase your data science skills, all made
        possible by the extraordinary efforts of our team, together with the
        support of our sponsors and the University of Toronto Scarborough.
      </Text>
    </>
  ),
};

export default function Rejection({
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
              <Text className="text-[#666666] text-md leading-[24px]">
                Thank you for your interest in participating in our annual
                Datathon. Unfortunately, we cannot accept your application at
                this time. With so many amazing candidates this year, the
                selection process has been extremely difficult. However, we
                appreciate the time and effort you have made in submitting your
                application and will let you know if any spots open up in the
                future.
              </Text>
              <Text className="text-[#666666] text-md leading-[24px]">
                Once again, we appreciate your interest in the amazing world of
                Data Science and Machine Learning!
              </Text>
              {/* <Text className="text-[#666666] text-md leading-[24px]">
                Here are some important details to guide you through the
                upcoming Datathon:
              </Text> */}
              <Hr className="border border-solid border-black my-[26px] mx-0 w-full" />
            </Section>

            <Content sections={sections} />
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

            <Text className="text-[#666666] text-md m-0">All the best,</Text>
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
