
const defaultState = {
    layout: "client"
}

const CHANGE_ADMIN = "CHANGE_ADMIN"
const CHANGE_CLIENT = "CHANGE_CLIENT"



export const dashboardReducer = (state = defaultState, action) => {
    switch(action.type) {
        case CHANGE_CLIENT: 
            return {...state, layout : "client"}
        case CHANGE_ADMIN: 
            return {...state, layout : "admin"}
            default: 
                return state
    }
}

export const changeClient = () => ({type: CHANGE_CLIENT})
export const changeAdmin = () => ({type: CHANGE_ADMIN})

