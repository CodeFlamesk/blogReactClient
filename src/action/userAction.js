
import { changeActiveModal, changeTextModal, changeTitleModal } from "store/modalsStore";
import $api from "../http/index"
import { loginUser } from "store/userReducer";

class UserAction {
    static async fetchUsers (){
        const response = await $api.post("/user/users")
        return response.data;
    }

    changePassowrd(email, password, newPassoword) {
        return async  dispatch => {
            try {
                const response = await $api.post("/user/password/change", {email, password, newPassoword});
                if(response.status === 200) {
                    localStorage.setItem("token", response.data.accessToken);
                    dispatch(changeTextModal(""));
                    dispatch(changeTitleModal("Вы изменили свой пароль"));
                }
            } catch(e) {
                dispatch(changeTextModal(e.response.data.message));
                dispatch(changeTitleModal("Произошла ошибка"));
            } finally {
                dispatch( changeActiveModal(true));
            }
        }
    }

}

export default new UserAction