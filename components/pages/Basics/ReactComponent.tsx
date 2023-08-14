"use client";

import { useState } from 'react';
import { CodeBlock, dracula } from 'react-code-blocks';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { SUBHEADING_CODESNIPPET } from '@/constants/codeSnippets';
import { useWindowSize } from '@/hooks';

const ReactComponent = () => {
  const [count, setCount] = useState(0);
  const { width: windowWidth } = useWindowSize();

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
      <h3 className="normalHeading text-center mb-6">React component</h3>
      <div className="flex gap-12">
        <p className="paragraphs text-justify flex-grow-0 basis-1/2 lg:self-center">
          A component is an independent, reusable piece of code which divides
          the user interfaces into smaller pieces. This concept is used from all
          the modern libraries/framewroks to build UI.
        </p>
        <div className="flex p-2 border-black rounded-md flex-grow-0 basis-1/2">
          <Image
            className="rounded-lg"
            src="/images/components.png"
            alt="Components"
            width={1000}
            height={200}
          />
        </div>
      </div>
      <div className="flexStart w-full my-3">
        <h3 className="smallHeading text-left">How does that look in code?</h3>
      </div>
      
      <div className="flexAround w-full">
        <section className="w-1/2">
          <div className="p-2 rounded-lg bg-primary-blue-code">
            <CodeBlock
              text={SUBHEADING_CODESNIPPET}
              language="jsx"
              showLineNumbers={false}
              theme={dracula}
              customStyle={{ fontSize: windowWidth > 1512 ? 18 : 16 }}
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

export default ReactComponent;
