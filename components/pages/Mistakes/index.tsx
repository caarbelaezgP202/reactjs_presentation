"use client";
import { motion } from 'framer-motion';

import TransitionPageWrapper from '../../layout/TransitionPageWrapper';

import ErrorFour from './ErrorFour';
import ErrorOne from './ErrorOne';
import ErrorThree from './ErrorThree';
import ErrorTwo from './ErrorTwo';

const Mistakes = () => {
  return (
    <TransitionPageWrapper>
      <motion.div
        className="flexCol items-center xl:px-44 w-full gap-10"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
      >
        <div className="w-full mb-10">
          <h1 className="normalHeading text-center mb-5">
            The common mistakes
          </h1>
          <p className="paragraphs text-center">
            Now let&apos;s talk about the common mistakes that make our code
            ugly, slow and hard to read. And why do we usually get things wrong.
          </p>
        </div>
        <ErrorOne />
        <ErrorTwo />
        <ErrorThree />
        <ErrorFour />
      </motion.div>
    </TransitionPageWrapper>
  );
};

export default Mistakes;
