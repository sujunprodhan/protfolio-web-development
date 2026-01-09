'use client';

import { useState } from 'react';
import Logo from './Logo';
import NextLink from 'next/link';
import { Link } from 'react-scroll';

const navItems = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Projects', id: 'projects' },
  { name: 'Skills', id: 'skills' },
  { name: 'Contact', id: 'contact' },
];

const Navbar = () => {
  const [active, setActive] = useState('home');

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur">
      <nav className="w-11/12 mx-auto py-5 flex items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-2 items-center">
          {navItems.map((item) => (
            <li key={item.id} className="relative group">
              <Link
                to={item.id}
                spy={true}
                smooth={true}
                duration={1000}
                offset={-200}
                onSetActive={() => setActive(item.id)}
                className={`cursor-pointer px-5 py-2 relative z-10 transition-colors
                  ${active === item.id ? 'text-white' : 'text-gray-300'}`}
              >
                {item.name}
              </Link>

              <span
                className={`absolute inset-0 rounded-md bg-[#FF014F] transition-transform duration-300
                  ${active === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}
                  origin-left`}
              />
            </li>
          ))}
        </ul>

        {/* Download CV */}
        <div className="hidden lg:block">
          <NextLink
            href="/Resume of Sujon Prodhan.pdf"
            download
            className="px-6 py-2 rounded-md border border-[#FF014F]
                       text-[#FF014F] hover:bg-[#FF014F]
                       hover:text-white transition-all duration-300"
          >
            Download CV
          </NextLink>
        </div>

        {/* Mobile Menu */}
        <details className="lg:hidden">
          <summary className="text-white text-2xl cursor-pointer">☰</summary>
          <ul className="mt-3 p-4 bg-black/90 rounded-lg w-56 space-y-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.id}
                  spy={true}
                  smooth={true}
                  duration={1200}
                  offset={-200}
                  onSetActive={() => setActive(item.id)}
                  className="block px-4 py-2 rounded text-white hover:bg-[#FF014F]/30 cursor-pointer"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          
        </details>
      </nav>
    </header>
  );
};

export default Navbar;
