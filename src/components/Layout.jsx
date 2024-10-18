import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../Home.css";
import "../App.css";
const Layout = ({ children }) => {
  const home = useState();
  const isHome = useState(true);
  return (
    <>
      {<Header />}
      <main className="main-content">{children}</main>
      {isHome && <Footer />}
    </>
  );
};

export default Layout;
