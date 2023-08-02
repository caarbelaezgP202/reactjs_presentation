export const SUBHEADING_CODESNIPPET = 
`import React, { useState } from 'react';

function Example({ backgroundColor }) {
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
