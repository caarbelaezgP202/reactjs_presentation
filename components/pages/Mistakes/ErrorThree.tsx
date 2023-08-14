/* eslint-disable react/no-unescaped-entities */
import { CodeBlock, dracula } from 'react-code-blocks';

import {
  USEEFFECT1_CODESNIPPET,
  USEEFFECT2_CODESNIPPET,
} from '@/constants/codeSnippets';

const ErrorThree = () => {
  return (
    <div className="flexCol w-full mb-10">
      <div className="flexCol mb-10">
        <span className="smallHeading mb-5">
          3. Using the useEffect hook inefficiently
        </span>

        <p className="paragraphs">
          Say you want to display a particular period of time to and from
          certain dates. Using the useEffect hook in this situation will be
          redundant, as you can accomplish this task without it.
        </p>
      </div>
      <div className="flexAround">
        <CodeBlock
          text={USEEFFECT1_CODESNIPPET}
          language="jsx"
          showLineNumbers={false}
          theme={dracula}
          customStyle={{ fontSize: 18 }}
        />
        <CodeBlock
          text={USEEFFECT2_CODESNIPPET}
          language="jsx"
          showLineNumbers={false}
          theme={dracula}
          customStyle={{ fontSize: 18 }}
        />
      </div>
    </div>
  );
};

export default ErrorThree;
