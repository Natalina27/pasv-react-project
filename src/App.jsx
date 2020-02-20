import React, {useState} from 'react';
import './App.css';
import './index.css';
import Header from "./Header";
import Footer from "./Footer";
// import Content from "./Content";
import State from "./State";

function App() {
    const mainMenu = [{
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
    const footerMenu =[{
        text: 'Menu1',
        link: 'menu1'
    },{
        text: 'Menu2',
        link: 'menu2'
    },{
        text: 'Menu3',
        link: 'menu3'
    },{
        text: 'Menu4',
        link: 'menu4'
    },{
        text: 'Menu5',
        link: 'menu5'
    }];

    // function buttonClicked( name ) {
    //     console.log('CLICKED !!!!' + name);
    // }

    const [totalCount, setTotalCount] = useState(0);

    function countChange(value){
        console.log('changed !!!' + value);
        setTotalCount(value);
    }
    return (
        <div className="App">
          <Header mainMenuItems={mainMenu} />
          {/*<Content bc={buttonClicked}/>*/}
          Total: {totalCount}
            <State  countChange={countChange}/>
             <hr/>
            <State countChange={countChange}/>
          <Footer mainMenuItems={mainMenu} footerMenuItems={footerMenu} />
        </div>
  );
}

export default App;
