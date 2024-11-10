import { Link } from "react-router-dom";

const MenuNavegacao = () => {
  return (
    <div className="container-navegacao-principal">
      <nav className="navegacao-principal">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/produtos">
          Produtos
        </Link>
        <Link className="link" to="/categorias">
          Categorias
        </Link>
        <Link className="link" to="/meus-pedidos">
          Meus pedidos
        </Link>
      </nav>
    </div>
  );
};

export default MenuNavegacao;
