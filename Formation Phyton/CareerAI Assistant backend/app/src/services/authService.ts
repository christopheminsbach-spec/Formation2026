import axios from "axios";

const API_URL = "http://127.0.0.1:5000/api";

const authService = {
  register: async (data: {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
  }) => {
    const response = await axios.post(
      `${API_URL}/auth/register`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  },
};

export default authService;