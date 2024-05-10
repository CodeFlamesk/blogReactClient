

import { _API_URL } from "../../config";
import $api from "../http/index"
import {loginUser, registrationUser, logoutUser, changeLoadingAuth} from "store/userReducer"
import axios from "axios";


class AuthAction {

    login (email, password){
        return async dispatch => {
            const response = await $api.post("/user/login", {email, password});
            localStorage.setItem("token", response.data.accessToken);
            console.log(response)
            if(response.status === 200) {
                return dispatch(loginUser(response.data.user));
            }
        }
    }

    registration (email, password, name, surname){
        return async dispatch => {
            const response = await $api.post(`/user/registration`, {email, password, name, surname});
            console.log(response)
            localStorage.setItem("token", response.data.accessToken);
            if(response.status === 200) {
                return dispatch(registrationUser(response.data.user));
            }
        }
    }

    logout(){
        return async dispatch => {
            const response = await $api.post("/user/logout")
            localStorage.removeItem("token");    
            if(response.status === 200) {
                return dispatch(logoutUser());
            }    
        }
    }


    checkAuth() {

        return async dispatch => {
            
            try {
                dispatch(changeLoadingAuth(true))
                const response = await  axios.get(`${_API_URL}/user/refresh`, { withCredentials: true })
                


                if(response.status === 200) {
                    localStorage.setItem("token", response.data.accessToken);
                    
                    return dispatch(loginUser(response.data.user), );
                }
            } catch (e) {
                alert("Error")
            } finally {
                dispatch(changeLoadingAuth(false))
            }
        }
    }
}

export default new AuthAction