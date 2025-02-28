export default (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      debugger;
      return state + 1
    case 'DECREMENT':
      debugger;
      return state - 1
    case 'MULTIPLY':
      debugger;
      return state * 2
    case 'DIVIDE':
      return state / 2
    default:
      return state
  }
}
