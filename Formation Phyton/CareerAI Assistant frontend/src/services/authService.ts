import api from "../api/api";



interface LoginData {

    email:string;

    password:string;

}



interface RegisterData {

    first_name:string;

    last_name:string;

    email:string;

    password:string;

}



// LOGIN

export async function login(
    data:LoginData
){

    const response =
        await api.post(
            "/auth/login",
            data
        );


    return response.data;

}



// REGISTER

export async function register(
    data:RegisterData
){

    const response =
        await api.post(
            "/auth/register",
            data
        );


    return response.data;

}