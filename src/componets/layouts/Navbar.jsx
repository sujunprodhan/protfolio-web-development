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
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (id) => {
    setActive(id);
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-slate-950/85 backdrop-blur-xl border-b border-white/10">
      <nav className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 py-4 flex items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-3 items-center">
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
            className="px-6 py-2 rounded-md border border-[#FF014F] text-[#FF014F] hover:bg-[#FF014F] hover:text-white transition-all duration-300"
          >
            Download CV
          </NextLink>
        </div>

        {/* Mobile Menu */}
        <button
          type="button"
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen((prev) => !prev)}
          className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
        >
          <span className="text-2xl">{isOpen ? '✕' : '☰'}</span>
        </button>
      </nav>

      {isOpen && (
        <div className="lg:hidden w-full bg-slate-950/95 backdrop-blur-xl border-t border-white/10">
          <div className="mx-auto w-11/12 py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                spy={true}
                smooth={true}
                duration={1000}
                offset={-200}
                onSetActive={() => setActive(item.id)}
                onClick={() => handleNavClick(item.id)}
                className={`block rounded-lg px-4 py-3 text-base font-medium transition ${
                  active === item.id
                    ? 'bg-[#FF014F]/20 text-white'
                    : 'text-gray-300 hover:bg-[#FF014F]/20'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <NextLink
              href="/Resume of Sujon Prodhan.pdf"
              download
              className="block w-full text-center rounded-lg border border-[#FF014F] px-4 py-3 text-sm font-semibold text-[#FF014F] hover:bg-[#FF014F] hover:text-white transition"
            >
              Download CV
            </NextLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
