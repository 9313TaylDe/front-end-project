import { Link } from "react-router-dom";

const UnauthorizedPage = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Acesso Negado</h1>
      <p>Você não tem permissão para acessar esta página.</p>
      <Link to="/" style={{ textDecoration: "none", color: "#007bff" }}>
        Voltar para a Página Inicial
      </Link>
    </div>
  );
};

export default UnauthorizedPage;
