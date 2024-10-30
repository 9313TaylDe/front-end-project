import { createContext, useCallback, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]); // Inicializa o array de produtos vazio
  const [cart, setCart] = useState([]); // Estado do carrinho

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (error) {
        console.error("Error parsing saved cart:", error); // Use console.error para erros
        setCart([]);
      }
    }

    const savedProducts = localStorage.getItem("products");
    if (savedProducts) {
      try {
        setProducts(JSON.parse(savedProducts));
      } catch (error) {
        console.error("Failed to parse products in localStorage:", error);
        setProducts([]);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = useCallback((product) => {
    if (product && product.id) {
      setCart((prevCart) => [...prevCart, product]);
    } else {
      alert("Produto inválido:", product);
    }
  }, []);

  const removeFromCart = useCallback((id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  }, []);

  const cleanCart = useCallback(() => {
    setCart([]);
  }, []);

  return (
    <CartContext.Provider
      value={{
        products,
        setProducts,
        cart,
        addToCart,
        removeFromCart,
        cleanCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
