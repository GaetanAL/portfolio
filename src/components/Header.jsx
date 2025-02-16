import React from "react";

/**
 * Node modules
 */
import { useState } from "react";

/**
 * Components
 */
import Navbar from "./Navbar";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-800 to-zinc-800/0">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
        <h1>
          <a href="/" className="logo">
            <img
              src="images/logo.svg"
              width={55}
              height={40}
              alt="Logo GL"
              className="p-1 box-content rounded-xl"
            />
          </a>
        </h1>

        <div className="relative md:justify-self-center">
          <button 
          className="menu-btn md:hidden" 
          onClick={() => setNavOpen((prev) => !prev )}>

            <span className="material-symbols-rounded">
              {navOpen ? 'close' : 'menu'}
            </span>
          </button>

          <Navbar navOpen={navOpen} />
        </div>

        <a
          href="#contact"
          className="btn btn-secondary max-md:hidden md:justify-self-end"
        >
          Me Contacter
        </a>
      </div>
    </header>
  );
};

export default Header;
