import React from 'react';
import './App.css';
import Logo from "./Logo";
import Menu from "./Menu";

function Header() {
  return (
    <header className="App-header">
        <Logo/>
        <Menu/>
    </header>
  );
}

export default Header;
