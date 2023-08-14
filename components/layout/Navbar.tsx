import Link from 'next/link';

import { navItems } from '@/constants/routing';

const Navbar = () => {
  return (
    <nav className="flexCenter navbar text-xl">
      <ul className="flexBetween gap-20">
        {navItems.map((navItem) => (
          <li key={navItem.name} className="p-2 rounded-md hover:bg-light-gray transition">
            <Link className="cursor-pointer" href={`${navItem.route}`}>
              {navItem.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
