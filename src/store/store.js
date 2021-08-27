// import {createStore} from'redux';
// import reducer from './reducer'

// const store = createStore(reducer, 
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


// export default store;


//its is simpler if redux-devtools is installed

import {createStore} from'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import reducer from './reducer'
import projectreducer from './project'

const store = createStore(
  reducer,
  devToolsEnhancer({ trace: true }), 
  )

export default store;