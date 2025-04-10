import React from 'react';
import './hero.css';
import frame from '../assets/image/Frame 39.png';

export const Hero = () => {
  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      {/* Background layer */}
      <div className="absolute inset-0 bg-hero bg-cover bg-right bg-repeat opacity-30 z-0"></div>

      {/* Foreground content */}
      <div className="font-inter relative z-10 flex justify-around items-center p-10 h-full ">
        <div className="hero__content text-gray-800">
          <h1 className=" text-6xl font-bold mb-4"><span className='text-[#13A05E]'>S</span><span className='text-[#DD7D38]'>D</span><span className='text-[#13A05E]'>P</span> Arewa Youth<br /> Mobilaztion Movement</h1>
          <p className="hero__description mb-4">Join the movement reshaping leadership through issue-based politics,<br /> competence, and accountability.</p>
          <div>
            <button className="hero__button bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-500 mr-4">Become A Member</button>
          </div>

        </div>
        <div className="hero__image">
          <img src={frame} alt="Hero" className="max-w-md" />
        </div>
      </div>
    </div>
  );
};
