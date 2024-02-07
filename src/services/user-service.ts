import axios from "axios";
import { ILogin } from "../models/IUser";
import { IError } from "../models/IError";

export const login = async (user: ILogin) => {
  const { email, password } = user;
  try {
    const token = await axios.post("http://localhost:4000/auth/login", {
      email,
      password,
    });
    return token.data.accessToken;
  } catch (error: IError | any) {
    console.log(error);
    return (error.response && error.response.status === 400) ||
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
    const response = await axios.get(
      "http://localhost:4000/protected/profile",
      { headers }
    );
    console.log(response);
  } catch (error) {
    console.log("Error", error);
  }
};
