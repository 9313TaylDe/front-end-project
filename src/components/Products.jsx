import ListaProducts from "./ListaProducts";
import CardProducts from "./CardProducts";
import "primeicons/primeicons.css";
import "../Product.css";
import { useContext, useState } from "react";
import { set } from "react-hook-form";
import { Link } from "react-router-dom";
const Products = () => {
  const [visibleCounts, setVisibleCounts] = useState(4);
  // const [cart, addToCart, removeFromCart] = useContext(CartContext)
  const IsProductInCart = (productId) => {
    return CardProducts.some((item) => item.id === productId);
  };

  const LoadMore = () => {
    setVisibleCounts((previousCount) => previousCount + 4);
  };

  const showMore = () => {
    setVisibleCounts((previousCount) => Math.max(4, previousCount - 4));
  };
  return (
    <div className="container-products">
      {ListaProducts.slice(0, visibleCounts).map((produto) => (
        <CardProducts
          nome={produto.nome}
          model={produto.model}
          image={produto.image}
          price={produto.price}
          new_price={produto.new_price}
          disccount={produto.disccount}
        />
      ))}
      <div className="card-ver-mais">
        {visibleCounts < ListaProducts.length && (
          <button onClick={LoadMore} id="ver-mais">
            Ver
            <Link>
              <i className="pi pi-plus"></i>
            </Link>
          </button>
        )}
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
