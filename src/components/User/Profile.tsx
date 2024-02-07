import React, { useEffect } from "react";
import { profile } from "../../services/user-service";

const Profile: React.FC = () => {
  const token = localStorage.getItem("token");
  useEffect(() => {
    profile();
  }, []);

  return <div>Profile {token}</div>;
};

export default Profile;
