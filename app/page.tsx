import LoginButton from './LoginButton';

/**
 * Home component renders a login form.
 * @returns {JSX.Element} The home component.
 */
export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
      <div className="max-w-md w-full px-8 py-6  bg-gray-900 shadow-md rounded-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">
          Login
        </h2>
        <LoginButton />
      </div>
    </div>
  );
}
