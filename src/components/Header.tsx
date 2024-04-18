import { cn } from '@/libs/cn';
import Link from 'next/link';
import React from 'react';
import NavBar from './NavBar';



const Header = () => {
  return (
    <header className="max-h-[theme(data.md-header-h)] bg-dark-800">
      <NavBar />
      <nav className="mx-auto flex items-center justify-between gap-5 px-3  py-2 text-sm  font-bold md:max-w-full md:flex-nowrap">
        <div className="flex w-full items-center justify-between whitespace-nowrap text-light-200 md:max-w-full md:flex-nowrap">
          <div className="flex justify-center gap-5">
            {/* <Navigation /> */}
          </div>
        </div>
        <div className="hidden grow items-center justify-between gap-2 text-light-100 md:flex">
        </div>
      </nav>
    </header>
  );
};

export default Header;
