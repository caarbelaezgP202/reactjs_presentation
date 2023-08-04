"use client";

import { BsChevronBarLeft, BsChevronBarRight } from 'react-icons/bs';
import { AnimatePresence, motion } from 'framer-motion';

interface Props {
  children?: React.ReactNode;
  handleNext: () => void;
  handleBack: () => void;
}
const TransitionPageWrapper = ({ children, handleBack, handleNext }: Props) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ delay: 0.25 }}
        className="flex flex-1 justify-between h-full"
      > 
        <div className="controlButtonContainer">
          <button className="controlButton" onClick={() => handleBack()}>
            <BsChevronBarLeft />
          </button>
        </div>

        <div className="flex flex-col justify-start py-10 px-3 w-full overflow-y-scroll">
          <AnimatePresence>{children}</AnimatePresence>
        </div>
        <div className="controlButtonContainer">
          <button className="controlButton" onClick={() => handleNext()}>
            <BsChevronBarRight />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default TransitionPageWrapper;
