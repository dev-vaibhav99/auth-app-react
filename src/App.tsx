import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Registration from "./components/Authentication/Registration";
import Login from "./components/Authentication/Login";
import Profile from "./components/User/Profile";
import PageNotFound from "./components/PageNotFound";
import ProtectedRoute from "./components/Authorization/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" />
        <Route path="registration" Component={Registration} />
        <Route path="login" Component={Login} />
        <ProtectedRoute>
          <Route path="profile" Component={Profile} />
        </ProtectedRoute>
        <Route path="*" Component={PageNotFound} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
