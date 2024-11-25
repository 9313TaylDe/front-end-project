import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RouteProtected = ({ children }) => {
  const navigate = useNavigate(); // Função para redirecionar
  const { signed } = useAuth(); // Obtem o estado de autenticação do usuário

  if (!signed) {
    navigate("/login", { replace: true });
    return null;
  }

  return children;
};

export default RouteProtected;
