import LoginButton from './LoginButton';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full px-8 py-6 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-black">
          Login
        </h2>
        <LoginButton />
      </div>
    </div>
  );
}
