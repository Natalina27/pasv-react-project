import React from 'react';
// import './App.css';
import MenuItem from "./MenuItem";

function Menu() {

    const items = [{
        text: 'Home',
        link: 'home-page'
    },{
        text: 'Products',
        link: 'goods-page'
    },{
        text: 'Services',
        link: 'service-page'
    },{
        text: 'Prices',
        link: 'price-page'

        },{
            text: 'Contacts',
            link: 'cont-page'
    }];

  return (
      <nav className="App-menu">
          {items.map(el => <MenuItem key={el.text} menuItem={el}  />)}
      </nav>
  );
}

export default Menu;
