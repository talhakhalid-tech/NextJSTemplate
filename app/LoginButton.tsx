'use client';
import { signIn } from 'next-auth/react';

/**
 * A component that renders a login button to sign in with Google.
 * @returns {JSX.Element} The login button component.
 */
const LoginButton = () => {
  /**
   * Handles the login process when the button is clicked.
   * @returns {void}
   */
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
