import React from 'react';
import Logo from "../Asset/Logo.png";

const Header = () => {
  return (
    <header className='header'>
      <div className="logo">
        <img src={Logo}/>
        <h1>REACHINBOX</h1>
      </div>
    </header>
  );
};

export default Header;
