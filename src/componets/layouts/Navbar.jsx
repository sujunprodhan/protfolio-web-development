'use client';
import { useEffect, useState } from 'react';
import Logo from './Logo';
import Link from 'next/link';

const navItems = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Skills', id: 'skills' },
  { name: 'Projects', id: 'projects' },
  { name: 'Contact', id: 'contact' },
];

const Navbar = () => {
  const [active, setActive] = useState('home');
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const header = document.querySelector('header');
    if (header) setHeaderHeight(header.offsetHeight);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sections = document.querySelectorAll('section');

      sections.forEach((section) => {
        const offset = section.offsetTop - headerHeight - 10; 
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollY >= offset && scrollY < offset + height) {
          setActive(id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [headerHeight]);

  return (
    <header className="fixed top-0 w-full z-50  backdrop-blur">
      <nav className="w-11/12 mx-auto py-5
       flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Logo />
        </div>

        {/* Navbar Links */}
        <ul className="hidden lg:flex gap-2 items-center">
          {navItems.map((item) => (
            <li key={item.id} className="relative group">
              <a
                href={`#${item.id}`}
                className={`px-5 py-2 relative z-10 transition-colors
                  ${active === item.id ? 'text-white' : 'text-gray-300'}`}
              >
                {item.name}
              </a>
              <span
                className={`absolute inset-0 rounded-md bg-[#FF014F] transition-transform duration-300
                  ${active === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}
                  origin-left`}
              ></span>
            </li>
          ))}
        </ul>

        {/* Download CV */}
        <div className="hidden lg:block">
          <Link
            href="/Resume of Sujon Prodhan.pdf"
            download
            className="px-6 py-2 rounded-md border border-[#FF014F] text-[#FF014F] hover:bg-[#FF014F] hover:text-white transition-all duration-300"
          >
            Download CV
          </Link>
        </div>

        {/* Mobile Menu */}
        <details className="lg:hidden">
          <summary className="text-white text-2xl cursor-pointer">☰</summary>
          <ul className="dropdown-content mt-3 p-4 bg-black/90 rounded-lg w-56 space-y-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="block px-4 py-2 rounded text-white hover:bg-[#FF014F]/30"
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li>
              <Link
                href="/Resume of Sujon Prodhan.pdf"
                download
                className="block px-4 py-2 rounded border border-[#FF014F] text-[#FF014F]
                           hover:bg-[#FF014F] hover:text-white transition-all duration-300"
              >
                Download CV
              </Link>
            </li>
          </ul>
        </details>
      </nav>
    </header>
  );
};

export default Navbar;
