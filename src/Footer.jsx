import React from 'react';
import './App.css';
import Logo from "./Logo";
import Menu from "./Menu";

function Footer(props) {
  return (
    <footer className="App-footer">
        <div className="App-logo">
            <Logo/>
        </div>
        <div className="Footer-menu">
            < Menu items={props.menuItems} />
        </div>
        <div className="Footer-paragraph">
           Copyright
        </div>
    </footer>
  );
}

export default Footer;
