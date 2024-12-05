import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

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
