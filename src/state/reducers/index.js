import { combineReducers } from "redux";
import amountReducers from "./amountReducers";

const reducres = combineReducers({
    amount: amountReducers
})

export default reducres;