"use client";

import { AnimatePresence, motion } from 'framer-motion';

interface Props {
  children: React.ReactNode;
}
const TransitionPageWrapper = ({ children }: Props) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ delay: 0.25 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default TransitionPageWrapper;
