import { Link } from "react-router-dom";

const MenuNavegacao = () => {
  return (
    <div className="container-navegacao-principal">
      <nav className="navegacao-principal">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/home">
          Produtos
        </Link>
        <Link className="link" to="/categorias">
          Categorias
        </Link>
        <Link className="link" to="#">
          Meus pedidos
        </Link>
      </nav>
    </div>
  );
};

export default MenuNavegacao;
