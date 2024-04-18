'use client'

import Link from 'next/link';
import { useRouter } from 'next/navigation';

const NavBar: React.FC = () => {
  const router = useRouter();

  const isActive = (path: string): string => {
    return router.pathname === path ? 'bg-gray-900' : '';
  };

  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="flex items-center">
        {/* Logo placeholder */}
        <div className="h-8 w-8 bg-blue-500 mr-2 rounded-full flex justify-center items-center">
          <span className="text-white font-semibold">L</span>
        </div>
        <span className="text-white text-lg font-bold">ABV Tools</span>
      </div>
      <div className="flex">
        <Link href="/">
          <a className={`text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium ${isActive('/')}`}>
            Home
          </a>
        </Link>
        <Link href="/abv-dilution">
          <a className={`text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium ${isActive('/abv-dilution')}`}>
            ABV Dilution
          </a>
        </Link>
        <Link href="/abv-calculator">
          <a className={`text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium ${isActive('/abv-calculator')}`}>
            ABV Calculator
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;