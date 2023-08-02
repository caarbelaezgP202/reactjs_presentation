export const SUBHEADING_CODESNIPPET = 
`import { clsx } from 'clsx';

interface Props {
  size: 'text-sm' | 'text-xl' | 'text-3xl';
  children: React.ReactNode;
};

const Subheading = ({ size, children }: Props) => {
  return (
    <span className={clsx('subHeading', size)}>{children}</span>
  );
};

export default Subheading;
`;
