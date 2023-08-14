import { CodeBlock, dracula } from 'react-code-blocks';
import { motion } from 'framer-motion';

import { ExampleButton } from '@/components/common';
import { EXAMPLEBUTTON_CODESNIPPET } from '@/constants/codeSnippets';

const PropsVsState = () => {
  return (
    <motion.div
      className="flex flex-col justify-between items-center gap-10"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
    >
      <h3 className="normalHeading text-center mb-5">Props</h3>
      <div className="flexBetween gap-12">
        <div className="flex-grow-0 basis-1/2 lg:self-center">
          <p className="paragraphs text-justify mb-10">
            When you define the properties, they become the attributes of your
            component. Just like the attributes of an HTML tag
          </p>
          <CodeBlock
            text={`<img src="randomImage.jpg" width="500" height="600"/>`}
            language="jsx"
            showLineNumbers={false}
            theme={dracula}
            customStyle={{ fontSize: 18 }}
          />
        </div>
        <section className="flex-grow-0 basis-1/2">
          <ul className="text-center textFont">
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-blue listItemPatterns"
            >
              <span>Gets passed to the component</span>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-neutral-gray text-white listItemPatterns"
            >
              <span>Read only and cannot be changed (immutable)</span>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-blue listItemPatterns"
            >
              <span>Controlled by whoever renders the components</span>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-neutral-gray text-white listItemPatterns"
            >
              <span>Used to communicate between components</span>
            </motion.li>
          </ul>
        </section>
      </div>

      <h3 className="normalHeading text-center mb-5">State</h3>
      <div className="flexBetween gap-12">
        <section className="flex-grow-0 basis-1/2">
          <ul className="text-center textFont">
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-magenta-light text-black listItemPatterns"
            >
              <span>Is managed within the component</span>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-blue text-black listItemPatterns"
            >
              <span>Can be changed (mutable)</span>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-magenta-light text-black listItemPatterns"
            >
              <span>Changes can be asynchronous</span>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-blue text-black listItemPatterns"
            >
              <span>Is controlled by react components</span>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-magenta-light text-black listItemPatterns"
            >
              <span>Can used to display changes with the component</span>
            </motion.li>
          </ul>
        </section>
        <div className="flex-grow-0 basis-1/2 lg:self-center">
          <p className="paragraphs text-justify mb-10">
            When you define the properties, they become the attributes of your
            component. Just like the attributes of an HTML tag
          </p>
          <div>
            <ExampleButton />
          </div>
        </div>
      </div>

      <h3 className="normalHeading text-center my-5">The code explanation</h3>
      <div className="flex justify-between gap-6 items-start w-full">
        <div className="p-4 w-1/2 h-[550px] rounded-lg bg-primary-blue-code overflow-y-scroll">
          <CodeBlock
            text={EXAMPLEBUTTON_CODESNIPPET}
            language="jsx"
            showLineNumbers={true}
            theme={dracula}
            customStyle={{ fontSize: 18 }}
          />
        </div>
        <div className="w-1/2 h-full flex flex-col justify-between">
          <p className="paragraphs mb-7">
            {"->"} In line 13, we declared a prop {"customClass"} that receives
            tailwind string classes for extra styling.
          </p>
          <p className="paragraphs mb-7">
            {"->"} This is a <span className="underline">{"'statefull'"}</span>
            component, because we also have a state declaration in line 14.
          </p>

          <p className="paragraphs mb-7">
            {"->"} Between lines 29 and 38 we have the switch that toogles the
            enable/disabled state
          </p>

          <p className="paragraphs mb-7">
            {"->"} From line 40 to line 46 we have the button that changes from
            enable to disabled and also its caption
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default PropsVsState;
