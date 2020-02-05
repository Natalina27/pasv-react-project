import React from 'react';
import './App.css';
import MenuItem from "./MenuItem";

function Menu() {
  return (
      <nav className="App-menu">
          <ul>
              <MenuItem/>
              <MenuItem/>
              <MenuItem/>
              <MenuItem/>
          </ul>
      </nav>
  );
}

export default Menu;
