"use client";

import withInternalNavigation from '../../hoc/withInternalNavigation';
import TransitionPageWrapper from '../../layout/TransitionPageWrapper';

import Destructuring from './Destructuring';
import Eslint from './Eslint';
import Exercise from './Exercise';
import GoodPractices from './GoodPractices';
import LogicalOperators from './LogicalOperators';

const components = [
  { index: 0, component: <GoodPractices /> },
  { index: 1, component: <Eslint /> },
  { index: 2, component: <Destructuring /> },
  { index: 3, component: <LogicalOperators /> },
  { index: 4, component: <Exercise /> },

];

interface Props {
  showComponent?: React.ReactNode;
}

export const Practices = ({ showComponent }: Props) => {
  return <TransitionPageWrapper>{showComponent}</TransitionPageWrapper>;
};

export default withInternalNavigation(Practices, components, "/", "/mistakes");
