import Vision from '../public/vision.svg';
import Mission from '../public/mission.svg';
import Image from 'next/image';

export default function AboutUs() {
  return (
    <section
      id="about-us"
      className="flex flex-col items-center justify-center">
      <div className="text-center flex flex-col items-center">
        <div className="flex items-center justify-center">
          <Image
            priority
            src={Vision}
            alt="Vision Icon"
            max-width={150}
            height={150}
          />
        </div>
        <h2 className="text-2xl font-bold pb-4 pt-4">VISION</h2>
        <p className="text-lg px-4 lg:text-4xl text-3xl">
          To be the most student-centric community to create an environment
          where students feel encouraged to engage with data science and
          statistics
        </p>
      </div>
      <div className="text-center mt-10 flex flex-col items-center">
        <div className="flex items-center justify-center">
          <Image
            priority
            src={Mission}
            alt="Mission Icon"
            max-width={150}
            height={150}
          />
        </div>
        <h2 className="text-2xl font-bold pb-4 pt-4">MISSION</h2>
        <p className="text-lg px-4 lg:text-4xl text-3xl">
          To make a contribution to our student community by creating
          opportunities for engagement in Data Science and Statistics.
        </p>
      </div>
    </section>
  );
}