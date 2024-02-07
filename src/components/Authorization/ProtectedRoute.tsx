import React, { useEffect, useState } from "react";
import { IProtectedRoute } from "../../models/IAuthorization";
import { useNavigate } from "react-router-dom";

const ProtectedRoute: React.FC<IProtectedRoute> = ({ children }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login", { replace: true });
    }
  }, []);
  return children;
};

export default ProtectedRoute;
