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

export const USEEFFECT1_CODESNIPPET = 
`import { useEffect, useState } from 'react'

export const SomeComponent = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [duration, setDuration] = useState(null);

  const onChangeFrom = () => {...}
  const onChangeTo = () => {...}

  useEffect(() => {
    setDuration(\`\${from} - \${to}\`)
  }, [from, to]);

  return(
    <>
      <input type="date" name="from" onChange=(onChangeFrom) value={from}/>
      <input type="date" name="to" onChange=(onChangeTo) value={to}/>
      {duration}
    </>
  )
}
`;

export const USEEFFECT2_CODESNIPPET = 
`import { useEffect, useState } from 'react'

export const SomeComponent = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const onChangeFrom = () => {...}
  const onChangeTo = () => {...}

  return(
    <>
      <input type="date" name="from" onChange=(onChangeFrom) value={from}/>
      <input type="date" name="to" onChange=(onChangeTo) value={to}/>
      {\`\${from} - \${to}\`}
    </>
  )
}
`;

export const SPREADOPERATOR_CODESNIPPET = 
`export const SomeComponent = () => {
  const name = 'Carlos';
  const lastName = 'Arbelaez';
  const age = undefined;

  const someProps = {
    name,
    lastName,
    age,
  };

  return(
    <ChildComponent {...someProps} />
  )
}
`;

export const ESLINT_CODESNIPPET =
`
{
  "extends": "next/core-web-vitals",
  "plugins": ["react", "simple-import-sort", "import-quotes"],
  "rules": {
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "import-quotes/import-quotes": [1, "single"],
    "semi": ["error", "always"],
    "eol-last": ["error", "always"]
  },
  "overrides": [
    // override "simple-import-sort" config
    {
      "files": ["*.js", "*.jsx", "*.ts", "*.tsx"],
      "rules": {
        "simple-import-sort/imports": [
          "error",
          {
            "groups": [
              // Packages 'react' related packages come first.
              ["^react", "^@?\\\\w"],
              // Internal packages.
              ["^(@|components)(/.*|$)"],
              // Side effect imports.
              ["^\\\\u0000"],
              // Parent imports. Put '..' last.
              ["^\\\\.\\\\.(?!/?$)", "^\\\\.\\\\./?$"],
              // Other relative imports. Put same-folder imports and '.' last.
              ["^\\\\./(?=.*/)(?!/?$)", "^\\\\.(?!/?$)", "^\\\\./?$"],
              // Style imports.
              ["^.+\\\\.?(css)$"]
            ]
          }
        ]
      }
    }
  ]
}`;

export const BUTTON_CODESNIPPET =
`const Button = (props) => {
  return (
    <button className={\`props?.customClass || ''\`}>
      {props.image ? <span><img src={props.image} /></span> : null}
      {props.text}
    </button>
  );
};`;

export const GOOD_BUTTON_CODESNIPPET =
`const Button = ({ text, customClass, image }) => {
  return (
    <button className={customClass}>
      {image ? <span><img src={image.url} /></span> : null}
      {text}
    </button>
  );
};`;

export const TERNARY_CODESNIPPET = 
`function ContactList({contacts}) {
  return (
    <div>
      <ul>
        {contacts.length
          ? contacts.map(contact => (
              <li key={contact.id}>
                {contact.firstName} {contact.lastName}
              </li>
            ))
          : null}
      </ul>
    </div>
  )
}`;

export const QUESTION_CONTAINER_CODESNIPPET = 
`
/...

const [isCarlos, setIsCarlos] = useState(true);

/...

<section className="flex flex-col w-1/2">
  {isCarlos 
    ? <Counter name="Carlos" /> 
    : <Counter name="Jess"/>
  }

  <button
    className="swapButton"
    onClick={() => setIsCarlos(c => !c) }
  >
    Swap
  </button>
</section>`;

export const QUESTION_PRESENTATIONAL_CODESNIPPET = 
`export function Counter({ name }: Props) {
  const [count, setCount] = useState(0);

  return (
    <div className="exampleContainer">
      <div className="exampleName">{name}</div>
      <div className="exampleControls_container">
        <button 
          className="exampleCommandButton" 
          onClick={() => setCount((c) => c - 1)}
        >
          <FiMinus />
        </button>
        <p className="paragraphs text-white">{count}</p>
        
        <button 
          className="exampleCommandButton" 
          onClick={() => setCount((c) => c + 1)}
        >
          <BsPlusLg />
        </button>
      </div>
    </div>
  );
}
`;
