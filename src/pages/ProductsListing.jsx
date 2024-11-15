import ListaProducts from "../components/ListaProducts";
import CardProducts from "../components/CardProducts";
import "../Product.css";
import { useState } from "react";
const ProductsListing = () => {
  const [isOpen, setIsOpen] = useState();
  const toggleOptions = () => setIsOpen(!isOpen);

  return (
    <div className="container-productslisting">
      <div className="container-menulistingproducts">
        {!isOpen ? (
          <i onClick={toggleOptions} className="pi pi-angle-right"></i>
        ) : (
          <>
            <i onClick={toggleOptions} className="pi pi-times"></i>
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
                <input
                  type="checkbox"
                  name="pants"
                  id="pants"
                  placeholder="pants"
                />
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
                <input
                  type="checkbox"
                  name="pants"
                  id="pants"
                  placeholder="pants"
                />
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
            </section>
          </>
        )}
      </div>
      <section className="container-listingproducts">
        {ListaProducts.map((product) => (
          <CardProducts
            key={product.id}
            product={product}
            nome={product.nome}
            price={product.price}
            new_price={product.new_price}
            model={product.model}
          />
        ))}
      </section>
    </div>
  );
};

export default ProductsListing;
