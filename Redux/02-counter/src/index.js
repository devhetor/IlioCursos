import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Counter from './components/Counter'
import counter from './reducers'

const store = createStore(counter)
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
  <Counter
    value={store.getState()}
    onIncrement={() => {
      debugger;
      store.dispatch({ type: 'INCREMENT' })
    }}
    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
    onMultiply = {() => store.dispatch({type: 'MULTIPLY'})}
    onDivide = {() =>  store.dispatch({type: 'DIVIDE'})}
  />,
  rootEl
)

render()
store.subscribe(render)
