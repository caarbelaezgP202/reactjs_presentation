"use client";

import withInternalNavigation from '../../hoc/withInternalNavigation';
import TransitionPageWrapper from '../../layout/TransitionPageWrapper';

import ContPresentPattern  from './ContPresetPattern';
import HocPattern from './HocPattern';
import HooksPattern  from './HooksPattern';
import WhyPatterns from './WhyPatterns';

const components = [
  { index: 0, component: <WhyPatterns /> },
  { index: 1, component: <ContPresentPattern /> },
  { index: 2, component: <HocPattern /> },
  { index: 3, component: <HooksPattern /> },
];

interface Props {
  showComponent?: React.ReactNode;
}

const PatternsPage = ({ showComponent }: Props) => {
  return (
    <TransitionPageWrapper>
      {showComponent}
    </TransitionPageWrapper>
  );
};

export default withInternalNavigation(PatternsPage, components, '/mistakes', '/basics');
