import React from 'react';
import './App.css';

function Content() {

    function clickButton(){
        console.log('Clicked !' );
    }
  return (
    <main className="App-content">
      <h3> First App</h3>
        <button>Add one</button>
        <button>Add two</button>
        <p>
            Content
        </p>
    </main>
  );
}

export default Content;
