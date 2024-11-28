import { set } from "mongoose";
import { createContext, useCallback, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]); // Inicializa o array de produtos vazio
  const [cart, setCart] = useState([]); // Estado do carrinho

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        if (Array.isArray(parsedCart)) {
          setCart(parsedCart);
        } else {
          console.warn("Carrinho inválido no localstorage, redefinindo");
        }
      } catch (error) {
        console.error("Error parsing saved cart:", error); // Use console.error para erros
        setCart([]);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.removeItem("cart");

    const savedProducts = localStorage.getItem("products");
    if (savedProducts) {
      try {
        const parsedProducts = JSON.parse(savedProducts);
        if (Array.isArray(parsedProducts)) {
          setProducts(parsedProducts);
        } else {
          console.warn("Produtos inválidos no localstorage, redefinindo");
          setProducts([]);
        }
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
      setCart((prevCart) => {
        if (prevCart.some((item) => item.id === product.id)) {
          alert("Produto já está no carrinho");
          return prevCart;
        }
        return [...prevCart, product];
      });
    } else {
      console.error("Produto inválido", product);
    }
  }, []);

  const removeFromCart = useCallback((id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  }, []);

  const isProductInCart = (productId, cart) => {
    return cart.some((product) => product.id === productId);
  };

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
        isProductInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
