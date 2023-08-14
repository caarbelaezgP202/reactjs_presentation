import { motion } from 'framer-motion';

const ErrorOne = () => {
  return (
    <div className="flexCol w-full mb-10">
      <div className="flexCol mb-5">
        <span className="smallHeading mb-5">
          1. Passing props without using them
        </span>

        <p className="paragraphs">
          This usually happens because you realize that you don&apos;t need certain
          prop but you also forget to remove from it.
        </p>
      </div>

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
              className="bg-secondary-orange-light listItemPatterns"
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
              It&apos;s challenging for other developers on the team to
              understand
            </motion.li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ErrorOne;
