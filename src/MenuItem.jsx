import React from 'react';
import './App';
import './index.css';

function MenuItem(props) {
    // console.log(props);

  return (
      <div className="App-menu-item">
          <a href={props.menuItem.link} >{props.menuItem.text}</a>
      </div>

  );
}

export default MenuItem;
