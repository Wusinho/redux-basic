import reducer from './reducer'
//  private methods

function createStore (reducer) {
  let state;
  let listeners = []; //an array because u can have multiple listeners

  function subscribe(listener) {
    listeners.push(listener)
  }

  function dispatch(action) {
    //call reducer to get new getState
    state = reducer(state, action)
    for (let i = 0; i < listeners.length; i++) {  //notify subscribers or listeners
      listeners[i]()   //we get the listener at this index and call it
    }
  }

 

  function getState () {
    return state
  }

  return {
    getState,
    dispatch,
    subscribe,
  }
}

export default createStore(reducer);