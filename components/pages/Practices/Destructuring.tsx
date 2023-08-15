import { CodeBlock, dracula } from 'react-code-blocks';
import { motion } from 'framer-motion';

import {
  BUTTON_CODESNIPPET,
  GOOD_BUTTON_CODESNIPPET,
} from '@/constants/codeSnippets';

const Destructuring = () => {
  return (
    <motion.div
      className="flex flex-col justify-between items-center gap-10"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
    >
      <h3 className="normalHeading text-center mb-5">{`\{ Destructuring \}`}</h3>
      <p className="paragraphs text-justify mb-10">
        Instead of using the prop param to pass all props it much better to
        destructure, all props using curly brackets, and if you use TypeScript
        it is even better because you prevent error when not passing a prop.
      </p>
      <div className="flexBetween gap-12">
        <div className="flex-grow-0 basis-1/2 lg:self-center">
          <div className="p-4 rounded-lg bg-primary-blue-code">
            <CodeBlock
              text={BUTTON_CODESNIPPET}
              language="jsx"
              showLineNumbers={true}
              theme={dracula}
              customStyle={{ fontSize: 18 }}
            />
          </div>
        </div>
        <div className="flex-grow-0 basis-1/2">
          <div className="p-4 rounded-lg bg-primary-blue-code">
            <CodeBlock
              text={GOOD_BUTTON_CODESNIPPET}
              language="jsx"
              showLineNumbers={true}
              theme={dracula}
              customStyle={{ fontSize: 18 }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Destructuring;
