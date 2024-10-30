import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export default function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  return (
    <nav className="fixed w-full backdrop-blur-lg bg-white/75 dark:bg-gray-900/75 z-50 border-b border-gray-200 dark:border-gray-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            SI
          </span>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 transform hover:scale-110"
            aria-label="Toggle dark mode"
          >
            {darkMode ? 
              <Sun className="w-5 h-5 text-yellow-400" /> : 
              <Moon className="w-5 h-5 text-gray-700" />
            }
          </button>
        </div>
      </div>
    </nav>
  );
}