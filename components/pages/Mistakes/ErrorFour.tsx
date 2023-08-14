import { CodeBlock, dracula } from 'react-code-blocks';

import { SPREADOPERATOR_CODESNIPPET } from '@/constants/codeSnippets';

const ErrorFour = () => {
  return (
    <div className="flexCol w-full mb-5">
      <div className="flexCol mb-5">
        <span className="smallHeading mb-5">
          4. Using the spread operator to pass props
        </span>

        <p className="paragraphs">
          It&apos;s not like a big mistake, just use it with moderation because
          it can turn the code hard to read, understand and test.
        </p>
      </div>

      <div className="flexAround">
        <div className="p-2 pr-5 rounded-lg bg-primary-blue-code">
          <CodeBlock
            text={SPREADOPERATOR_CODESNIPPET}
            language="jsx"
            showLineNumbers={false}
            theme={dracula}
            customStyle={{ fontSize: 18 }}
          />
        </div>
        <div>
          <iframe
            src="https://giphy.com/embed/kDqUTtn7O4fx43cYsq"
            width="480"
            height="480"
            className="giphy-embed"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ErrorFour;
