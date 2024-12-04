import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import CardProducts from "./ProductCards";
import { CartContext } from "./CartProvider";
import "primeicons/primeicons.css";
import "../css/Product.css";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]); // Estado para produtos
  const [visibleCounts, setVisibleCounts] = useState(4);
  const [loading, setLoading] = useState(true);

  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  // Função para verificar se o produto está no carrinho
  const IsProductInCart = (productId) => {
    return cart.some((item) => item.id === productId);
  };
  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao carregar produtos:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Carregando produtos...</p>;
  }

  const LoadMore = () => {
    setVisibleCounts((previousCount) => previousCount + 4);
  };

  const showMore = () => {
    setVisibleCounts((previousCount) => Math.max(4, previousCount - 4));
  };

  return (
    <div className="container-products">
      {products.slice(0, visibleCounts).map((produto) => (
        <CardProducts
          key={produto.id}
          id={produto.id}
          nome={produto.nome}
          model={produto.model}
          image={produto.image}
          price={produto.price}
          new_price={produto.new_price}
          discount={produto.discount}
          isAdded={IsProductInCart(produto.id)}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <div className="card-ver-mais">
        {visibleCounts < products.length && (
          <button onClick={LoadMore} id="ver-mais">
            Ver Mais
            <Link>
              <i className="pi pi-plus"></i>
            </Link>
          </button>
        )}
        {visibleCounts > 8 && (
          <button onClick={showMore} id="ver-menos">
            Ver Menos
            <Link>
              <i className="pi pi-minus"></i>
            </Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default Products;
