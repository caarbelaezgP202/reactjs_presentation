"use client";

import { FaPlay } from 'react-icons/fa';
import Image from 'next/image';

import Subheading from './Subheading';
import TransitionPageWrapper from './TransitionPageWrapper';

const HomePage = () => {
  return (
    <TransitionPageWrapper>
      <div className="relative flex flex-col justify-center items-center">
        <h1 className="landingHeading">React</h1>
        <Subheading size="medium">What you(we) maybe don&apos;t know</Subheading>
        <Image
          className="reactLogoSpin"
          src="/react.svg"
          width={200}
          height={200}
          alt="react logo"
        />
        <button className="startButton">
          <FaPlay />
        </button>
      </div>

    </TransitionPageWrapper>
  );
};

export default HomePage;
