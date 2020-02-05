import React from 'react';
import './App.css';
import MenuItem from "./MenuItem";

function Menu() {
  return (
      <nav className="App-menu">
              <MenuItem/>
              <MenuItem/>
              <MenuItem/>
              <MenuItem/>
      </nav>
  );
}

export default Menu;
