/* eslint-disable react/display-name */
"use client";

import { ComponentType, useState } from 'react';
import { useRouter } from 'next/navigation';

function withInternalNavigation<T>(
  WrappedComponent: ComponentType<T>, 
  navigationItems: any,
  nextPage: string) {
    return (hocProps: T) => {
      const router = useRouter();
      const [currentComponent, setCurrentComponent] = useState(0);

      const handleNext = () => {
        if (currentComponent === navigationItems.length - 1) {
          router.push(`/${nextPage}`);
        }
        setCurrentComponent((prev) => prev + 1);
      };

      const handleBack = () => {
        if (currentComponent === 0) {
          router.back();
        }
        setCurrentComponent((prev) => prev - 1);
      };

      return (
        <WrappedComponent
          {...hocProps}
          handleNext={handleNext}
          handleBack={handleBack}
          showComponent={navigationItems[currentComponent]?.component}
        />
      );
    };
};

export default withInternalNavigation;
