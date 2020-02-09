import React from 'react';
import './App.css';
import Logo from "./Logo";
import Menu from "./Menu";

function Header(props) {


  return (
    <header className="App-header">
        <div className="App-logo">
            <Logo/>
        </div>
        <Menu  mItem={props.mainMenuItems}/>
    </header>
  );
}

export default Header;
