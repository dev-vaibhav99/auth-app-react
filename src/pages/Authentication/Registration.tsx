import React, { useEffect, useState } from "react";
import { register, uploadImage, getS3Url } from "../../services/user-service";
import { useNavigate } from "react-router-dom";
import Form from "../../components/Forms/Form";
import FormWrapper from "../../components/Forms/FormWrapper";
import { IRegister } from "../../models/IUser";

const Registration: React.FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string>("");
  const [s3Url, setS3Url] = useState<string>("");
  useEffect(() => {
    getS3Url()
      .then((url) => {
        setS3Url(url.data);
        console.log("effect", s3Url);
      })
      .catch((error) => console.log(error));
  }, []);

  // const [imageName, setImageName] = useState<string>("");
  // console.log(imageName);
  const [user, setUser] = useState<IRegister>({
    firstName: "Vaibhav",
    lastName: "Chandrashekhar",
    email: "vaibhav@gmail.com",
    mobile: "9988776655",
    password: "Password@11",
    gender: "male",
    userRole: "admin",
    imageUrl: "",
  });
  const [profileImage, setProfileImage] = useState<File | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setProfileImage(event.target.files[0]);
    } else
      setUser({
        ...user,
        [event.target.name]: event.target.value,
      });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const imageUrl = await uploadImage(s3Url, profileImage);
    const requestData = { ...user, imageUrl };
    console.log("req", requestData);
    const result = await register(requestData);
    console.log("registratoin", result);
    typeof result === "string" && result.includes("ERROR")
      ? setError(result)
      : navigate("/login", { replace: true });
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
          {
            type: "file",
            name: "profileImage",
            onChange: handleInputChange,
            placeholder: "Profile Image",
            label: "Profile Image",
            accept: "image/*",
          },
        ]}
        button={{ name: "Register", type: "submit" }}
      />
    </FormWrapper>
  );
};

export default Registration;
