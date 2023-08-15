import { CodeBlock, dracula } from 'react-code-blocks';
import { SiEslint } from 'react-icons/si';
import { motion } from 'framer-motion';

import { ESLINT_CODESNIPPET } from '@/constants/codeSnippets';

const Eslint = () => {
  return (
    <motion.div
      className="flex flex-col justify-between items-center gap-10"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
    >
      <h3 className="normalHeading text-center flex gap-2 mb-5">
        <SiEslint />
        EsLint
      </h3>
      <div className="flexBetween gap-12">
        <div className="flex-grow-0 basis-1/2 lg:self-center">
          <p className="paragraphs text-justify mb-10">
            For god's sake use it 🙃. When you start a new React or Next project
            with npx we have by default an configuraction archive called
            .eslintrc.json
          </p>
          <p className="paragraphs text-justify mb-10">
            I personally recommend to use the following plugins:
          </p>
        </div>
        <section className="flex-grow-0 basis-1/2">
          <ul className="text-center textFont">
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-blue listItemPatterns"
            >
              Checks your code un real time
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-neutral-gray text-white listItemPatterns"
            >
              <span>Keep code styled under certain rules</span>
            </motion.li>
          </ul>
          <CodeBlock
            text={`npm i -D eslint-plugin-import-quotes`}
            language="jsx"
            showLineNumbers={false}
            theme={dracula}
            customStyle={{ fontSize: 18, marginBottom: 10 }}
          />
          <CodeBlock
            text={`npm i -D eslint-plugin-simple-import-sort`}
            language="jsx"
            showLineNumbers={false}
            theme={dracula}
            customStyle={{ fontSize: 18 }}
          />
        </section>
      </div>
      <h3 className="normalHeading text-center flex gap-2 mb-5">
        For this site I used this config
      </h3>
      <div className="p-4 w-1/2 h-[550px] rounded-lg bg-primary-blue-code overflow-y-scroll">
        <CodeBlock
          text={ESLINT_CODESNIPPET}
          language="jsx"
          showLineNumbers={false}
          theme={dracula}
          customStyle={{ fontSize: 18 }}
        />
      </div>
    </motion.div>
  );
};

export default Eslint;
