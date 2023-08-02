import { useState } from 'react';
import { CodeBlock, dracula } from 'react-code-blocks';
import { motion } from 'framer-motion';

import { SUBHEADING_CODESNIPPET } from '@/constants/codeSnippets';

import './styles.css';

export const ReactComponent = () => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount((prev) => prev + 1);
  };

  const handleResetCount = () => {
    setCount(0);
  };

  return (
    <motion.div
      className="flex flex-col justify-between items-center gap-10"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
    >
      <h3 className="normalHeading text-center mb-2">React component</h3>
      <div className="flexBetween w-full">
        <section className="w-3/5">
          <div className="p-2 rounded-lg bg-primary-blue-code shadow-2xl">
            <CodeBlock
              text={SUBHEADING_CODESNIPPET}
              language="jsx"
              showLineNumbers={true}
              theme={dracula}
            />
          </div>
        </section>
        <section>
          <div className="p-5 flex flex-col justify-center items-center bgBlueToPink rounded-xl shadow-custom">
            <h3 className="text-4xl mb-4">Counter</h3>
            <span className="mb-3 text-xl">You clicked {count} times! </span>
            <div className="flexBetween gap-2">
              <button
                className="bg-primary-purple text-white p-2 rounded-xl text-xl"
                onClick={() => handleCount()}
              >
                Click me
              </button>
              <button 
                className="bg-primary-purple text-white p-2 rounded-xl text-xl"
                onClick={() => handleResetCount()}
              >
                Reset
              </button>
            </div>

          </div>
        </section>
      </div>
    </motion.div>
  );
};
