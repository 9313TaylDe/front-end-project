import { useParams } from "react-router-dom";
import { useState } from "react";
import ListaProducts from "./ListaProducts";
import image from "../assets/product.png";
import image2 from "../assets/product.png";
import image3 from "../assets/product.png";
import image4 from "../assets/product.png";
import image5 from "../assets/product.png";
import image6 from "../assets/product.png";

const ProductDetails = ({ background }) => {
  const { id } = useParams();
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

  const productItem = ListaProducts.find((item) => item.id === parseInt(id));
  if (!productItem) {
    return <h2>Produto não encontrado</h2>;
  }

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
          <p className="model">{productItem.model}</p>
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
            <span className="p-precos">R$</span> {productItem.price}
            <span className="p-newprice"> {productItem.new_price}</span>
          </p>
          <br />
          <p className="container-descricao">
            <h2 className="h2-desc">Descrição do produto</h2>
            <p className="desc">{productItem.description}</p>
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
            <button className="button-buy">COMPRAR</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
