"use client";

import { FaPlay } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { Subheading } from '@/components/common';


const HomePage = () => {
  const router = useRouter();
  return (
    <AnimatePresence>
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ delay: 0.25 }}
    >
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
      </motion.div>
    </AnimatePresence>
  );
};

export default HomePage;
