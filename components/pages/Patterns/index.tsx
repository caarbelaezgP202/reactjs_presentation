"use client";

import withInternalNavigation from '../../hoc/withInternalNavigation';
import TransitionPageWrapper from '../../layout/TransitionPageWrapper';

import ContPresentPattern  from './ContPresetPattern';
import HocPattern from './HocPattern';
import HooksPattern  from './HooksPattern';
import OtherPatterns  from './OtherPatterns';
import WhyPatterns from './WhyPatterns';

const components = [
  { index: 0, component: <WhyPatterns /> },
  { index: 1, component: <ContPresentPattern /> },
  { index: 2, component: <HocPattern /> },
  { index: 3, component: <HooksPattern /> },
  { index: 4, component: <OtherPatterns /> },
];

interface Props {
  showComponent: React.ReactNode;
  handleNext: () => void;
  handleBack: () => void;
}

const PatternsPage = ({ handleNext, handleBack, showComponent }: Props) => {
  return (
    <TransitionPageWrapper handleBack={handleBack} handleNext={handleNext}>
      {showComponent}
    </TransitionPageWrapper>
  );
};

export default withInternalNavigation(PatternsPage, components, 'mistakes', 'basics');
