import * as actions from './actionTypes'

export const bugAdded = (description) => ({
    type: actions.BUG_ADDED,
    payload: {
      description
    }
})

export const bugResolved = (id) => ({
  type: actions.BUG_RESOLVED,
  payload: {
    id,
  }
})

export const bugRemoved = (id) => ({
  type: actions.BUG_REMOVED,
  payload: {
    id,
  }
})

export const projectAdded = (name) => ({
  type: actions.PROJECT_ADDED,
  payload: {
    name
  }
})