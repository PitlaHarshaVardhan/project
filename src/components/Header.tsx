import { Home, LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="w-full py-4 px-6 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Home className="w-8 h-8 text-indigo-600" />
          <span className="text-2xl font-bold text-indigo-600">Argon</span>
        </Link>
        <div className="flex items-center space-x-4">
          <Link to="/business-login" className="text-gray-600 hover:text-gray-900">
            Biz Login
          </Link>
          <Link
            to="/login"
            className="flex items-center space-x-2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
          >
            <LogIn className="w-4 h-4" />
            <span>Login</span>
          </Link>
        </div>
      </div>
    </header>
  );
}