import React from "react";
import { Link, useNavigate } from "react-router-dom";
import femaleAvatar from "../../assets/femaleAvatar.png";
import maleAvatar from "../../assets/maleAvatar.png";
import { IoPowerSharp } from "react-icons/io5";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  const userObj = JSON.parse(user + "");
  // console.log(userObj.imageUrl);
  const { gender, imageUrl } = userObj;
  console.log(gender, imageUrl);
  const image = imageUrl
    ? imageUrl
    : gender === "male"
    ? maleAvatar
    : femaleAvatar;
  femaleAvatar;

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <header className="bg-blue-500 text-white py-4 z-10">
      {/* bg-gradient-to-t from-blue-300 to-blue-500 */}
      <div className="container mx-auto flex justify-end items-center px-20">
        <nav className="space-x-4 flex flex-row">
          <Link to="/profile">
            <img
              src={image}
              // src="https://user-profile-photos-1.s3.ap-south-1.amazonaws.com/3%EF%BF%BD9%EF%BF%BD%EF%BF%BD/%EF%BF%BD%3D%3As%0C_W%EF%BF%BDs%06"
              className="h-10 w-10 rounded-full"
              alt="profile pic"
            />
          </Link>
          <button onClick={handleLogout}>
            <IoPowerSharp size={25} />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
