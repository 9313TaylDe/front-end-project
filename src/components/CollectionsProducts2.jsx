import fones from "../assets/fones2.png";
import camisas from "../assets/camisas.png";
import tenis from "../assets/bone.png";
import Links from "./Links";
const CollectProducts2 = ({ disccount }) => {
  return (
    <section className="containerpai-colllection2">
      <h2 className="colecoes_collection2">Coleções em destaque</h2>
      <div className="container-collection2">
        <div className="card-1-collection2">
          <p className="card-disccount2">{}% OFF</p>
          <h2 className="novo-beats">
            Novo Drop
            <br />
            Supreme
          </h2>

          <button className="button">Ver oferta</button>
        </div>
        <img className="img1-container2" src={camisas} alt="" />
      </div>
      <div className="container-collection2">
        <div className="card-1-collection2">
          <p className="card-disccount2">{}% OFF</p>
          <h2 className="novo-beats2">
            Coleção
            <br />
            Adidas
          </h2>
          <button className="button">Ver oferta</button>
        </div>

        <img className="img2-container2" src={fones} alt="" />
      </div>
      <div className="container-collection2">
        <div className="card-1-collection2">
          <p className="card-disccount2">{}% OFF</p>
          <h2 className="novo-beats3">
            Novo <br />
            Beats Bass
          </h2>

          <button className="button">Ver oferta</button>
        </div>
        <img className="img3-container2" src={tenis} alt="" />
      </div>
    </section>
  );
};

export default CollectProducts2;
