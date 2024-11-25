import { Link, useNavigate, useParams } from "react-router-dom";
import product from "../assets/product.png";
import "../css/Home.css";
import { CartContext } from "./CartProvider";
import ProductDetails from "../pages/ProductDetails";
import { useContext, useEffect, useRef, useState } from "react";

const CardProducts = ({
  nome,
  id,
  model,
  image,
  price,
  new_price,
  disccount,
  addToCart,
  removeFromCart,
  products = [],
}) => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();
  const [isAdded, setIsAdded] = useState(false);
  const isProductInCart = (productId, cart) => {
    return cart.some((product) => product.id === productId);
  };

  useEffect(() => {
    setIsAdded(isProductInCart(id, cart));
  }, [id, cart]);

  const HandleAddToCart = () => {
    addToCart({ id, nome, model, price, new_price, image, disccount });
  };

  const HandleRemoveFromCart = () => {
    removeFromCart(id);
  };
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  const HandlePageClick = () => {
    scrollTop();
    navigate(`/product/${id}/`);
  };

  return (
    <div className="card-products">
      <div className="card-image">
        <p className="card-disccount">{disccount}% OFF</p>
        <img src={product} alt="imagem do produto" />
      </div>
      <p className="card-title">{nome}</p>
      <div className="card-descriptions">
        <p className="card-model">{model}</p>
      </div>
      <div className="card-prices">
        <p className="old-price">R${price}</p>
        <p className="new-price">R${new_price}</p>
      </div>
      <>
        <i
          className="pi pi-info-circle"
          onClick={HandlePageClick}
          href="#header"
        ></i>
        {isAdded ? (
          <Link
            onClick={HandleRemoveFromCart}
            className="pi pi-cart-minus"
          ></Link>
        ) : (
          <Link onClick={HandleAddToCart} className="pi pi-cart-plus"></Link>
        )}
      </>
    </div>
  );
};

export default CardProducts;
