import React from 'react';
import './index.css'

function Content(props) {


    let name = 'Initial  ';

    const clickButtonHandler = () => {
        props.bc(name);
        console.log('Clicked!  ' + name );
    };

    const inputHandler = (event) => {
        name = event.target.value;
        console.log(event.target.value);

    };
  return (
    <main className="App-content">
      <h3> First App</h3>
        <div className="Input-button">
            <div className="Input-button__text">{name}  </div>
            <input type="text"
                   placeholder='    Input here your text !     '
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
