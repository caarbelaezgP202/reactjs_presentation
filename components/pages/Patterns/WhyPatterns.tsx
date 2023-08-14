import { motion } from 'framer-motion';

import { Subheading } from '@/components/common';

const WhyPatterns = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <h3 className="normalHeading text-center mb-2">Why Patterns?</h3>
      <Subheading size="text-sm" customClass="flex justify-center opacity-30">
        (Because we need them)
      </Subheading>
      <section className="w-1/2">
        <ul className="mt-8">
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary-blue listItemPatterns"
          >
            Abstract logic easier
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white listItemPatterns"
          >
            Build even more reusable components
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary-blue listItemPatterns"
          >
            Create maintainable code in time
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white listItemPatterns"
          >
            Prevent unnecessary re-renders
          </motion.li>
        </ul>
      </section>
      <iframe
        src="https://giphy.com/embed/Dh5q0sShxgp13DwrvG"
        width="400"
        height="206"
        className="giphy-embed mt-5"
        allowFullScreen
      ></iframe>
      <p>
        <a href="https://giphy.com/gifs/scaler-official-dogs-computer-typing-Dh5q0sShxgp13DwrvG">
          via GIPHY
        </a>
      </p>
    </div>
  );
};

export default WhyPatterns;
