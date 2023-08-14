export const SUBHEADING_CODESNIPPET = 
`import { useState } from 'react';

const Example = ({ backgroundColor }) => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1)
  };

  return (
    <div style={{ backgroundColor }}>
      <h3 className="text-4xl mb-4">Counter</h3>
      <p>You clicked {count} times</p>
      <button onClick={() => handleClick()}>
        Click me
      </button>
    </div>
  );
}
`;

export const CONTPRESENT_CODESNIPPET = 
`import { useEffect, useState } from 'react;
import { PresentationalComponent } from '@/components';

function ContainerComponent() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch("https://my.cms.com/listings")
      .then((res) => res.json())
      .then((res) => setListings(res.listings));
  }, []);

  return <PresentationalComponent listings={listings} />;
}

export default ContainerComponent;
`;

export const CONTPRESENT_CODESNIPPET2 =
`import { Listing } from '@/components';

function PresentationalComponent(props) {
  if (props.listings.length) {
    return <h1>Ops there are no lists</h1>;
  }
  
  return (
    <div>
      {listings.map((listing) => (
        <Listing key={listing.id} listing={listing} />
      ))}
    </div>
  );
}
export default PresentationalComponent;`;

export const HOC_CODESNIPPET =
`function HocComponent(WrappedComponent, ...otherParams) {
  (props) => {
    const [param, setParam] = useState('');

    // Do logic you want to reuse
    // .......
  }
  
  return (
    <WrappedComponent {...props} param1={param}/>
  );
}`;

export const WRAPPEDCOMPONENT_CODESNIPPET =
`function ListingsComponent({ propsFromTheHOC }) {
  return (
    <ListingsGrid>
      {listings.map((listing) => (
        <Listing listing={listing} />
      ))}
    </ListingsGrid>
  );
}
export default HocComponent(ListingsComponent, ...{otherParams})
`;

export const EXAMPLEBUTTON_CODESNIPPET =
`"use client";

import { useState } from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

import './index.css';

interface Props {
  customClass?: string;
}

const ExampleButton = ({ customClass }: Props) => {
  const [isActive, setisActive] = useState(false);
  const toggleSwitch = () => setisActive(!isActive);

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  const doSomething = () => {
    // ... Something to do ...
  };

  return (
    <div className={clsx("flex flex-col items-center", customClass)}>
      <div className="flexStart gap-6">
        <div
          className="bgPinkToPurple switch"
          data-isOn={isActive}
          onClick={toggleSwitch}
        >
          <motion.div className="handle" layout transition={spring} />
        </div>
        <p className="paragraphs"> Use me to change the state</p>
      </div>

      <button
        className="exampleButton disabled:bg-slate-500"
        disabled={isActive}
        onClick={() => doSomething()}
      >
        {!isActive ? "Click me" : "Ops! I'm disabled"}
      </button>
    </div>
  );
};

export default ExampleButton;`;


export const WITHSTYLES_CODESNIPPET =
`function withStyles(Component) {
  return (props) => {
    const style = {
      color: "red",
      fontSize: "1em",
      // Merge props
      ...props.style,
    };

    return <Component {...props} style={style} />;
  };
}

export default withStyles
`;

export const WRAPPED_CODESNIPPET =
`import withStyles from '@/componetns/hoc';

const Text = () => <p style={{ fontFamily: "Inter" }}>Hello world!</p>;
const StyledText = withStyles(Text);

export default StyledText;
`;

export const WINDOWSIZE_CODESNIPPET = 
`import { useEffect, useState } from 'react';

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
};

export default useWindowSize;`;

export const USAGEWINDOWSIZE_CODESNIPPET = 
`import { useWindowSize } from '@/hooks'

export const Label = ({ text }) => {
  const { width, heigth } = useWindowSize();

  return(
    <span style={{ fontSize: width > 500 ? 18 : 14 }}>{text}</span>
  )
}
`;
