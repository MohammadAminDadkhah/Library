import axiosClient from "../api/axios.js";
import {LoginType} from "../page/login/types/loginTypes.ts";

const authService = {
    login: (data: LoginType) => {
        return axiosClient.post("/auth/login", data);
    }
}

export default authService;