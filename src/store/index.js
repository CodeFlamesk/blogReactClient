import { applyMiddleware, combineReducers, createStore } from "redux";
import { dashboardReducer } from "./DashboardReducer"
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { userReducer } from "./userReducer";



const rootReducer = combineReducers({
    dashboard : dashboardReducer,
    user: userReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))