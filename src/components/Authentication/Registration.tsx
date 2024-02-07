import React, { useState } from "react";
import { login } from "../../services/user-service";
import { useNavigate } from "react-router-dom";
import Form from "../Forms/Form";
import FormWrapper from "../Forms/FormWrapper";
import { IRegister } from "../../models/IUser";

const Registration: React.FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string>("");

  const [user, setUser] = useState<IRegister>({
    firstName: "Vaibhav",
    lastName: "Chandrashekhar",
    email: "chandrashekhar@gmail.com",
    mobile: "9988776655",
    password: "Password@11",
    gender: "male",
    userRole: "admin",
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
    <FormWrapper error={error} name="Registration">
      <Form
        submit={handleSubmit}
        inputs={[
          {
            type: "text",
            name: "firstName",
            value: user.firstName,
            onChange: handleInputChange,
            placeholder: "First Name",
            label: "First Name",
          },
          {
            type: "text",
            name: "lastName",
            value: user.lastName,
            onChange: handleInputChange,
            placeholder: "Last Name",
            label: "Last Name",
          },
          {
            type: "text",
            name: "email",
            value: user.email,
            onChange: handleInputChange,
            placeholder: "Email",
            label: "Email",
          },
          {
            type: "number",
            name: "mobile",
            value: user.mobile,
            onChange: handleInputChange,
            placeholder: "Mobile",
            label: "Mobile",
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
        button={{ name: "Register", type: "submit" }}
      />
    </FormWrapper>
  );
};

export default Registration;
