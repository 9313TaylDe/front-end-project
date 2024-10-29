import eclipseproduct from "../assets/eclipseprodut.png";
import teniseclipse from "../assets/productcircle.png";
import Links from "./Links";

const ProductCirlce = () => {
  return (
    <section className="container-jordan">
      <div className="card-img-jordan">
        <img className="circletenisjordan" src={eclipseproduct} alt="" />
        <img className="imgjordan" src={teniseclipse} alt="" />
      </div>
      <div className="card-p-jordan">
        <Links
          border="none"
          border_b="none"
          backgroundColor="transparent"
          backgroundColor_hover="transparent"
          color="#c72091"
          color_hover="#c72091"
          font="10px"
          width="max-content"
          fontWeight="bold"
        >
          Oferta especial
        </Links>
        <h1>Air Jordan edição de colecionador</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip
        </p>
        <Links
          color_hover="#c72091"
          width="65%"
          font="12px"
          padding="2px"
          backgroundColor_hover="#ffff"
          backgroundColor="#c72091"
          color="#ffff"
        >
          Ver oferta
        </Links>
      </div>
    </section>
  );
};

export default ProductCirlce;
