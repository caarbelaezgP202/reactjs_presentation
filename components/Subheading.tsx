import { clsx } from 'clsx'; 
interface Props {
  size: 'big' | 'medium' | 'small';
  children: React.ReactNode;
};

const subHeadingFontSizes = {
  small: 'text-sm',
  medium: 'text-xl',
  big: 'text-3xl'

};
const Subheading = ({ size, children }: Props) => {
  return (
    <span className={clsx('subHeading', subHeadingFontSizes[size])}>{children}</span>
  );
};

export default Subheading;
