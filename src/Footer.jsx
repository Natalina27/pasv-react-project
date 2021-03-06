import React from 'react';
import './App';
import Menu from "./Menu";
import './index.css'
import Logo from "./Logo";


function Footer(props) {
  return (
    <footer className="App-footer">
        <div className="App-logo">
            <Logo/>
        </div>
        <div className="Footer-menu">
        <div className="Footer-menu1">
            < Menu mItem={props.mainMenuItems} />
        </div>
        <div className="Footer-menu2">
            < Menu mItem={props.footerMenuItems} />
        </div>
        <div className="Footer-paragraph">
           <p> @Copyright</p>
        </div>
        </div>
    </footer>
  );
}

export default Footer;
