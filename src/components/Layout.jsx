import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../css/Home.css";
import "../css/App.css";
import NotFound from "../pages/NotFound";
import useAuth from "../hooks/useAuth";
const Layout = ({ children }) => {
  const home = useState();
  const isHome = useState(true);

  const [pageFound, setPageFound] = useState(true);
  return (
    <>
      <Header />
      <main className="main-content">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
