import API from "../api/axios";


interface RegisterData {

    firstname: string;
    lastname: string;
    email: string;
    password: string;

}


interface LoginData {

    email: string;
    password: string;

}



export const register = async (
    data:RegisterData
)=>{

    const response = await API.post(
        "/auth/register",
        data
    );

    return response.data;

};



export const login = async (
    data:LoginData
)=>{

    const response = await API.post(
        "/auth/login",
        data
    );

    return response.data;

};