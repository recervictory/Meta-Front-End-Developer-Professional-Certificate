import React, {useReducer} from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'BUY_INGREDIANTS':
      return {money: state.money - 10, items: state.items + 2}
    case 'SELL_MEAL':
      return {money: state.money + 15, items:  state.items - 1}
    default:
      return state;
}
}
const UseReducerExample = () => {
  const initialState = {money: 100, items : 10};
  const [state,dispatch] = useReducer(reducer, initialState);
  return (
    <div className="app-useReducer">
      <h1>Wallet : {state.money}</h1>
      <h1>Meal : {state.items}</h1>
      <button onClick={ () => dispatch({type: 'BUY_INGREDIANTS'})}>Shoping Time</button>
      <button onClick={ () => dispatch({type: 'SELL_MEAL'})}>Sell Meal</button>
    </div>
  )
}

export default UseReducerExample;
