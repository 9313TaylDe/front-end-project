import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
const RouteProtected = ({ children }) => {
  const Navigate = useNavigate();
  const { signed, loading } = useAuth(); // Adicione `loading` ao hook de autenticação

  if (loading) {
    return <p>Carregando...</p>; // Exiba algo enquanto valida a autenticação
  }

  if (!signed) {
    console.log("Acesso negado. Redirecionando para login.");
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default RouteProtected;
