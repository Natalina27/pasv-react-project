import React, {useState} from 'react';
import './State.css';
import './index.css';

function State(props) {
    const [count, setCount] = useState(3);
    const countChangeMinusHandler = () => {
        setCount(count - 1);
        props.countChange(count - 1);
    };
    const countChangePlusHandler = () => {
        setCount(count + 1);
        props.countChange(count - 1);
    };

    return (
    <div className="state-container">
        <button onClick={countChangeMinusHandler} className="pm-button">-</button>
        <div className="count-variable">{count}</div>
        <button onClick={countChangePlusHandler} className="pm-button">+</button>

    </div>
  );
}

export default State;
