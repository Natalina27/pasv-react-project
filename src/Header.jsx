import React from 'react';
import './App.css';
import Logo from "./Logo";
import Menu from "./Menu";

function Header(props) {


  return (
    <header className="App-header">
        <Logo/>
        <Menu  items={props.menuItems}/>
    </header>
  );
}

export default Header;
