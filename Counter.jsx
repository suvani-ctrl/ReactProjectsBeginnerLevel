import React, { useReducer } from 'react'
import "../counter.css"
function reducer(state,action) 
// switch case functionality here 
{
    switch(action.type)
    {
        case 'increment':
            return state+1;
        case 'decrement':
            return state-1;
        case  'reset':
            return 0;
        default:
            return state;
    }

}

const Counter = () => {
    const [count,dispatch] = useReducer(reducer,0);
  return (
    <>
    <div className="counter-container">
        <h2 className="counter-heading">
            Count: {count}
        </h2>
        <div className="couunter-buttons">
            <button className="counter-button" onClick={() => dispatch({type: 'increment'})}>Increment</button>
            <button className="counter-button" onClick={() =>dispatch({type: 'decrement'})}>Decrement</button>
            <button className="counter-button" onClick={() => dispatch({type: 'reset'})}>Reset</button>
        </div>
    </div>
    </>
  )
}

export default Counter;
