
import global from './global'
import about from './about'
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    global,
    about,
    // rest of your reducers
});
export default createRootReducer
