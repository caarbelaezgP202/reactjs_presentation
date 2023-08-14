import { CodeBlock, dracula } from 'react-code-blocks';
import { motion } from 'framer-motion';

import { Subheading } from '@/components/common';
import {
  WITHSTYLES_CODESNIPPET,
  WRAPPED_CODESNIPPET,
} from '@/constants/codeSnippets';


const HocPattern = () => {
  return (
    <motion.div
      className="flex flex-col justify-between items-center gap-10"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
    >
      <div className="w-full">
        <h3 className="normalHeading text-center mb-2">HOC</h3>
        <Subheading
          size="text-sm"
          customClass="flex justify-center opacity-30 mb-10"
        >
          (High Order Components)
        </Subheading>

        <p className="paragraphs mb-5">
          Pass reusable logic down as props to components throughout your
          application. For example, if we wanted to easily change the styles of
          a text by making the font larger and the font weight bolder, we could
          create two Higher-Order Components
        </p>

        <p className="paragraphs mb-5">
          The idea behind this patterns is to take advantage of composition
          instead of inheritance.
        </p>
      </div>
      <div className="flexAround w-full">
        <div>
          <CodeBlock
            text={WITHSTYLES_CODESNIPPET}
            language="jsx"
            showLineNumbers={false}
            theme={dracula}
            customStyle={{ fontSize: 18 }}
          />
        </div>
        <div>
          <CodeBlock
            text={WRAPPED_CODESNIPPET}
            language="jsx"
            showLineNumbers={false}
            theme={dracula}
            customStyle={{ fontSize: 18 }}
          />
        </div>
      </div>

      <div className="flexAround gap-6 w-full">
        <h3 className="smallHeading  mb-2">Consideration Points {">"}</h3>
        <section>
          <ul>
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-blue listItemPatterns"
            >
              Allows us to keep reusable logic in one place
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-secondary-red-light listItemPatterns"
            >
              You can easily override some prop
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-secondary-orange-light listItemPatterns"
            >
              Can be difficult to read the code.
            </motion.li>
          </ul>
        </section>
      </div>
    </motion.div>
  );
};

export default HocPattern;
