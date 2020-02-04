import React from 'react';
import './App.css';
import Logo from "./Logo";
import Menu from "./Menu";
import HeaderBurger from "./HeaderBurger";

function Header() {
  return (
    <div className="App-header">
     <Logo/>
     <Menu/>
     <HeaderBurger/>
    </div>
  );
}

export default Header;
