import axios from "axios";

const API_URL = "http://127.0.0.1:5000/api";

export interface LoginRequest {
  email: string;
  password: string;
}

export async function login(
  credentials: LoginRequest
) {
  const response = await axios.post(
    `${API_URL}/auth/login`,
    credentials
  );

  return response.data;
}