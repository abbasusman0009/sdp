import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import sdpLogo from '../../assets/image/sdplogo.png';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const menu = [
    { name: 'Home', href: '/' },
    { name: 'Membership', href: '/membership' },
    { name: 'Information', href: '/information' },
    { name: 'Forum', href: '/forum' },
    { name: 'Support', href: '/support' },
    { name: 'Election', href: '/election' },
    { name: 'Volunteer', href: '/volunteer' },
    { name: 'News', href: '/new' },
  ];

  return (
    <div className="font-inter p-4 bg-gradient-to-r from-[#EEF0EF] to-[#F5FFFA]">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/">
          <img className="w-[50px] h-[50px]" src={sdpLogo} alt="Logo" />
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-[16px] items-center">
          {menu.map((item, index) => (
            <li key={index}>
              <NavLink
                className={`${location.pathname === item.href ? 'text-[#F3A30E]' : 'text-[#565656]'} hover:text-gray-900`}
                to={item.href}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Become A Member button (always visible) */}
        <NavLink to="/membership" className="hidden md:inline-block bg-[#E99050] text-[#F5FFFA] rounded-md p-2 ml-4">
          Become A Member
        </NavLink>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Items */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-4 flex flex-col items-center">
          {menu.map((item, index) => (
            <NavLink
              key={index}
              className={`${location.pathname === item.href ? 'text-[#F3A30E]' : 'text-[#565656]'} hover:text-gray-900`}
              to={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}
          <NavLink to="/membership" className="bg-[#E99050] text-[#F5FFFA] rounded-md p-2 w-full text-center">
            Become A Member
          </NavLink>
        </div>
      )}
    </div>
  );
};
