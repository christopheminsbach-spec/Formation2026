import axios from "axios";


const API_URL =
"http://127.0.0.1:5000/api";


export interface LoginRequest {

  email:string;

  password:string;

}


export interface LoginResponse {

  message:string;

  access_token:string;

  user:{
    id:number;
    first_name:string;
    last_name:string;
    email:string;
    role:string;
    is_active:boolean;
  };

}



export async function login(
credentials:LoginRequest
){

const response =
await axios.post<LoginResponse>(
`${API_URL}/auth/login`,
credentials
);


return response.data;

}