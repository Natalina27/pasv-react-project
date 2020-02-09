import React from 'react';
// import './App.css';
import MenuItem from "./MenuItem";

function Menu(props) {

    console.log(props);

  return (
      <nav className="App-menu">
          {props.items.map(el => <MenuItem key={el.text} menuItem={el} />)}
      </nav>
  );
}

export default Menu;
