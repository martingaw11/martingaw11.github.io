import React from 'react';

const NavBar = ({styles}) => {

  return (
    <>
      <div class={`flex justify-around bg-vanillaberry max-w-sm py-3 px-2 rounded-lg ${styles}`} >
        <a class="navbar-link" href="#" >Home</a>
        <a class="navbar-link" href="#" >Projects</a>
        <a class="navbar-link" href="#" >About</a>
      </div>
    </>
  )
}

export default NavBar;
