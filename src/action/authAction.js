
import { _API_URL } from "../../config";
import $api from "../http/index"
import axios from "axios";

class AuthAction {

    async login (email, password){
        const response = await $api.post("/user/login", {email, password});
        localStorage.setItem("token", response.data.accessToken);

        return response.data;
    }

    async registration (email, password){
        const response = await axios.post(`${_API_URL}/user/registration`, {email, password});

        localStorage.setItem("token", response.data.accessToken);
        console.log(response.data)
        return response.data;
    }

    async logout(){
        const response = await $api.post("/user/logout")
        localStorage.removeItem("token");
        return response.data;
    }
}

export default new AuthAction