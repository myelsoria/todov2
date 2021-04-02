import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userLoginReducer } from './reducers/userReducers'

const reducer = combineReducers({
    userLogin: userLoginReducer
})

const initialState = {}
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools()
)

export default store