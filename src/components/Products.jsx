import { useState } from "react";
import CartContext from "./CartProvider";
import { useContext } from "react";
import CardProducts from "./ProductCards";
const Products = ({ products = [] }) => {
  // Verifica se products é um array antes de usar o método slice
  if (!Array.isArray(products)) {
    console.error("Products must be an array");
    return null;
  }

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
        {visibleCounts < products.length && (
          <button onClick={LoadMore} id="ver-mais">
            Ver
            <Link>
              <i className="pi pi-plus"></i>
            </Link>
          </button>
        )}
        {visibleCounts > 4 && (
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
