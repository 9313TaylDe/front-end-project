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
        <a href="#">Oferta especial</a>
        <h1>Air Jordan edição de colecionador</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip
        </p>
        <button className="button_oferta2">Ver oferta</button>
      </div>
    </section>
  );
};

export default ProductCirlce;
