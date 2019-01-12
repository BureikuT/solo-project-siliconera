import {combineReducers} from 'redux'

import user from './user'
import articleReducer from './articleReducer'
import receiveArticle from './receiveArticle'
import resultsReducer from './resultsReducer'
import commentReducer from './commentReducer'
import receiveReducer from './receiveArticle'


export default combineReducers({user,articleReducer,receiveArticle,resultsReducer,commentReducer,receiveReducer})