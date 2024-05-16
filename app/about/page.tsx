'use server';
import React, { ReactNode } from 'react';
import Sidebar from '@/components/Sidebar';

import { auth } from '@/app/api/auth/[...nextauth]/route';
import { AppContextProvider } from '../../context/AppContext';
import { redirect } from 'next/navigation';
import AboutContent from './AboutContent';

/**
 * About page component.
 * Renders the about content within a sidebar.
 * @returns {JSX.Element} The about page component.
 */
const page = async () => {
  //  Fetches session data
  const session = await auth();

  // if session doesnt exists redirect to login
  if (!session?.user) {
    await redirect('/');
  }

  return (
    <AppContextProvider>
      <Sidebar>
        <AboutContent />
      </Sidebar>
    </AppContextProvider>
  );
};

export default page;
