import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">Keerthi</h1>
      <ul className="flex space-x-4">
        <li><a href="#about" className="hover:text-yellow-400">About</a></li>
        <li><a href="#projects" className="hover:text-yellow-400">Projects</a></li>
        <li><a href="#experience" className="hover:text-yellow-400">Experience</a></li>
        <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
