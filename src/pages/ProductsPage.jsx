import { useParams } from "react-router-dom";
import { useState } from "react"; // Certifique-se de que useState está importado
import ListaProducts from "../components/ListaProducts";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { useEffect } from "react";
import { CartContext } from "../components/CartProvider";
import image from "../assets/product.png";
import image2 from "../assets/product.png";
import image3 from "../assets/product.png";
import image4 from "../assets/product.png";
import image5 from "../assets/product.png";
import image6 from "../assets/product.png";
import Products from "../components/Products";

const ProductDetails = () => {
  const { id } = useParams();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [product, setProduct] = useState(null);
  const [isAdded, setIsAdded] = useState(false);
  const [corSelect, setCorSelect] = useState(null);
  const [products, setProducts] = useState([]); // Todos os produtos

  const { cart, addToCart, isProductInCart, removeFromCart } =
    useContext(CartContext);
  const navigate = useNavigate();

  const HandleAddToCart = () => {
    addToCart(product);
    setIsAdded(true);
    alert(`Produto ${product.id} adicionado ao carrinho`);
  };

  const HandleRemoveFromCart = () => {
    removeFromCart(Number(id));
    setIsAdded(false);
    alert(`Product ${product.id} removido do carrinho`);
  };

  // Fetch product details
  useEffect(() => {
    setLoading(true);
    console.log(`buscando com id, ${id}`);
    fetch(`http://localhost:3000/products/${id}`)
      .then((response) => {
        if (!response.ok) {
          console.error("nao encontrado");
          throw new Error("Produto não encontrado");
        }
        return response.json();
      })
      .then((data) => {
        console.log("produto encontrado");
        setProduct(data);
        setIsAdded(isProductInCart(Number(id), cart));
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [id, cart]);

  const listarCoresDisponiveis = (produto) => {
    if (produto?.color && Array.isArray(produto.color)) {
      return produto.color.filter((cor) => /^#([A-Fa-f0-9]{6})$/.test(cor));
    }
    return [];
  };

  const coresDisponiveis = listarCoresDisponiveis(product);

  if (loading) {
    return <h2>Carregando...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  if (!product) {
    return <h2>Produto não encontrado</h2>;
  }

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
  const productItem = ListaProducts;

  const ratingValues = () => {
    const ratings = document.querySelector('input[name="rating"]:checked');
    if (ratings) {
      document.getElementById("result").innerHTML = `${ratings.value} `;
    } else {
      document.getElementById("result").innerText = "";
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
    <>
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
            <div className="mode-ref-category flex gap-1">
              <p className="micro-descriptions border-right-1">
                {product.brand}
              </p>
              <p className="micro-descriptions border-right-1 ">
                {product.category}
              </p>
              <p className="micro-descriptions ">{product.reference}</p>
            </div>

            <div className="rating flex align-center">
              <button
                id="result"
                className="button-rating"
                onClick={ratingValues}
              >
                Avaliar
                <p id="result"></p>
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
            <div className="container-precos">
              <span className="p-precos">
                <p>R$</p>
                {product.price},<p>00</p>
              </span>{" "}
              <span className="p-newprice">
                <p>R$</p>
                {product.new_price}
              </span>
            </div>
            <br />
            <p className="container-descricao">
              <h2 className="h2-desc">Descrição do produto</h2>
              <p>{product.nome}</p>
              <p>{product.description}</p>
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
              <input
                type="checkbox"
                id="42"
                name="quarenta-e-dois"
                value="42"
              />
              <label htmlFor="42">42</label>
            </div>
            <div className="container-bolinnhas">
              <h2>Cores dísponiveis</h2>
              <div id="cores-container">
                {coresDisponiveis.map((cor, index) => (
                  <div
                    key={index}
                    className={`cor ${corSelect === cor ? "selecionada" : ""}`}
                    style={{ backgroundColor: cor }}
                    onClick={() => setCorSelect(cor)}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          {isAdded ? (
            <button
              className="pi pi-minus-circle"
              onClick={HandleRemoveFromCart}
            ></button>
          ) : (
            <button className="button-buy " onClick={HandleAddToCart}>
              Comprar
            </button>
          )}
        </div>
        <Products products={products} />{" "}
      </div>
    </>
  );
};

export default ProductDetails;
