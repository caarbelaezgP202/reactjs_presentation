import { CodeBlock, dracula } from 'react-code-blocks';
import { motion } from 'framer-motion';

import { CONTPRESENT_CODESNIPPET, CONTPRESENT_CODESNIPPET2 } from '@/constants/codeSnippets';
import { useWindowSize } from '@/hooks';

const ContPresetPattern = () => {
  const { width: windowWidth } = useWindowSize();
  return (
    <motion.div
    className="flex flex-col justify-between items-center gap-10"
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -100 }}
  >
    <h3 className="normalHeading text-center mb-2">Container/Presentational</h3>
    <div className="flexBetween gap-6 w-full">
      <section className="w-1/2 flex gap-3">
        <div className="p-2 rounded-lg bg-primary-blue-code shadow-2xl">
          <CodeBlock
            text={CONTPRESENT_CODESNIPPET}
            language="jsx"
            showLineNumbers={false}
            theme={dracula}
            customStyle={{ fontSize: windowWidth > 1512 ? 14 : 12 }}
          />
        </div>
        <div className="p-2 rounded-lg bg-primary-blue-code shadow-2xl">
          <CodeBlock
            text={CONTPRESENT_CODESNIPPET2}
            language="jsx"
            showLineNumbers={false}
            theme={dracula}
            customStyle={{ fontSize: windowWidth > 1512 ? 14 : 12 }}
          />
        </div>
      </section>
      <section>
        <ul>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary-blue listItemPatterns"
          >
            Presentational components can be pure functions
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white listItemPatterns"
          >
             Easily to reuse
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary-blue listItemPatterns"
          >
            Don{`'`}t alter the application logic
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white listItemPatterns"
          >
            Testing presentational components is easy
          </motion.li>
        </ul>
      </section>
    </div>
  </motion.div>
  );
};

export default ContPresetPattern;
