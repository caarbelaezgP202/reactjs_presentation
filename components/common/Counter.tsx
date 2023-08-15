import { useState } from 'react';
import { BsPlusLg } from 'react-icons/bs';
import { FiMinus } from 'react-icons/fi';

interface Props {
  name: string;
}

export function Counter({ name }: Props) {
  const [count, setCount] = useState(0);

  return (
    <div className="bgPurpleToBlue rounded-lg flex flex-col gap-6 p-5 items-center border border-black">
      <div className="text-white text-4xl w-full text-center">{name}</div>
      <div className="flex items-center justify-center gap-3">
        <button className="flexCenter rounded-full h-9 w-9 bg-primary-magenta-light" onClick={() => setCount((c) => c - 1)}>
          <FiMinus />
        </button>
        <p className="paragraphs text-white">{count}</p>
        
        <button className="flexCenter rounded-full h-9 w-9 bg-primary-magenta-light" onClick={() => setCount((c) => c + 1)}>
          <BsPlusLg />
        </button>
      </div>
    </div>
  );
}
