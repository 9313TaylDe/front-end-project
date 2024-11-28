import CardProducts from "./ProductCards";
import "primeicons/primeicons.css";
import "../css/Product.css";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartProvider";
import axios from "axios";

const Products = () => {
  // Estados
  const [visibleCounts, setVisibleCounts] = useState(4); // Número de produtos visíveis
  const [products, setProducts] = useState([]); // Estado para armazenar os produtos
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  // Função para carregar produtos da API
  useEffect(() => {
    axios
      .get("http://localhost:3000/produtos") // Substitua pelo seu endpoint
      .then((response) => {
        setProducts(response.data); // Atualiza o estado com os dados da API
      })
      .catch((error) => {
        console.error("Erro ao carregar produtos:", error); // Log de erro
      });
  }, []); // O array vazio garante que o efeito seja executado apenas uma vez ao montar o componente

  // Verifica se o produto está no carrinho
  const IsProductInCart = (productId) => {
    return cart.some((item) => item.id === productId);
  };

  // Ações de controle de exibição
  const LoadMore = () => {
    setVisibleCounts((previousCount) => previousCount + 4);
  };

  const showMore = () => {
    setVisibleCounts((previousCount) => Math.max(4, previousCount - 4));
  };

  return (
    <div className="container-products">
      {/* Renderiza produtos com base no limite visível */}
      {products.slice(0, visibleCounts).map((produto) => (
        <CardProducts
          key={produto.id}
          id={produto.id}
          nome={produto.nome}
          model={produto.model}
          image={produto.image}
          price={produto.price}
          new_price={produto.new_price}
          disccount={produto.discount}
          isAdded={IsProductInCart(produto.id)}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <div className="card-ver-mais">
        {/* Botão para carregar mais produtos */}
        {visibleCounts < products.length && (
          <button onClick={LoadMore} id="ver-mais">
            Ver
            <Link>
              <i className="pi pi-plus"></i>
            </Link>
          </button>
        )}
        {/* Botão para exibir menos produtos */}
        {visibleCounts > 8 && (
          <button onClick={showMore} id="ver-menos">
            Ver
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
