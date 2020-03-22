import React from 'react';
import MenuItem from "./MenuItem";
import './index.css';

function Menu(props) {

    // console.log(props);

  return (
      <nav className="App-menu">
          {props.mItem.map(el => <MenuItem key={el.text} menuItem={el} />)}
      </nav>

  );
}

export default Menu;
