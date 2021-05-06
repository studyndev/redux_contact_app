import {createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './Components/Redux/Reducers/'



const store = createStore(rootReducer,composeWithDevTools())


export default store
