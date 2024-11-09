import { useContext } from "react";
import { CartContext } from "../components/CartProvider";
import CardProducts from "../components/CardProducts";
import "primeflex/primeflex.css";
import "../Cart.css";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const calculateTotal = () => {
    const total = cart.reduce((total, product) => {
      const productPrice = product.price || product.newPrice || 0;
      return total + parseFloat(productPrice);
    }, 0);
    return total.toFixed(2);
  };

  return (
    <div className="containerpai-cart">
      <div className="cart-container">
        <h3>Total: R${calculateTotal()}</h3>
        {cart.length === 0 ? (
          <p>Adicione produtos</p>
        ) : (
          <div className="card-carts">
            {cart.map((product) => (
              <CardProducts
                key={product.id}
                id={product.id}
                image={product.image}
                model={product.model}
                nome={product.nome}
                price={product.price}
                new_price={product.new_price}
                cart={cart}
                removeFromCart={removeFromCart}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
