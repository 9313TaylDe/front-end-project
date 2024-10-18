import { Link, useNavigate } from "react-router-dom";
import product from "../assets/product.png";
import "../Product.css";
import { useContext, useEffect, useState } from "react";
const CardProducts = ({
  nome,
  id,
  model,
  image,
  price,
  new_price,
  disccount,
  products = [],
  addToCart,
  removeFromCart,
}) => {
  // const {cart} = useContext(CartContext)
  const [isAdd, setIsAdded] = useState(false);
  const [Suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  // useEffect(() => {
  //   const productInCart = cart.some((product) => product.id === id);
  //   setIsAdded(productInCart);
  // }, [id, cart]);

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
    navigate(`/product/${id}`);
    setSuggestions([]);
  };
  return (
    <div className="card-products">
      <div className="card-image">
        <p className="card-disccount">{disccount}% OFF</p>
        <img src={product} alt="imagem do produto" />
      </div>
      <p className="card-titles">{nome}</p>
      <div className="card-descriptions">
        <p className="card-model">{model}</p>
      </div>
      <div className="card-prices">
        <p className="old-price">{price}</p>
        <p className="new-price">{new_price}</p>
      </div>
      <>
        {setIsAdded ? (
          <Link
            to="/cart"
            onClick={HandleAddToCart}
            className="pi pi-cart-plus"
          ></Link>
        ) : (
          <Link
            onClick={HandleRemoveFromCart}
            className="pi pi-cart-minus"
          ></Link>
        )}
      </>
    </div>
  );
};

export default CardProducts;
