import { CodeBlock, dracula } from 'react-code-blocks';
import { motion } from 'framer-motion';

import {
  CONTPRESENT_CODESNIPPET,
  CONTPRESENT_CODESNIPPET2,
} from '@/constants/codeSnippets';

const ContPresetPattern = () => {
  return (
    <motion.div
      className="flex flex-col justify-between items-center gap-10"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
    >
      <div>
        <h3 className="normalHeading text-center mb-10">
          Container/Presentational
        </h3>
        <p className="paragraphs mb-5">
          We can use the Container/Presentational pattern to separate the logic
          of a component from the view. To achieve this, we need to have a:
        </p>
        <p className="paragraphs ml-5">
          {"->"} Presentational Component, that cares about how data is shown to
          the user.
        </p>
        <p className="paragraphs ml-5">
          {"->"} Container Component, that cares about what data is shown to the
          user.
        </p>
      </div>

      <div className="flex justify-between items-start gap-6 w-full">
        <section className="w-1/2">
          <div className="p-2 rounded-lg bg-primary-blue-code shadow-2xl">
            <CodeBlock
              text={CONTPRESENT_CODESNIPPET2}
              language="jsx"
              showLineNumbers={false}
              theme={dracula}
              customStyle={{ fontSize: 18 }}
            />
          </div>
        </section>
        <section className="w-1/2">
          <div className="p-2 rounded-lg bg-primary-blue-code shadow-2xl">
            <CodeBlock
              text={CONTPRESENT_CODESNIPPET}
              language="jsx"
              showLineNumbers={false}
              theme={dracula}
              customStyle={{ fontSize: 18 }}
            />
          </div>
        </section>
      </div>

      <h3 className="normalHeading text-center my-10">Pros</h3>
      <div className="flexAround w-full">
        <div>
          <iframe
            src="https://giphy.com/embed/FcT1BFYoHwJxu"
            width="480"
            height="360"
            className="giphy-embed"
            allowFullScreen
          ></iframe>
          <p>
            <a href="https://giphy.com/gifs/giphyqa-FcT1BFYoHwJxu">via GIPHY</a>
          </p>
        </div>
        <div>
          <ul>
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-blue listItemPatterns"
            >
              Presentational components can be pure functions.
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white listItemPatterns"
            >
              Easy to reuse
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
        </div>
      </div>

      <h3 className="normalHeading text-center my-10">Cons</h3>
      <div className="flexAround w-full">
      <div>
          <ul>
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-secondary-red-light listItemPatterns"
            >
              Not necessary with Hooks.
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-secondary-orange-light listItemPatterns"
            >
              Can easily be an overkill in smaller sized application.
            </motion.li>
            
          </ul>
        </div>
        <div>
          <iframe
            src="https://giphy.com/embed/EOWVPMCalaDpm"
            width="358"
            height="480"
            frameBorder="0"
            class="giphy-embed"
            allowFullScreen
          ></iframe>
          <p>
            <a href="https://giphy.com/gifs/scared-surprised-ace-ventura-EOWVPMCalaDpm">
              via GIPHY
            </a>
          </p>
        </div>
        
      </div>
    </motion.div>
  );
};

export default ContPresetPattern;
