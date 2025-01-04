import React from 'react';

const NavBar = ({styles}) => {

  return (
    <>
      <div className={`flex justify-around bg-vanillaberry max-w-sm py-3 px-2 rounded-lg ${styles}`} >
        <a className="navbar-link" href="#" >Home</a>
        <a className="navbar-link" href="#about-me" >About</a>
        <a className="navbar-link" href="#projects" >Projects</a>
      </div>
    </>
  );
};

export default NavBar;
