import { atomOneDark, CodeBlock } from 'react-code-blocks';
import { motion } from 'framer-motion';

import { SUBHEADING_CODESNIPPET } from '@/constants/codeSnippets';

export const ReactComponent = () => {
  return (
    <motion.div
      className="flexBetween gap-10"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
    >
      <section className="p-4 rounded-lg bg-primary-blue-code">
        <CodeBlock
          text={SUBHEADING_CODESNIPPET}
          language="javascript"
          theme={atomOneDark}
          showLineNumbers={true}
        />
      </section>
      <section className=""></section>
    </motion.div>
  );
};
