import React, { createContext, useReducer } from 'react'

export const CounterContext = createContext();

const counterReducer = (state,action) => {
  switch (action.type){
    case "INCREMENT":
      return state.count < 20 ? { count: state.count + 1 } : state;
    case "DECREMENT":
      return state.count > 0 ? { count: state.count - 1 } : state;
    case "RESET":
      return {count: 0};
    default:
      return state;
  }
}

export const CounterProvider = ({children}) => {
  const [state,dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <CounterContext.Provider value={{state,dispatch}}>
      {children}
    </CounterContext.Provider>
  )
}

export default CounterContext