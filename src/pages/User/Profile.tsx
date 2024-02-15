import React, { useEffect } from "react";
import { profile } from "../../services/user-service";

const Profile: React.FC = () => {
  const token = localStorage.getItem("token");
  useEffect(() => {
    profile();
  }, []);

  return (
    <div className="overflow-hidden whitespace-nowrap break-all">
      <div className="">
        <p>Profile {token}</p>
      </div>
    </div>
  );
};

export default Profile;
