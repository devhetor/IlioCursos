import React, { useReducer } from 'react';

export default function Counter(){
    const initialState = {
        count: 0
    }
    const reducer = (state, action) => {
     switch(action.type){
         case 'increment':
             return {count: state.count + 1}
         case 'decrement':
             return {count: state.count - 1}
         default :
         throw new Error();
     }
    };
    const [state, dispatch] = useReducer(reducer, initialState);
    return(
        <>
        <div>Count {state.count}</div>
        <p><button onClick={() => dispatch({type: 'increment'})}>+</button></p>
        <p> <button onClick={() => dispatch({type: 'decrement'})}>-</button></p>
        </>
    )
}