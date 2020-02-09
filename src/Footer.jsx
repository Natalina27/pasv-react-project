import React from 'react';
import './App.css';
import Logo from "./Logo";
import Menu from "./Menu";

function Footer() {
  return (
    <footer className="App-footer">
        <div className="App-logo">
            <Logo/>
        </div>
        <div className="Footer-menu">
            < Menu />
        </div>
        {/*<div className="Footer-menu">*/}
        {/*    <MenuItem />*/}
        {/*    <MenuItem />*/}
        {/*    <MenuItem />*/}
        {/*    <MenuItem />*/}
        {/*</div>*/}
        <div className="Footer-paragraph">
           Copyright
        </div>
    </footer>
  );
}

export default Footer;
