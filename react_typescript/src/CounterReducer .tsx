import react,{ useReducer } from "react";


type StateType = {count:number}
type ActionType = {type:'increment' | 'decrement'}

const initialState:StateType = {count: 0};

function reducer(state:StateType, action:ActionType):StateType|never {

  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function CounterReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}

export default CounterReducer