import React from 'react';
import './App.css';
import Logo from "./Logo";
import MenuItem from "./MenuItem";

function Footer() {
  return (
    <footer className="App-footer">
        <div className="App-logo">
            <Logo/>
        </div>
        <div className="Footer-menu">
            <MenuItem text='Home' link='home-page' />
            <MenuItem text='Products' link='goods' />
            <MenuItem text='Service' link='service' />
            <MenuItem text='Contacts' link='contact' />
        </div>
        <div className="Footer-menu">
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
        </div>
        <div className="Footer-paragraph">
           Copyright
        </div>
    </footer>
  );
}

export default Footer;
