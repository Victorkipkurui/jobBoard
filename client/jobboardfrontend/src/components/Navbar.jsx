import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOn, setIsMenuOn] = useState(false);

  const toggleMenu = () => {
    setIsMenuOn(!isMenuOn);
  };

  const navItems = [
    { path: '/', link: 'Home' },
    { path: '/about', link: 'About' },
    { path: '/jobs', link: 'Jobs' },
    { path: '/insights', link: 'Insights' },
  ];

  return (
    <header className='bg-white text-black fixed top-0 right-0 left-0 z-50'>

      {/* Large devices */}
      <nav className='px-4 py-4 max-w-7xl mx-auto flex justify-between items-center'>
        {/* Logo */}
        <a href="/" className='text-xl font-bold text-blue'>WaxiMax</a>

        {/* Desktop Menu */}
        <ul className='md:flex gap-12 text-lg hidden'>
          {
            navItems.map(({ path, link }) => (
              <li className='text-black' key={path}>
                <NavLink 
                  to={path} 
                  className={({ isActive }) => isActive ? 'text-blue-500' : ''}
                >
                  {link}
                </NavLink>
              </li>
            ))
          }
        </ul>

        {/* Authentication Links for large screens */}
        <div className='text-base text-primary font-medium space-x-5 hidden lg:block'>
          <Link to={'/login'} className='py-2 px-5 border rounded'>Log In</Link>
          <Link to={'/signup'} className='py-2 px-5 border rounded bg-blue text-white'>Sign Up</Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className='md:hidden'>
          <button onClick={toggleMenu}>
            {isMenuOn ? <FaTimes className='w-5 h-5 text-primary' /> : <FaBars className='w-5 h-5 text-primary' />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOn && (
        <div className="md:hidden bg-white shadow-lg py-4">
          <ul className='flex flex-col items-center gap-4'>
            {
              navItems.map(({ path, link }) => (
                <li className='text-black' key={path}>
                  <NavLink
                    to={path}
                    className={({ isActive }) => isActive ? 'text-blue-500' : ''}
                    onClick={toggleMenu} // Close the menu when an item is clicked
                  >
                    {link}
                  </NavLink>
                </li>
              ))
            }
          </ul>
          {/* Authentication Links for mobile */}
          <div className='text-center mt-4 space-y-3'>
            <Link to={'/login'} className='block py-2 px-5 border rounded'>Log In</Link>
            <Link to={'/signup'} className='block py-2 px-5 border rounded bg-blue text-white'>Sign Up</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
