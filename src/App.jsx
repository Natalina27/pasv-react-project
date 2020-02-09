import React from 'react';
import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";

function App() {
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
    <div className="App">
      <Header menuItems={items} />
      <Content/>
      <Footer menuItems={items} />
    </div>
  );
}

export default App;
