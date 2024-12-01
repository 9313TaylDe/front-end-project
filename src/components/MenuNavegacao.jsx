import { Link } from "react-router-dom";

const MenuNavegacao = () => {
  return (
    <div className="container-navegacao-principal">
      <nav className="navegacao-principal">
        <Link className="link" to="/home">
          Home
        </Link>
        <Link className="link" to="/products">
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
