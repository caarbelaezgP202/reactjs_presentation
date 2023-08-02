"use client";

import { FaPlay } from 'react-icons/fa';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import Subheading from './Subheading';
import TransitionPageWrapper from './TransitionPageWrapper';

const HomePage = () => {
  const router = useRouter();
  return (
    <TransitionPageWrapper>
      <div className="relative z-10 flex flex-col justify-center items-center">
        <Image
          className="reactLogoSpin"
          src="/react.svg"
          width={200}
          height={200}
          alt="react logo"
        />
        <h1 className="landingHeading">React</h1>
        <Subheading size="text-xl">What you(we) maybe don&apos;t know</Subheading>
        <button className="startButton" onClick={() => router.push('/basics')}>
          <FaPlay />
        </button>
      </div>
    </TransitionPageWrapper>
  );
};

export default HomePage;
