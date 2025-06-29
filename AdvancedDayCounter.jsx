import React, { useReducer} from 'react'
import "../Counter.css"

const initialState = {
    // passing initial Objects here 
    step:10,
    count:0
}

function reducer(state,action)
{
    switch(action.type)
        {
            case 'setStep':
                return {...state,step:action.payload}
            case 'dec':
                return {...state,count:state.count-state.step}
             case 'inc':
                return {...state,count:state.count+state.step}
            case 'setCount':
                return {...state,count:action.payload}
            case 'reset':
                return initialState;
            default :
                return state;
        }


}


const Counter = () => {

  const [state,dispatch] =  useReducer(reducer,initialState);
  const {step,count} = state; 
  const date=new Date('23 Novemeber 2080');
  date.setDate(date.getDate() + count);
//   now i dont need to do state.step
  return (
    <>
    <div className="container">
        <div className="step-container">
            <input type="range" 
            className="range-input"
            min="10"
            max="100"
            value={step}
            onChange={(e) => dispatch({type:'setStep',payload:Number(e.target.value)})}
            // use +e or Number
            />
            <span className="step-label">
            Step:{step}
            </span>
        </div>
        <div className="counter-container">
            <button className="btn-minus"
            onClick={() => dispatch({type: 'dec'})}>
                -
            </button>

            {/* input field being controlled element */}

            <input type="text"
            className='counter-input'
            value={count}
            onChange={(e) => dispatch({type: "setCount",payload:Number(e.target.value)})} />

            <button className="btn-plus"
            onClick={() => dispatch({type: 'inc'})}>
                +
            </button>
        </div>
        <p className="date-display">
            <span>
                {count === 0 ? "Today is ": count > 0 ? `${count} day from Today is :` : `${count} day ago was : `}
            </span>
            <span>{date.toDateString()}</span>
        </p>
      <div>
  {(count !== 0 || step !== 1) ? (
    <button className="btn reset-btn"
    onClick={() => dispatch({type: 'reset'})}
    > Reset</button>
  ) : null}
</div>
    </div>
    </>
  )
}

export default Counter;


// date larger than default date display 1 day from today is 
//date is lesser than default date we display 1 day ago was
