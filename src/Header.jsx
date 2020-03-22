import React from 'react';
import './App';
import Menu from "./Menu";
import Logo from "./Logo";
import './index.css';


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
