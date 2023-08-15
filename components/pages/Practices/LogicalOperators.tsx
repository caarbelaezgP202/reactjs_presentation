import { CodeBlock, dracula } from 'react-code-blocks';
import { motion } from 'framer-motion';

import {
  TERNARY_CODESNIPPET,
} from '@/constants/codeSnippets';

const LogicalOperators = () => {
  return (
    <motion.div
      className="flex flex-col justify-between items-center gap-10"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
    >
      <h3 className="normalHeading text-center mb-5">Logical operators</h3>
      <p className="paragraphs text-justify mb-10">
        So you been conditionally rendering items using the && operator, do you
        understand how does this operator works? What will be rendered in the
        following examples.
      </p>
      <div className="p-4 rounded-lg bg-primary-blue-code">
        <CodeBlock
          text="<>{NaN && <div>👋</div>}</>"
          language="jsx"
          theme={dracula}
          customStyle={{ fontSize: 18 }}
        />
      </div>
      <div className="p-4 rounded-lg bg-primary-blue-code">
        <CodeBlock
          text="<>{[].length && <div>🐊</div>}</>"
          language="jsx"
          theme={dracula}
          customStyle={{ fontSize: 18 }}
        />
      </div>

      <h3 className="normalHeading text-center mb-5">The solution</h3>
      <div className="flexBetween gap-12">
        <div className="flex-grow-0 basis-1/2">
          <p className="paragraphs mb-5">
            Please use ternary operator or cast your values as booleans
          </p>
          <iframe
            src="https://giphy.com/embed/2rqEdFfkMzXmo"
            width="480"
            height="289"
            className="giphy-embed"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex-grow-0 basis-1/2 p-4">
          <CodeBlock
            text={TERNARY_CODESNIPPET}
            showLineNumbers={false}
            language="jsx"
            theme={dracula}
            customStyle={{ fontSize: 18 }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default LogicalOperators;
