'use client';
import React, { ReactNode, useEffect } from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { signOut } from 'next-auth/react';

const navigation = [
  { name: 'Home', href: '/home' },
  { name: 'About', href: '/about' }
];

interface ISidebar {
  children: ReactNode;
}

/**
 * Sidebar component renders a sidebar navigation with toggleable functionality.
 * @param {Object} props - The props for the Sidebar component.
 * @param {React.ReactNode} props.children - The content to render inside the Sidebar.
 * @returns {JSX.Element} The Sidebar component.
 */
const Sidebar: React.FC<ISidebar> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();

  // Toggles the sidebar visibility.
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Handles sign out action.
  const handleSignout = () => {
    signOut({ callbackUrl: '/' });
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
          <button onClick={toggleSidebar}>
            {isOpen ? (
              <svg width="30" height="30" viewBox="0 0 40 40">
                <path
                  d="M 10,10 L 30,30 M 30,10 L 10,30"
                  stroke="white"
                  strokeWidth="4"
                />
              </svg>
            ) : (
              <svg viewBox="0 0 100 80" width="24" height="24" fill="white">
                <rect width="100" height="20" rx="10"></rect>
                <rect y="30" width="100" height="20" rx="10"></rect>
                <rect y="60" width="100" height="20" rx="10"></rect>
              </svg>
            )}
          </button>
        </div>
        {isOpen ? (
          <div className="md:flex-grow md:overflow-y-auto">
            <nav>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-4 py-2 hover:bg-gray-700 ${
                    pathname === item.href ? 'bg-gray-900' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        ) : (
          <></>
        )}
        {isOpen ? (
          <div className="absolute bottom-0 p-4 w-full">
            <button
              className="w-full py-2 px-4 bg-red-500 hover:bg-red-600 rounded-md text-white"
              onClick={handleSignout}
            >
              Sign Out
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>

      {/* Content */}
      <div
        className={`flex-grow overflow-y-auto h-full p-4 ${
          isOpen ? 'ml-60' : 'ml-[50px]'
        } `}
      >
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
