import fones from "../assets/fones2.png";
import Links from "./Links";
const CollectProducts2 = ({ disccount }) => {
  return (
    <section>
      <div className="container-collection2">
        <div className="card-1-collection2">
          <p className="card-disccount">{}% OFF</p>
          <h1 className="novo-beats">Novo Beats Bass</h1>
          <Links color="#C92071" width="100px" height="20px"></Links>
        </div>
        <img src={fones} alt="" />
      </div>
    </section>
  );
};

export default CollectProducts2;
