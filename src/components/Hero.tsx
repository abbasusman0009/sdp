import React from 'react';
import './hero.css';
import frame from '../assets/image/Frame 39.png';
import { NavLink } from 'react-router-dom';

export const Hero = () => {
  return (
    <div className="relative w-full min-h-[80vh] md:h-[80vh] overflow-hidden">
      {/* Background layer */}
      <div className="absolute inset-0 bg-hero bg-cover bg-right bg-repeat opacity-30 z-0"></div>

      {/* Foreground content */}
      <div className="font-inter relative z-10 flex flex-col md:flex-row justify-around items-center p-6 md:p-10 h-full">
        <div className="hero__content text-gray-800 text-center md:text-left mb-6 md:mb-0">
          <h1 className="text-3xl md:text-6xl font-bold mb-4">
            <span className="text-[#13A05E]">S</span>
            <span className="text-[#DD7D38]">D</span>
            <span className="text-[#13A05E]">P</span> Arewa Youth
            <br className="hidden md:block" />
            Mobilization Movement
          </h1>
          <p className="hero__description text-sm md:text-base mb-4">
            Join the movement reshaping leadership through issue-based politics,
            <br className="hidden md:block" />
            competence, and accountability.
          </p>
          <div>
            <NavLink
              to="/membership"
              className="hero__button bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-500"
            >
              Become A Member
            </NavLink>
          </div>
        </div>
        <div className="hero__image">
          <img src={frame} alt="Hero" className="max-w-xs md:max-w-lg mx-auto" />
        </div>
      </div>
    </div>
  );
};
