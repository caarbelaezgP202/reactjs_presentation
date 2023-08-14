import { CodeBlock, dracula } from 'react-code-blocks';
import { motion } from 'framer-motion';

import {
  USAGEWINDOWSIZE_CODESNIPPET,
  WINDOWSIZE_CODESNIPPET,
} from '@/constants/codeSnippets';

const HooksPattern = () => {
  return (
    <motion.div
      className="flex flex-col justify-between items-center gap-10"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
    >
      <div className="w-full">
        <h3 className="normalHeading text-center mb-10">Hooks pattern</h3>
        <p className="paragraphs mb-5">
          React Hooks are functions special types of functions that you can use
          in order to:
        </p>
        <p className="paragraphs ml-5">
          {"->"} Add state to a functional component the user.
        </p>
        <p className="paragraphs ml-5">
          {"->"} Reuse stateful logic among multiple components throughout the
          app.
        </p>
        <p className="paragraphs ml-5">{"->"} Manage a component's lifecycle</p>
      </div>

      <div className="flex justify-between items-start gap-6 w-full">
        <section className="w-1/2">
          <div className="p-2 rounded-lg bg-primary-blue-code shadow-2xl">
            <CodeBlock
              text={WINDOWSIZE_CODESNIPPET}
              language="jsx"
              showLineNumbers={false}
              theme={dracula}
              customStyle={{ fontSize: 18 }}
            />
          </div>
        </section>
        <section className="w-1/2 flex flex-col">
          <div className="p-2 rounded-lg bg-primary-blue-code shadow-2xl">
            <CodeBlock
              text={USAGEWINDOWSIZE_CODESNIPPET}
              language="jsx"
              showLineNumbers={false}
              theme={dracula}
              customStyle={{ fontSize: 18 }}
            />
          </div>
          <ul className="mt-10">
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-blue listItemPatterns"
            >
              Hooks make it easy to add state to functional components
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white listItemPatterns"
            >
              Allows you to reuse stateful logic among multiple components
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-blue listItemPatterns"
            >
               Make it easy to share non-visual logic.
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white listItemPatterns"
            >
              Good alternative to older React design patterns
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-blue listItemPatterns"
            >
              No more wrapping presentational components
            </motion.li>
          </ul>
        </section>
      </div>
    </motion.div>
  );
};

export default HooksPattern;
