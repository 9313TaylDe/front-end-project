import { Link } from "react-router-dom";
import logo from "../assets/LogoFooter.png";
import facebook from "../assets/facebook.png";
import "../Home.css";
import "../Footer.css";

const Footer = (informacoes, redesSociais, endereco) => {
  const InformacoesFooter = {
    informacoes: [
      { titulo: "Informação" },
      { about: "Sobre Drip Store", Link: "#" },
      { about: "Segurança", link: "#" },
      { about: "Wishlist", link: "#" },
      { about: "Blog", link: "#" },
      { about: "Trabalhe conosco", link: "#" },
      { about: "Meus pedidos", link: "#" },
    ],
    categorias: [
      { tituloSociais: "Categorias" },
      { sociais: "Camisetas", icone: "camisetas", link: "#" },
      { sociais: "Calças", icone: "calcas", link: "#" },
      { sociais: "Bonés", icone: "bonés", link: "#" },
      { sociais: "Headphones", icone: "headphones", link: "#" },
      { sociais: "Tênis", icone: "tênis", link: "#" },
    ],
    enderecos: [
      { titulo: "Contato" },
      {
        tituloEnderecos: [
          "Av. Santos Dumont, 1510 - 1",
          <br />,
          "andar - Aldeota, Fortaleza - ",
          <br />,
          "CE, 60150-161",
        ],
      },
      { telefone: "(88) 999313-9090" },
    ],
  };
  return (
    <footer>
      <section className="left-side-footer">
        <div className="left-side-footer-inside">
          <span className="logo-footer">
            <img src={logo} alt="" />
            <p className="digital-titulo-footer">Digital Store</p>
          </span>
          <p className="paragrafo">
            Lorem ipsum dolor sit amet, consectetur
            <br />
            adipiscing elit, sed do eiusmod tempor <br />
            incididunt ut labore et dolore.
          </p>
        </div>
        <div className="container-redes-sociais">
          <Link to="" className="pi pi-facebook"></Link>
          <Link to="" className="pi pi-instagram"></Link>
          <Link to="" className="pi pi-twitter"></Link>
        </div>
      </section>
      <section className="right-side-footer">
        <div className="footer-infos">
          {InformacoesFooter.informacoes.map((abouts) => {
            return (
              <div className="infoss">
                <h3 className="titulo-infos">{abouts.titulo}</h3>
                <p className="links-sociais" key={abouts.link} to={abouts.link}>
                  <a href="#"> {abouts.about}</a>{" "}
                </p>
              </div>
            );
          })}
        </div>

        <div className="footer-sociais">
          {InformacoesFooter.categorias.map((categorys) => {
            return (
              <div className="">
                <h3>{categorys.tituloSociais}</h3>
                <p className="links-sociais" to="">
                  <a href="#">{categorys.sociais}</a>
                </p>
              </div>
            );
          })}
        </div>
        <div className="footer-adress">
          {InformacoesFooter.enderecos.map((adresses) => {
            return (
              <div className="adress">
                <h3>{adresses.titulo}</h3>
                <p> {adresses.tituloEnderecos}</p>
                <p className="links-sociais" to="#">
                  {" "}
                  <a href="#"> {adresses.telefone}</a>{" "}
                </p>
              </div>
            );
          })}
        </div>
      </section>
      <div className="container-rodape">
        <hr />
        <p className="rodape"> &#64; 2024 Digital College</p>
      </div>
    </footer>
  );
};

export default Footer;
