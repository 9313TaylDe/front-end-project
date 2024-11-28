import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RouteProtected = ({ children }) => {
  const Navigate = useNavigate();
  const { signed } = useAuth();
  console.log("Estado de autenticação no RouteProtected:", signed);

  if (!signed) {
    console.log("Acesso negado. Redirecionando para login.");
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default RouteProtected;
