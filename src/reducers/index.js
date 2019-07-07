import { combineReducers } from 'redux'
import cards from './cards_reducer'

//exporting rootreduces that use combineReducers
const rootReducer = combineReducers({
    cards
})

export default rootReducer;