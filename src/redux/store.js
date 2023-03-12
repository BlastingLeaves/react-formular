import {combineReducers, createStore} from 'redux'
import {formReducer} from "./form/FormReducer";


const rootReducer = combineReducers({
    form: formReducer
})

const store = createStore(rootReducer)

export default store


