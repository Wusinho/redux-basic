// import store from './store'
// import * as actions from './actions'

// // const unsubscribe = store.subscribe(()=>{
// //   console.log('store changed', store.getState())
// // })

// store.dispatch(actions.bugAdded('Bug 1'))
// store.dispatch(actions.bugAdded('Bug 2'))
// store.dispatch(actions.bugResolved(1))

// // unsubscribe()

// // store.dispatch ({
// //   type: actions.BUG_REMOVED,
// //   payload:{
// //     id: 1,
// //   }
// // })


// // store.dispatch ({
// //   type: 'bugAdded',
// //   payload:{
// //     description: 'bug2'
// //   }
// // })

// console.log(store.getState())


// import store from './customStore'
// import * as actions from './actions'

// store.subscribe(()=>{
//   console.log('Store Changed')
// })

// store.dispatch(actions.bugAdded('Bug 1'))
// store.dispatch(actions.bugAdded('Bug 2'))

// console.log(store.getState())

import store from './store/store'
import * as actions from './store/actions'


store.dispatch(actions.bugAdded('Bug 1'))
store.dispatch(actions.bugAdded('Bug 2'))
store.dispatch(actions.bugAdded('Bug 3'))
store.dispatch(actions.bugRemoved(1))
store.dispatch(actions.projectAdded('Bug 3'))

