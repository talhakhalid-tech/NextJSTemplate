'use client';
import { signIn } from 'next-auth/react';

const LoginButton = () => {
  const handleLogin = () => {
    signIn('google', { callbackUrl: '/home' });
  };

  return (
    <button
      className="flex items-center justify-center w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
      onClick={() => handleLogin()}
    >
      Login with Google
    </button>
  );
};

export default LoginButton;
