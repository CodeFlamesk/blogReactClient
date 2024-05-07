
import axios from "axios"
import { _API_URL } from "../../config"
import { categoryGet, getPostOnId, getPostsAll } from "store/DashboardReducer";



class DashboardAction {

    async addCategory(title) {
        try {   
            const formData = new FormData()
            formData.append("title", title)
            const response = await  axios.post(`${_API_URL}/category`, formData);

            return response
        }catch(e){
            console.log(e)
        }
    }

    getCategory(){
        return async dispatch => {
            try {
                const response = await axios.get(`${_API_URL}/category`);
                return dispatch(categoryGet(response.data))
            } catch(e) {
                console.log(e)
            }
        }
    }

    async addNewPosts(intro, files, description, author, category, mainTitle, descriptionTag) {
        try {
            const formData = new FormData();
            formData.append("intro", intro);
            formData.append("file", files[0]);
            formData.append("description", description);
            formData.append("author", author);
            formData.append("mainTitle", mainTitle);
            formData.append("descriptionTag", descriptionTag);

            const response = axios.post(`${_API_URL}/blog/${category}`, formData)
            return response
        }catch(e) {

            console.log(e)
        }
    }

    getPost(id){
        return async dispatch => {
            try {
                const response = await axios.get(`${_API_URL}/blog/blog/${id}`);
                return dispatch(getPostOnId(response.data))
            }catch(e) {
                console.log(e)
            }
            
        }
    }

    getAllPost(categoryId) {
        return async dispatch => {
            
            const response = await axios.get(`${_API_URL}/blog/blogs/all?id=${categoryId}`,);
            return dispatch(getPostsAll(response.data));
        }
    }
}
export default new DashboardAction