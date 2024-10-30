import { Link, useNavigate, useParams } from "react-router-dom";
import product from "../assets/product.png";
import "../Product.css";
import { CartContext } from "./CartProvider";
import ProductDetails from "./ProductDetails";
import { useContext, useEffect, useState } from "react";
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
  const [isAdded, setIsAdded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const productInCart = cart.some((product) => product.id === id);
    setIsAdded(productInCart);
  }, [id, cart]);

  const HandleAddToCart = () => {
    addToCart({
      id,
      nome,
      model,
      price,
      new_price,
      image,
      disccount,
    });
    setIsAdded(true);
  };

  const HandleRemoveFromCart = () => {
    removeFromCart(id);
    setIsAdded(false);
  };

  const HandlePageClick = () => {
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
        <p className="old-price">{price}</p>
        <p className="new-price">{new_price}</p>
      </div>
      <>
        <i className="pi pi-info-circle" onClick={HandlePageClick}></i>
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
