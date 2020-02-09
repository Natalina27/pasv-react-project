import React from 'react';
// import './App.css';
import MenuItem from "./MenuItem";

function Menu() {
    // const text1 = 'Home';
    // const link1 = 'home-page';

    // const items = [{
    //     text: 'Home',
    //     link: 'home-page'
    // },{
    //     text: 'Products',
    //     link: 'goods'
    // }
  return (
      <nav className="App-menu">
              {/*<MenuItem text={text1} link={link1} />*/}
          {/*<MenuItem text='Products' link='goods'/>*/}
          {/*    <MenuItem memuItem={items[0]}/>*/}
          {/*    <MenuItem memuItem={items[1]}/>*/}
          {/*    <MenuItem text='Service' link='service'/>*/}
          {/*    <MenuItem text='Contacts' link='contact'/>*/}
          <MenuItem text='Home' link='home-page' />
          <MenuItem text='Products' link='goods' />
          <MenuItem text='Service' link='service' />
          <MenuItem text='Contacts' link='contact' />
      </nav>
  );
}

export default Menu;
