import { createContext, useCallback, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]); // Inicializa o array de produtos vazio
  const [cart, setCart] = useState([]); // Estado do carrinho

  // Carrega produtos e carrinho salvos no localStorage
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

  // Salva produtos no localStorage quando são atualizados
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  // Salva o carrinho no localStorage quando é atualizado
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Adiciona um produto ao carrinho
  const addToCart = useCallback((product) => {
    if (product && product.id) {
      setCart((prevCart) => [...prevCart, product]);
    } else {
      alert("Produto inválido:", product);
    }
  }, []);

  // Remove um item do carrinho pelo ID
  const removeFromCart = useCallback((id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  }, []);

  // Limpa o carrinho
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
