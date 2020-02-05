import React from 'react';
import './App.css';
import Logo from "./Logo";

function Footer() {
  return (
    <footer className="App-footer">
        <div className="App-logo">
            <Logo/>
        </div>
        <p className="Footer-paragraph">
            Footer
        </p>
    </footer>
  );
}

export default Footer;
