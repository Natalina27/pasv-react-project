import React from 'react';
import './App.css';

function Content() {

    const clickButtonHandler = (value) => {
        console.log('Clicked!  ' + value );
    };

    const inputHandler = (event) => {
        console.log(event.target.value);

    };
  return (
    <main className="App-content">
      <h3> First App</h3>
        <div className="Input-button">
            <input type="text"
                   placeholder='             Input here your text !     '
                    onChange={inputHandler}/>

            <button onClick={() => clickButtonHandler(1)}>Add one</button>
            <button onClick={() => clickButtonHandler(2)}>Add two</button>
        </div>

        <p>
            Content
        </p>
    </main>
  );
}

export default Content;
