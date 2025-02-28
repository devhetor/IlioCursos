import {applyMiddleware, combineReducers, compose, createStore} from "redux";

const increment  = (count) => count+1;
const decrement = (count) => count - 1;
const multiply = (count) => count * 2;
const divideBy2 = (count) => count / 2;

const results = compose(increment, decrement, multiply, divideBy2);
console.log(results(20))


const counterReducer = (state = {count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
          return {count: state.count + 1}
        case 'DECREMENT':
            return {count: state.count - 1}
        default:
         return state;
    }
}

const todoReducer = (state = ['learn redux','learn react'], action ) => {
    return state;
}
const reducer = combineReducers({
    todo: todoReducer,
    counter: counterReducer
});
const logger = ({getState}) => {
 return next => action => {
     console.log('dispatch this action ', action);
 }
}
const store = createStore(reducer, applyMiddleware(logger));
console.log(store.getState());

store.dispatch({
    type: 'INCREMENT'
})
console.log(store.getState());

store.dispatch({
    type: 'INCREMENT'
})
console.log(store.getState());

store.dispatch({
    type: 'DECREMENT'
})
console.log(store.getState());