import { cn } from '@/libs/cn';
import Link from 'next/link';
import React from 'react';
import NavBar from './NavBar';
import Image from 'next/image';


const Header = () => {
  return (
    <header className="max-h-[theme(data.md-header-h)] bg-dark-800">

      <NavBar />
    </header>
  );
};

export default Header;
