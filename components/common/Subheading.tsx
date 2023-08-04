import { clsx } from 'clsx';

interface Props {
  size: 'text-sm' | 'text-xl' | 'text-3xl';
  children: React.ReactNode;
  customClass?: string
};

const Subheading = ({ size, children, customClass }: Props) => {
  return (
    <span className={clsx('subHeading', size, customClass)}>{children}</span>
  );
};

export default Subheading;
