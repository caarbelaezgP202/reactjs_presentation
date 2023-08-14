"use client";

import { CodeBlock, dracula } from "react-code-blocks";
import { motion } from "framer-motion";

const Mistakes = () => {
  return (
    <motion.div
      className="flexCol items-center w-full gap-10"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
    >
      <div className="paragraphs w-full">
        <h1 className="normalHeading text-center mb-5">The common mistakes</h1>
        Now let&apos;s talk about the common mistakes that make our code ugly,
        slow and hard to read.
      </div>

      <div className="w-full">
        <span className="smallHeading mb-5">Passing props without using them</span>
        <div className="flexAround">
          <div>
            <iframe
              src="https://giphy.com/embed/l2QZQ59A13BEIrdFS"
              width="480"
              height="240"
              className="giphy-embed"
            ></iframe>
          </div>
          <div>
            <ul>
              <motion.li
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-blue listItemPatterns"
              >
                Unused props pile up
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-secondary-red-light listItemPatterns"
              >
                Can cause unpredictable bugs
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-secondary-orange-light listItemPatterns"
              >
                It&apos;s challenging for other developers on the team to understand 
              </motion.li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Mistakes;

{
  /* 


  */
}
