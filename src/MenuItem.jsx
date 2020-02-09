import React from 'react';
import './App.css';

function MenuItem(props) {
    console.log(props);

  return (
    <a href={props.link} className="App-menu-item">
      {props.text}
    </a>
  );
}

export default MenuItem;
