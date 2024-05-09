
import $api from "https"

class UserAction {
    static async fetchUsers (){
        const response = await $api.post("/user/users")
        return response.data;
    }
}

export default new UserAction