import { createContext, useState } from "react";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  // Adicionar produto
  const addProduct = (product) => {
    setProducts([...products, { ...product, id: Date.now() }]);
  };

  // Atualizar produto
  const updateProduct = (updatedProduct) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
  };

  // Remover produto
  const removeProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  // Obter produto por ID
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
