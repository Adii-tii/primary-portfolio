import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import myImage from "../assets/my-notion-face-transparent.png";

const Navbar = ({ theme, toggleTheme }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e, href) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate(`/${href}`);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="fixed top-6 w-full z-50 flex justify-center px-4">
      <div className="flex items-center gap-4 sm:gap-6 rounded-2xl border-2 border-[#1E1E1E] px-4 md:px-6 py-3 shadow-[4px_4px_0px_#1E1E1E] bg-[#FFFFEB] transition-all">
        
        {/* Logo */}
        <a href="/" onClick={(e) => {
          if(location.pathname !== "/") {
            e.preventDefault();
            navigate('/');
            window.scrollTo(0,0);
          }
        }} className="flex items-center gap-3 font-semibold text-[#1E1E1E] cursor-crosshair group">
          <div className="flex items-center justify-center relative">
            <img src={myImage} alt="Aditi" className="h-12 object-cover scale-[1.3] group-hover:scale-[1.4] transition-transform duration-500" />
          </div>
          <span className="font-serif italic text-2xl tracking-tight hidden sm:block font-bold">
            aditi.
          </span>
        </a>

        {/* Divider */}
        <div className="h-6 w-0.5 bg-[#1E1E1E] opacity-20 hidden md:block" />

        {/* Nav Links */}
        <div className="hidden lg:flex items-center gap-6 text-[14px] font-bold text-[#1E1E1E]/80">
          <a href="#projects" onClick={(e) => handleNavClick(e, "#projects")} className="hover:text-text-primary transition-colors relative group">
            Work
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
          </a>
          <a href="/about" onClick={(e) => { e.preventDefault(); navigate('/about'); window.scrollTo(0,0); }} className="hover:text-text-primary transition-colors relative group">
            About Me
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
          </a>
          <a href="#hobbies" onClick={(e) => handleNavClick(e, "#hobbies")} className="hover:text-text-primary transition-colors relative group">
            Life
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
          </a>
        </div>
        
        {/* Mobile Nav Links - Compact */}
        <div className="flex lg:hidden items-center gap-4 text-sm font-bold text-[#1E1E1E]/80">
          <a href="#projects" onClick={(e) => handleNavClick(e, "#projects")} className="hover:text-text-primary">Work</a>
          <a href="/about" onClick={(e) => { e.preventDefault(); navigate('/about'); window.scrollTo(0,0); }} className="hover:text-text-primary">About Me</a>
        </div>

        {/* Divider */}
        <div className="h-6 w-0.5 bg-[#1E1E1E] opacity-20" />

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <a href="/resume" className="hidden sm:flex px-4 py-2 border-2 border-[#1E1E1E] rounded-xl text-sm font-bold text-[#1E1E1E] hover:bg-[#1E1E1E] hover:text-[#FFFFEB] transition-colors">
            Resume
          </a>
          <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")} className="px-5 py-2 bg-accent rounded-xl border-2 border-[#1E1E1E] text-sm font-bold text-text-primary shadow-[2px_2px_0px_#1E1E1E] hover:translate-y-0.5 hover:translate-x-0.5 hover:shadow-[0px_0px_0px_#1E1E1E] transition-all">
            Hire Me
          </a>
        </div>

      </div>
    </nav>
  );
};
export default Navbar;