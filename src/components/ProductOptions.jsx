import ListaProducts from "./ListaProducts";
import CardProducts from "./ProductCards";
import "../css/Product.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Products from "./Products";
const ProductsListing = () => {
  const [isOpen, setIsOpen] = useState();
  const toggleOptions = () => setIsOpen(!isOpen);
  const [products, setProducts] = useState([]); // Estado para armazenar os produtos

  useEffect(() => {
    axios
      .get("http://localhost:3000/produtos") // Substitua pelo seu endpoint
      .then((response) => {
        setProducts(response.data); // Atualiza o estado com os dados da API
      })
      .catch((error) => {
        console.error("Erro ao carregar produtos:", error); // Log de erro
      });
  }, []); // O array vazio garante que o efeito seja executado apenas uma vez ao montar o componente

  return (
    <div className="container-productslisting w-full mt-2 mb-2">
      <div className="menu-options-open">
        <h2>Calções</h2>
        <div className="opcoes1">
          <div className="container-labelinput">
            {" "}
            <input
              type="checkbox"
              name="shorts"
              id="shorts"
              placeholder="shorts"
            />
            <label for="shorts">Shorts </label>
          </div>
          <div className="container-labelinput">
            <input
              type="checkbox"
              name="sweaters"
              id="sweaters"
              placeholder="sweaters"
            />
            <label for="sweaters">Sweaters </label>
          </div>
          <div className="container-labelinput">
            <input
              type="checkbox"
              name="t-shirts"
              id="t-shirts"
              placeholder="t-shirts"
            />
            <label for="t-shirts">T-shirts </label>
          </div>
        </div>
        <h2>Opções</h2>
        <div className="opcoes2">
          <input type="checkbox" name="pants" id="pants" placeholder="pants" />
          <label for="pants">Pants </label>
          <input
            type="checkbox"
            name="jackets"
            id="jackets"
            placeholder="jackets"
          />
          <label for="jackets">Jackets </label>
          <input
            type="checkbox"
            name="accessories"
            id="accessories"
            placeholder="accessories"
          />
          <label htmlFor="accessories">Accessories </label>
        </div>
        <h2>Opções</h2>
        <div className="opcoes3">
          <input type="checkbox" name="pants" id="pants" placeholder="pants" />
          <label for="pants">Pants </label>
          <input
            type="checkbox"
            name="jackets"
            id="jackets"
            placeholder="jackets"
          />
          <label for="jackets">Jackets </label>
          <input
            type="checkbox"
            name="accessories"
            id="accessories"
            placeholder="accessories"
          />
          <label for="accessories">Accessories </label>
        </div>
      </div>

      <div className="menu-mobile-options absolute" onClick={toggleOptions}>
        {!isOpen ? (
          <>
            <i className="pi pi-times"></i>
            <section className="container-opcoes">
              <h2>Calções</h2>
              <div className="opcoes1">
                <div className="container-labelinput">
                  {" "}
                  <input
                    type="checkbox"
                    name="shorts"
                    id="shorts"
                    placeholder="shorts"
                  />
                  <label for="shorts">Shorts </label>
                </div>
                <div className="container-labelinput">
                  <input
                    type="checkbox"
                    name="sweaters"
                    id="sweaters"
                    placeholder="sweaters"
                  />
                  <label for="sweaters">Sweaters </label>
                </div>
                <div className="container-labelinput">
                  <input
                    type="checkbox"
                    name="t-shirts"
                    id="t-shirts"
                    placeholder="t-shirts"
                  />
                  <label for="t-shirts">T-shirts </label>
                </div>
              </div>
              <h2>Opções</h2>
              <div className="opcoes2">
                <div className="container-labelinput">
                  <input
                    type="checkbox"
                    name="pants"
                    id="pants"
                    placeholder="pants"
                  />
                  <label for="pants">Pants </label>
                </div>

                <div className="container-labelinput">
                  {" "}
                  <input
                    type="checkbox"
                    name="jackets"
                    id="jackets"
                    placeholder="jackets"
                  />
                  <label for="jackets">Jackets </label>
                </div>
                <div className="container-labelinput">
                  <input
                    type="checkbox"
                    name="accessories"
                    id="accessories"
                    placeholder="accessories"
                  />
                  <label for="accessories">Accessories </label>
                </div>
              </div>
              <h2>Opções</h2>
              <div className="opcoes3">
                <div className="container-labelinput">
                  <input
                    type="checkbox"
                    name="pants"
                    id="pants"
                    placeholder="pants"
                  />
                  <label for="pants">Pants </label>
                </div>
                <div className="container-labelinput">
                  <input
                    type="checkbox"
                    name="jackets"
                    id="jackets"
                    placeholder="jackets"
                  />
                  <label for="jackets">Jackets </label>
                </div>

                <div className="container-labelinput">
                  {" "}
                  <input
                    type="checkbox"
                    name="accessories"
                    id="accessories"
                    placeholder="accessories"
                  />
                  <label for="accessories">Accessories </label>
                </div>
              </div>
            </section>
          </>
        ) : (
          <i onClick={toggleOptions} className="pi pi-filter icon-filter"></i>
        )}
      </div>
      <section className="container-listingproducts flex flex-wrap align-content-center justify-content-end">
        {/* {products.map((product) => (
          <Products
            key={product.id}
            product={product}
            nome={product.nome}
            price={product.price}
            new_price={product.new_price}
            model={product.model}
          />
        ))} */}
        <Products />
      </section>
    </div>
  );
};

export default ProductsListing;
