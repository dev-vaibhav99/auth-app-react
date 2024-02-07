import React, { useState } from "react";
import { login } from "../../services/user-service";
import { ILogin } from "../../models/IUser";
import { useNavigate } from "react-router-dom";
import FormWrapper from "../Forms/FormWrapper";
import Form from "../Forms/Form";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string>("");

  const [user, setUser] = useState<ILogin>({
    email: "chandrashekhar@gmail.com",
    password: "Password@11",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await login(user);
    localStorage.setItem("token", result);
    result.includes("ERROR") ? setError(result) : navigate("/profile");
  };

  return (
    <FormWrapper error={error} name="Login">
      <Form
        submit={handleSubmit}
        inputs={[
          {
            type: "text",
            name: "email",
            value: user.email,
            onChange: handleInputChange,
            placeholder: "Email address",
            label: "Email address",
          },
          {
            type: "password",
            name: "password",
            value: user.password,
            onChange: handleInputChange,
            placeholder: "Password",
            label: "Password",
          },
        ]}
        button={{ name: "Login", type: "submit" }}
      />
    </FormWrapper>
  );
};

export default Login;
