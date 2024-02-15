import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";

const Layout = () => {
  return (
    <main className="flex flex-row h-screen">
      <Sidebar />
      <section className="flex flex-col w-contentWidth">
        <Header />
        <Outlet />
      </section>
    </main>
  );
};

export default Layout;
