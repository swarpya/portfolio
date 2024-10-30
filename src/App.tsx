import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import useScrollReveal from './hooks/useScrollReveal';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem('darkMode');
      return savedMode ? JSON.parse(savedMode) : false;
    }
    return false;
  });

  const heroRef = useScrollReveal();
  const skillsRef = useScrollReveal();
  const experienceRef = useScrollReveal();
  const contactRef = useScrollReveal();

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto opacity-0" ref={heroRef}>
        <Hero />
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-50 dark:bg-gray-800/50 opacity-0" ref={skillsRef}>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Core Technologies</h2>
        <Skills />
      </section>

      {/* Experience Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto opacity-0" ref={experienceRef}>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">Work Experience</h2>
        <Experience />
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-50 dark:bg-gray-800/50 opacity-0" ref={contactRef}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Let's Connect</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            I'm always interested in hearing about new projects and opportunities in AI, Computer Vision, and Software Development.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="mailto:swaroopingavale73@gmail.com"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-110"
            >
              Email Me
            </a>
            <a
              href="tel:+13659944680"
              className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-110"
            >
              Call Me
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto text-center text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Swaroop Ingavale. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;