import teis from "../assets/tenis.png";
import headphones from "../assets/fones.png";
import calca from "../assets/calca.png";
import camisa from "../assets/camiseta.png";

const CollectionProducts = ({ image, title }) => {
  return (
    <section className="container-collections">
      <h2>Coleções em destaques</h2>
      <div className="card-camisas">
        <div className="camisas-title">
          <img src={camisa} alt="ícone camiseta" />
        </div>
        <h3>Camisas</h3>
      </div>
      <div className="card-calcas">
        <div className="calcas-title">
          <img src={calca} alt="ícone calça" />
        </div>
        <h3>Calças</h3>
      </div>
      <div className="card-calcas">
        <div className="calcas-title">
          <img src={calca} alt="ícone calça" />
        </div>
        <h3>Calças</h3>
      </div>

      <div className="card-fones">
        <div className="fones-title">
          <img src={headphones} alt="ícone headphones" />
        </div>
        <h3>Fones</h3>
      </div>
      <div className="card-tenis">
        <div className="tenis-title">
          <img src={teis} alt="ícone tênis" />
        </div>
        <h3>Tênis</h3>
      </div>
    </section>
  );
};

export default CollectionProducts;
