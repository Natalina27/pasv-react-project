import React, {useState} from 'react';
import './Counter';
import './Count.css';
// import './index.css';

function Counter(props) {
    const [count, setCount] = useState(props.startCounter);

    const countChangeMinusHandler = () => {
        setCount(count - 1);
        props.sum( - 1);
    };

    const countChangePlusHandler = () => {
        setCount(count + 1);
        props.sum(1);
    };

    return (
    <div className="state-container">
        <button onClick={countChangeMinusHandler} className="pm-button">-</button>
        <div className="count-variable">{count}</div>
        <button onClick={countChangePlusHandler} className="pm-button">+</button>
    </div>
  );
}

export default Counter;
