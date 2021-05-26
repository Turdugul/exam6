import {combineReducers} from "redux"
import products from "./product"
import {reducer as formReducer} from "redux-form"


const reduce = combineReducers({
    products,
    form:formReducer
})

export default reduce;