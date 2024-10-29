import ListaProducts from "../components/ListaProducts";
import CardProducts from "../components/CardProducts";
const ProductsListing = () => {
  return (
    <div className="container-productslisting">
      <section>
        <h2>Calções</h2>
        <div className="opcoes1">
          <label for="shorts">Shorts</label>
          <input
            type="checkbox"
            name="shorts"
            id="shorts"
            placeholder="shorts"
          />
          <label for="sweaters">Sweaters</label>
          <input
            type="checkbox"
            name="sweaters"
            id="sweaters"
            placeholder="sweaters"
          />
          <label for="t-shirts">T-shirts</label>
          <input
            type="checkbox"
            name="t-shirts"
            id="t-shirts"
            placeholder="t-shirts"
          />
        </div>
        <div>
          <h2>Opções</h2>
          <label for="pants">Pants</label>
          <input type="checkbox" name="pants" id="pants" placeholder="pants" />
          <label for="jackets">Jackets</label>
          <input
            type="checkbox"
            name="jackets"
            id="jackets"
            placeholder="jackets"
          />
          <label for="accessories">Accessories</label>
          <input
            type="checkbox"
            name="accessories"
            id="accessories"
            placeholder="accessories"
          />
        </div>
        <div>
          <h2>Opções</h2>
          <label for="pants">Pants</label>
          <input type="checkbox" name="pants" id="pants" placeholder="pants" />
          <label for="jackets">Jackets</label>
          <input
            type="checkbox"
            name="jackets"
            id="jackets"
            placeholder="jackets"
          />
          <label for="accessories">Accessories</label>
          <input
            type="checkbox"
            name="accessories"
            id="accessories"
            placeholder="accessories"
          />
        </div>
      </section>
      <section className="container-listingproducts">
        {ListaProducts.map((product) => (
          <CardProducts key={product.id} product={product} />
        ))}
      </section>
    </div>
  );
};

export default ProductsListing;
