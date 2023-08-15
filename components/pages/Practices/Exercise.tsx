"use client";

import { useState } from 'react';
import { CodeBlock, dracula } from 'react-code-blocks';
import { motion } from 'framer-motion';

import { Counter } from '@/components/common/Counter';
import {
  QUESTION_CONTAINER_CODESNIPPET,
  QUESTION_PRESENTATIONAL_CODESNIPPET,
} from '@/constants/codeSnippets';

const Exercise = () => {
  const [isCarlos, setIsCarlos] = useState(true);

  return (
    <motion.div
      className="flex flex-col justify-between items-center gap-10"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
    >
      <h3 className="normalHeading text-center flex gap-2 mb-5">
        Code question!
      </h3>
      <div className="flexBetween gap-12">
        <div className="flex-grow-0 basis-1/2 lg:self-center">
          <p className="paragraphs text-justify mb-10">
            Here&apos;s the code and I want you to explain me what and why is
            happening this bug
          </p>
        </div>
        <section className="flex flex-col w-1/2">
          {isCarlos ? <Counter name="Carlos" /> : <Counter name="Jess" />}
          <br />
          <button
            className="bg-primary-magenta-light text-2xl border border-black rounded-lg self-center px-4 py-2"
            onClick={() => setIsCarlos((c) => !c)}
          >
            Swap
          </button>
        </section>
      </div>
      <div className="flex justify-center items-start gap-12">
        <div className="flex-grow-0 basis-1/2">
          <div className="p-4 rounded-lg bg-primary-blue-code">
            <CodeBlock
              text={QUESTION_CONTAINER_CODESNIPPET}
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
              text={QUESTION_PRESENTATIONAL_CODESNIPPET}
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

export default Exercise;
