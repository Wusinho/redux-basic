import { combineReducers } from "redux";
import bugsReducer from './bugs'
import projectreducer from './project'

export default combineReducers({ 
  bugs: bugsReducer,
  project: projectreducer,
})