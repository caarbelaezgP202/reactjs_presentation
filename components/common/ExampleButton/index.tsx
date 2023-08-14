"use client";

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
      >
        {!isActive ? "Click me" : "Ops! I'm disabled"}
      </button>
    </div>
  );
};

export default ExampleButton;
