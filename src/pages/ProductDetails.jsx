import { useParams } from "react-router-dom";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../components/CartProvider";
import { useEffect } from "react";
import { useCallback } from "react";
import ListaProducts from "../components/ListaProducts";
import image from "../assets/product.png";
import image2 from "../assets/product.png";
import image3 from "../assets/product.png";
import image4 from "../assets/product.png";
import image5 from "../assets/product.png";
import image6 from "../assets/product.png";

const ProductDetails = ({ nome, model, price, new_price, disccount }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [image, image2, image3, image4, image5, image6];
  const colors = [
    "miniatura-blue",
    "miniatura-black",
    "miniatura-red",
    "miniatura-yellow",
    "miniatura-orange",
    "miniatura-coral",
  ];

  const { id } = useParams();
  const [isAdded, setIsAdded] = useState(false);
  const { cart, addToCart, cleanCart, removeFromCart } =
    useContext(CartContext);

  const navigate = useNavigate();
  const isProductInCart = (productId, cart) => {
    return cart.some((product) => product.id === productId);
  };

  useEffect(() => {
    setIsAdded(isProductInCart(parseInt(id), cart));
    // console.log(cart);
    // console.log(id);
  }, [id, cart]);

  {
    if (cart.length <= 0) {
      // cleanCart();
    }
  }
  const HandleAddToCart = () => {
    addToCart({
      id: parseInt(id),
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
    removeFromCart(parseInt(id));
    setIsAdded(false);
  };
  const product = ListaProducts.find((item) => item.id === parseInt(id));
  if (!product) {
    return <h2>Produto não encontrado</h2>;
  }

  const colorsClass = colors[currentIndex % colors.length];

  const [star, setStar] = useState(0);

  const ratingValues = () => {
    const ratings = document.querySelector('input[name="rating"]:checked');
    if (ratings) {
      document.getElementById("result").innerHTML = `${ratings.value} `;
    }
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="containerpai-products-details">
      <div className="container-products-img relative">
        <img
          id="img-grande"
          src={images[currentIndex]}
          className={colorsClass}
          alt=""
        />
        <button onClick={prevImage} className="pi pi-angle-left"></button>
        <button onClick={nextImage} className="pi pi-angle-right"></button>
        <div className="miniaturas">
          {images.map((image, i) => {
            const colorsClass = colors[i % colors.length];
            return (
              <img
                src={image}
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`cursor-pointer ${colorsClass}`}
                alt=""
              />
            );
          })}
        </div>
      </div>
      <div className="container-right-side">
        <div className="descriptions-product">
          <p className="model">{product.model}</p>
          <div className="rating">
            {
              <i className="pi pi-star">
                {" "}
                <p id="result"></p>
              </i>
            }
            <button className="button-rating" onClick={ratingValues}>
              Avaliar{" "}
            </button>

            <input type="radio" id="star5" name="rating" value="5" />
            <label htmlFor="star5">&#9733;</label>
            <input type="radio" id="star4" name="rating" value="4" />
            <label htmlFor="star4">&#9733;</label>
            <input type="radio" id="star3" name="rating" value="3" />
            <label htmlFor="star3">&#9733;</label>
            <input type="radio" id="star2" name="rating" value="2" />
            <label htmlFor="star2">&#9733;</label>
            <input type="radio" id="star1" name="rating" value="1" />
            <label htmlFor="star1">&#9733;</label>
          </div>
          <p className="container-precos">
            <span className="p-precos">R$</span> {product.price}
            <span className="p-newprice"> {product.new_price}</span>
          </p>
          <br />
          <p className="container-descricao">
            <h2 className="h2-desc">Descrição do produto</h2>
            <p className="desc">{product.description}</p>
          </p>
          <br />
        </div>
        <div className="containerpai-tamanhos">
          <h2>Tamanho</h2>
          <div className="sizes">
            <input type="checkbox" id="39" name="trinta-nove" value="39" />
            <label htmlFor="39">39</label>
            <input type="checkbox" id="40" name="quarenta" value="40" />
            <label htmlFor="40">40</label>
            <input type="checkbox" id="41" name="quarenta-e-um" value="41" />
            <label htmlFor="41">41</label>
            <input type="checkbox" id="42" name="quarenta-e-dois" value="42" />
            <label htmlFor="42">42</label>
            {isAdded ? (
              <button
                className="pi pi-minus-circle"
                onClick={HandleRemoveFromCart}
              ></button>
            ) : (
              <button
                className="button-buy pi pi-plus-circle"
                onClick={HandleAddToCart}
              ></button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
