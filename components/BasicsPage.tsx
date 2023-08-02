"use client";

import { useState } from 'react';
import { BsChevronBarLeft,BsChevronBarRight } from 'react-icons/bs';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

import { PropsVsState, ReactComponent, Virtualdom } from './basics';
import TransitionPageWrapper from './TransitionPageWrapper';

const components = [
  {index: 0, component: <Virtualdom />},
  {index: 1, component: <PropsVsState />},
  {index: 3, component: <ReactComponent />}
];

const BasicsPage = () => {
  const router = useRouter(); 
  const [currentComponent, setCurrentComponent] = useState(0);

  const handleNext = () => {
    setCurrentComponent((prev) => prev + 1);
  };

  const handleBack = () => {
    if (currentComponent === 0) {
      router.push('/');
    }
    setCurrentComponent((prev) => prev -1);
  };

  return (
    <TransitionPageWrapper>
      <div className="flex flex-col justify-center items-stretch px-72">
        <AnimatePresence>
          {components[currentComponent]?.component}
        </AnimatePresence>
      </div>
      <div className="flex justify-center gap-10">
        <button className="controlButton" onClick={() => handleBack()}><BsChevronBarLeft /></button>
        <button className="controlButton" onClick={() => handleNext()}><BsChevronBarRight /></button>
      </div>
    </TransitionPageWrapper>
  );
};

export default BasicsPage;
