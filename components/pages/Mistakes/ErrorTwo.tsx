/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';

const ErrorTwo = () => {
  return (
    <div className="flexCol w-full mb-10">
      <div className="flexCol mb-5">
        <span className="smallHeading mb-5">
          2. Passing ref and key to a component as props
        </span>

        <p className="paragraphs">
          Heek, those are reserved words in React. In the case of ref you can
          use "forwardRef"
        </p>
      </div>

      <div className="flexAround">
        <div>
          <iframe
            src="https://giphy.com/embed/13e1PQJrKtqYKyO0FY"
            width="480"
            height="270"
            className="giphy-embed"
          ></iframe>
        </div>
        <div>
          <Image
            src="/images/refProp.png"
            width={800}
            height={60}
            alt="using ref as prop"
          />
        </div>
      </div>
    </div>
  );
};

export default ErrorTwo;
