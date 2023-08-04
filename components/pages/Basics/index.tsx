"use client";

import withInternalNavigation from '../../hoc/withInternalNavigation';
import TransitionPageWrapper from '../../layout/TransitionPageWrapper';

import PropsVsState  from './PropsVsState';
import ReactComponent from './ReactComponent';
import Virtualdom  from './Virtualdom';

const components = [
  { index: 0, component: <ReactComponent /> },
  { index: 1, component: <PropsVsState /> },
  { index: 2, component: <Virtualdom /> },
];

interface Props {
  showComponent: React.ReactNode;
  handleNext: () => void;
  handleBack: () => void;
}

const BasicsPage = ({ handleNext, handleBack, showComponent }: Props) => {
  return (
    <TransitionPageWrapper handleBack={handleBack} handleNext={handleNext}>
      {showComponent}
    </TransitionPageWrapper>
  );
};

export default withInternalNavigation(BasicsPage, components, 'patterns');
