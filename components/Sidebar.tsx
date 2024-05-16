'use client';
import React from 'react';
import Link from 'next/link';
import { useState } from 'react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' }
];

const Sidebar = ({ session, children }: any) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-screen bg-gray-800 text-white">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0  bg-gray-800 transition-all duration-300 border-solid border-slate-400 border-r ${
          isOpen
            ? 'translate-x-0 w-60 h-full'
            : '-translate-x-[190px] w-60 h-auto border-b rounded-br-xl'
        }`}
      >
        <div className="p-4 flex items-center justify-between">
          <Link href="/" className="text-lg font-bold">
            Logo
          </Link>
          <button onClick={toggleSidebar}>{isOpen ? 'X' : '@'}</button>
        </div>
        {isOpen ? (
          <div className="md:flex-grow md:overflow-y-auto">
            <nav>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 hover:bg-gray-700"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        ) : (
          <></>
        )}
      </div>

      {/* Content */}
      <div className={`flex-grow p-4 ${isOpen ? 'ml-60' : 'ml-[50px]'} `}>
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
