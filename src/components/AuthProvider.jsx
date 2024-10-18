import { useContext, useState, createContext } from "react";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [authentication, setAuthentication] = useState(false);
  const Login = () => {
    setAuthentication(true);
  };

  const Logout = () => {
    setAuthentication(false);
  };
  return (
    <AuthContext.Provider value={{ authentication, Login, Logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
