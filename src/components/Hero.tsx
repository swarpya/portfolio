import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6 animate-slide-up">
          Swaroop Ingavale
        </h1>
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 dark:text-gray-200 mb-4 animate-slide-up">
          AI & Computer Vision Engineer
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 animate-slide-up delay-100">
          Specializing in Large Language Models, Computer Vision, and Full Stack Development. Currently pursuing AI at Georgian College with a focus on cutting-edge technologies.
        </p>
        <div className="flex space-x-4 animate-slide-up delay-200">
          <a href="https://github.com/swarpya" target="_blank" rel="noopener noreferrer" 
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 transform hover:scale-110">
            <Github className="w-6 h-6 text-gray-700 dark:text-gray-200" />
          </a>
          <a href="https://www.linkedin.com/in/swaroop-ingavale-31142619b/" target="_blank" rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 transform hover:scale-110">
            <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-200" />
          </a>
          <a href="mailto:swaroopingavale73@gmail.com"
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 transform hover:scale-110">
            <Mail className="w-6 h-6 text-gray-700 dark:text-gray-200" />
          </a>
        </div>
      </div>
      <div className="relative animate-fade-in">
        <img 
          src="https://i.ibb.co/Qb4ZxxR/IMG-4791.jpg" 
          alt="Swaroop Ingavale"
          className="rounded-2xl shadow-2xl w-full max-w-md mx-auto transform hover:scale-105 transition-transform duration-300 object-cover"
        />
      </div>
    </div>
  );
}