import * as actions from './actionTypes'

let lastId = 0;

export default function projectreducer (state=[], action) {
  if (action.type === actions.PROJECT_ADDED) {
    return [
      ...state,
      {
        id: ++lastId,
        description: action.payload.name,
      }
    ]
    
  }
  return state;
}