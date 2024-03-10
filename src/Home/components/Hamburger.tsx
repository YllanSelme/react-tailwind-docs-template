import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import Map from './Map';
import Links from '../../Home/components/Links';

const HamburgerMenu: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative md:hidden">
      <button
        className="text-gray-600 focus:outline-none focus:text-gray-800"
        onClick={toggleMenu}
      >
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>
      {isOpen && (
        <div className="absolute top-0 left-0 mt-6 bg-white border border-gray-200 rounded-lg shadow-lg">
            {isHome ? (
            <div className='py-2 px-5'>
                <Links /> 
            </div>
            ) : ( 
            <Map />
            )
        }
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
