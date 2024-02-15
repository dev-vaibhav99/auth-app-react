import axios from "axios";
import { ILogin } from "../models/IUser";
import { IError } from "../models/IError";

const BASE_URL = "http://localhost:4000";

export const login = async (user: ILogin) => {
  const { email, password } = user;
  try {
    const response = await axios.post(`${BASE_URL}/auth/login`, {
      email,
      password,
    });
    console.log(response);
    return response.data;
  } catch (error: IError | any) {
    console.log(error);
    return (error.response && error.response.status) ||
      error.response.status === 400 ||
      error.response.status === 404 ||
      error.response.status === 401
      ? `ERROR: ${error.response.data}`
      : error;
  }
};

export const profile = async () => {
  const token = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  try {
    const response = await axios.get(`${BASE_URL}/protected/profile`, {
      headers,
    });
    console.log(response);
  } catch (error) {
    console.log("Error", error);
  }
};
