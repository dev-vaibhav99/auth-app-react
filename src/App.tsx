import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Registration from "./pages/Authentication/Registration";
import Login from "./pages/Authentication/Login";
import Profile from "./pages/User/Profile";
import PageNotFound from "./components/PageNotFound";
import ProtectedRoute from "./components/Authorization/ProtectedRoute";
import Layout from "./components/Layout";
import ErrorBoundary from "./pages/Error/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Login} />
          <Route path="registration" Component={Registration} />
          <Route path="/login" Component={Login} />
          <Route path="/" element={<Layout />}>
            <Route
              element={<ProtectedRoute allowedRoles={["user", "admin"]} />}
            >
              <Route path="profile" Component={Profile} />
            </Route>
            <Route path="*" Component={PageNotFound} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
