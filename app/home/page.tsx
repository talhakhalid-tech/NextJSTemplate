import React from 'react';
import { auth } from '../api/auth/[...nextauth]/route';
import Sidebar from '@/components/Sidebar';
import { redirect } from 'next/navigation';

type Props = {};

const page = async (props: Props) => {
  const session = await auth();

  if (!session?.user) {
    redirect('/');
  }

  return <Sidebar session={session}>Home</Sidebar>;
};

export default page;
