import { useAuth } from "./AuthProvider";
import { Navigate } from "react-router-dom";
const RouteProtected = ({ element }) => {
  const authContext = useAuth();
  const authentication = authContext?.authentication;
  if (authentication) {
    return element;
  } else {
    return <Navigate to="/not-found" />;
  }
};

export default RouteProtected;
