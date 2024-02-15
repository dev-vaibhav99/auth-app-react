import React, { useState } from "react";
import { login } from "../../services/user-service";
import { ILogin } from "../../models/IUser";
import { useNavigate } from "react-router-dom";
import FormWrapper from "../../components/Forms/FormWrapper";
import Form from "../../components/Forms/Form";
import useAuth from "../../hooks/useAuth";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string>("");

  const [user, setUser] = useState<ILogin>({
    email: "vaibhav@gmail.com",
    password: "Vaibhav@11",
  });

  const { setAuth } = useAuth();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await login(user);
    typeof result === "string" && result.includes("ERROR")
      ? setError(result)
      : navigate("/profile", { replace: true });
    result?.accessToken && localStorage.setItem("token", result.accessToken);
    setAuth({
      user: result?.user,
      accessToken: result?.accessToken,
      role: result?.user?.userRole,
    });
    result?.user &&
      localStorage.setItem(
        "user",
        JSON.stringify({ ...result.user, password: "" })
      );
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
