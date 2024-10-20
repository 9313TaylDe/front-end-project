import { useState } from "react";
import CollectionProducts1 from "../components/CollectionProducts1";
import Products from "../components/Products";
import { Link } from "react-router-dom";
import "../Home.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CollectProducts2 from "../components/CollectionsProducts2";
const Home = () => {
  const [isSmall, seIsSmall] = useState();

  const Small = () => seIsSmall(!isSmall);
  return (
    <>
      <div className="div-home">
        <Header />
        <CollectProducts2 />
        <CollectionProducts1 />
        <div className="container-produtosemalta">
          <h3>Produtos em alta</h3>
          <Link className="link-vermais-global" font="10px" color="red">
            Ver Todos &rarr;
          </Link>
        </div>
        <Products />
        <Footer />
      </div>
    </>
  );
};

export default Home;
