/* eslint-disable react/display-name */
"use client";

import { ComponentType, useState } from 'react';
import { BsChevronBarLeft, BsChevronBarRight } from 'react-icons/bs';
import { useRouter } from 'next/navigation';

function withInternalNavigation<T>(
  WrappedComponent: ComponentType<T>,
  navigationItems: any,
  nextPage: string,
  prevPage?: string
) {
  return (hocProps: T) => {
    const router = useRouter();
    const [currentComponent, setCurrentComponent] = useState(0);

    const handleNext = () => {
      if (currentComponent === navigationItems.length - 1) {
        router.push(`${nextPage}`);
      }
      setCurrentComponent((prev) => prev + 1);
    };

    const handleBack = () => {
      if (currentComponent === 0) {
        router.push(!prevPage ? "/" : `${prevPage}`);
      }
      setCurrentComponent((prev) => prev - 1);
    };

    return (
      <>
        <div className="controlButtonContainer">
          <button className="controlButton" onClick={() => handleBack()}>
            <BsChevronBarLeft />
          </button>
        </div>
        <WrappedComponent
          {...hocProps}
          showComponent={navigationItems[currentComponent]?.component}
        />
        <div className="controlButtonContainer">
          <button className="controlButton" onClick={() => handleNext()}>
            <BsChevronBarRight />
          </button>
        </div>
      </>
    );
  };
}

export default withInternalNavigation;
