import { createStore,combineReducers } from "redux"
import { counterReducer } from "./CounterState"
import { todoReducer } from "./todoState"
const rootReducer=combineReducers({
    counter: counterReducer,
    todo: todoReducer
})
export const store = createStore(rootReducer)

store.subscribe(() => {
    console.log(store.getState())
})
/*Sperimentando ho unito Redux 03,04,05*/