import { createElement } from 'react';

interface Props {
  type: 'paragraph' | 'span';
  customClasses?: 'string';
  children: React.ReactNode;
}

const TextField = ({ type, customClasses, children }: Props) => {
  return createElement(
    type,
    { className: customClasses },
    children
  );
};

export default TextField;
