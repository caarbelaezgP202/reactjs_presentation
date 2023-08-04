import { CodeBlock, dracula } from 'react-code-blocks';
import { motion } from 'framer-motion';

import { HOC_CODESNIPPET, WRAPPEDCOMPONENT_CODESNIPPET } from '@/constants/codeSnippets';
import { useWindowSize } from '@/hooks';

const HocPattern = () => {
  const { width: windowWidth } = useWindowSize();
  return (
    <motion.div
    className="flex flex-col justify-between items-center gap-10"
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -100 }}
  >
    <h3 className="normalHeading text-center mb-2">HOC</h3>
    <div className="flexBetween gap-6 w-full">
      <section>
        <ul>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary-blue listItemPatterns"
          >
            Allows us to keep reusable logic in one place
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-secondary-red-light listItemPatterns"
          >
            You can easily override some prop
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-secondary-orange-light listItemPatterns"
          >
            Can be difficult to read the code.
          </motion.li>
        </ul>
      </section>
      <section className="flex gap-3">
        <div className="p-2 rounded-lg bg-primary-blue-code shadow-2xl">
          <CodeBlock
            text={HOC_CODESNIPPET}
            language="jsx"
            showLineNumbers={false}
            theme={dracula}
            customStyle={{ fontSize: windowWidth > 1512 ? 14 : 12 }}
          />
        </div>
        <div className="p-2 rounded-lg bg-primary-blue-code shadow-2xl">
          <CodeBlock
            text={WRAPPEDCOMPONENT_CODESNIPPET}
            language="jsx"
            showLineNumbers={false}
            theme={dracula}
            customStyle={{ fontSize: windowWidth > 1512 ? 14 : 12 }}
          />
        </div>
      </section>
    </div>
  </motion.div>
  );
};

export default HocPattern;
