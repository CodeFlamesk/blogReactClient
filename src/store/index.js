import { applyMiddleware, combineReducers, createStore } from "redux";
import { dashboardReducer } from "./DashboardReducer"
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";



const rootReducer = combineReducers({
    dashboard : dashboardReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))