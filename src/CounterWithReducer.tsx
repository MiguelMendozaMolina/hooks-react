import React, {useReducer} from "react";
interface State {
  count: number;
}

type Action = { type: 'increment'} | { type: 'decrement'};

const initialState: State = {count: 0};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

const CounterWithReducer: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({ type: 'increment'})}>+</button>
    </>
  );
}

export default CounterWithReducer;