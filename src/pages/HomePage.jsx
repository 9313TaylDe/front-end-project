import { useState, useEffect } from "react";
import axios from "axios";
import CollectionProducts1 from "../components/CollectionProducts1";
import Products from "../components/Products";
import { Link } from "react-router-dom";
import "../css/Home.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CollectProducts2 from "../components/CollectionsProducts2";
import ProductCirlce from "../components/ProductCircle";
import CollectionsProducts3 from "../components/CollectionProducts3";
const Home = () => {
  const [isSmall, seIsSmall] = useState();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products") // Substitua pelo URL da sua API
      .then((response) => {
        console.log("Produtos carregados:", response.data); // Log para verificar os dados
        setProducts(response.data); // Atualizar o estado com os produtos
      })
      .catch((error) => {
        console.error("Erro ao carregar produtos:", error); // Log para erros
      });
  }, []); // O array vazio [] garante que isso será executado apenas uma vez

  const Small = () => seIsSmall(!isSmall);
  return (
    <>
      <div className="div-home">
        <CollectionsProducts3 />
        <CollectProducts2 />
        <CollectionProducts1 />
        <div className="container-produtosemalta">
          <h3>Produtos em alta</h3>
          <Link className="link-vermais-global" font="10px" color="red">
            Ver Todos &rarr;
          </Link>
        </div>
        <Products products={products} />
        <ProductCirlce />
      </div>
    </>
  );
};

export default Home;
