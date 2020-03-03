import React, { useReducer } from 'react';


const reducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return { value: state.value + 1 };

    case "DECREASE":
      return { value: state.value - 1 };
    default:
      return state;
  }
}
const Counter = () => {
  const [state, dispatch] = useReducer(reducer, {value : 0});

  return(
    <div>
      <h1> Counter is {state.value}</h1>
      <button onClick={() => dispatch({type : 'INCREASE'})} >+</button>
      <button onClick={() => dispatch({type :"DECREASE"})} >-</button>
    </div>
  )
};

export default Counter;