import api from "../api/api";



export async function getProfile(){

    const response =
        await api.get(
            "/profile/"
        );


    return response.data;

}