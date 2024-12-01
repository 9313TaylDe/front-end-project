import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  //   const API_URL = "http://localhost:3000/api/products"; // URL do backend para produtos

  //   // Carregar os produtos ao montar o componente
  //   useEffect(() => {
  //     const fetchProducts = async () => {
  //       try {
  //         const response = await axios.get(API_URL);
  //         setProducts(response.data);
  //       } catch (error) {
  //         console.error("Erro ao carregar produtos:", error);
  //       }
  //     };

  //     fetchProducts();
  //   }, []);

  // Adicionar um produto
  const addProduct = async (product) => {
    try {
      const response = await axios.post(API_URL, product);
      setProducts((prevProducts) => [...prevProducts, response.data]);
    } catch (error) {
      console.error("Erro ao adicionar produto:", error);
    }
  };

  // Atualizar um produto
  const updateProduct = async (updatedProduct) => {
    try {
      const response = await axios.put(
        `${API_URL}/${updatedProduct.id}`,
        updatedProduct
      );
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === updatedProduct.id ? response.data : product
        )
      );
    } catch (error) {
      console.error("Erro ao atualizar produto:", error);
    }
  };

  // Remover um produto
  const removeProduct = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== id)
      );
    } catch (error) {
      console.error("Erro ao remover produto:", error);
    }
  };

  // Obter um produto por ID
  const getProductById = (id) => products.find((product) => product.id === id);

  return (
    <ProductsContext.Provider
      value={{
        products,
        addProduct,
        updateProduct,
        removeProduct,
        getProductById,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
