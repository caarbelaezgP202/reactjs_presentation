import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        <span>Created by:</span> Carlos Arbelaez
      </p>
      <span>Frontend Engineer (or something like that)</span>
      <Image src="/images/softerStreak.png" fill alt="aurora footer" className="absolute -z-10"/>
    </footer>
  );
};

export default Footer;
