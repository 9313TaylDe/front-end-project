import ListaProducts from "./ListaProducts";
import CardProducts from "./ProductCards";
import "primeicons/primeicons.css";
import "../css/Product.css";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartProvider";

const Products = () => {
  const [visibleCounts, setVisibleCounts] = useState(4);
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  const IsProductInCart = (productId) => {
    return cart.some((item) => item.id === productId);
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
          key={produto.id}
          id={produto.id}
          nome={produto.nome}
          model={produto.model}
          image={produto.image}
          price={produto.price}
          new_price={produto.new_price}
          disccount={produto.disccount}
          isAdded={IsProductInCart(produto.id)}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
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
