import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { CartContext } from "../components/CartProvider";
import { useNavigate } from "react-router-dom";
import image from "../assets/product.png"; // Você pode usar como fallback se necessário

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const [isAdded, setIsAdded] = useState(false);

  const navigate = useNavigate();

  const isProductInCart = (productId, cart) => {
    return cart.some((product) => product.id === productId);
  };

  // Fetch product details
  useEffect(() => {
    setLoading(true);
    console.log(`buscando com id, ${id}`);
    fetch(`http://localhost:3000/api/products/${id}`)
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

  const HandleAddToCart = () => {
    addToCart(product);
    setIsAdded(true);
  };

  const HandleRemoveFromCart = () => {
    removeFromCart(Number(id));
    setIsAdded(false);
  };

  if (loading) {
    return <h2>Carregando...</h2>;
  }

  // if (error) {
  //   return <h2>{error}</h2>;
  // }

  if (!product) {
    return <h2>Produto não encontrado</h2>;
  }

  const images = [image, product.image, product.image]; // Ajuste conforme necessidade
  const colors = ["miniatura-blue", "miniatura-black", "miniatura-red"];

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
          alt={product.model}
          className={colors[currentIndex % colors.length]}
        />
        <button onClick={prevImage} className="pi pi-angle-left"></button>
        <button onClick={nextImage} className="pi pi-angle-right"></button>
      </div>
      <div className="container-right-side">
        <div className="descriptions-product">
          <p className="model">{product.model}</p>
          <p className="container-precos">
            <span className="p-precos">R$ {product.price.toFixed(2)}</span>
            <span className="p-newprice">
              {" "}
              R$ {product.new_price.toFixed(2)}
            </span>
          </p>
          <h2>Descrição</h2>
          <p>{product.description}</p>
        </div>
        <div className="containerpai-tamanhos">
          <h2>Tamanho</h2>
          {/* Renderizar tamanhos ou outros detalhes */}
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
  );
};

export default ProductDetails;
