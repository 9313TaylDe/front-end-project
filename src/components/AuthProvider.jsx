import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");

  useEffect(() => {
    const userToken = localStorage.getItem("user_token");
    const userStorage = localStorage.getItem("user_db");

    if (userToken && userStorage) {
      const hasUser = JSON.parse(userStorage)?.filter(
        (user) => user.email === JSON.parse(userToken).email
      );
      if (hasUser) setUser(hasUser[0]);
    }
  }, []);

  const Singin = (email, password) => {
    const userStorage = JSON.parse(localStorage.getItem("user_db"));
    const hasUser = localStorage?.filter((user) => user.email === email);

    if (hasUser?.lenght) {
      if (hasUser[0].email === email && hasUser[0].password === password) {
        const token = Math.random().toString(36).substring(2);
        localStorage.setItem("user_token", JSON.stringify({ email, token }));
        setUser({ email, password });
        return;
      } else {
        return "E-mail ou senha incorretos";
      }
    } else {
      return "Usuário não encontrado";
    }
  };

  const Singup = (email, password) => {
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [nome, setNome] = useState("");
    const userStorage = JSON.parse(localStorage.getItem("user-db"));
    const hasUser = userStorage?.filter((user) => user.email === email);

    if (hasUser?.length) {
      return "Já há uma conta cadastrada com este e-mail";
    }
    let newUser;

    if (userStorage) {
      newUser = [...userStorage, { email, password }];
    } else {
      newUser = [{ email, password, nome }];
    }
    localStorage.setItem("user-db", JSON.stringify(newUser));
    return;
  };

  const Singout = () => {
    setUser(null);
    localStorage.removeItem("user_token");
  };
  return (
    <AuthContext.Provider value={{ user, singed: Singin, Singout, Singup }}>
      {children}
    </AuthContext.Provider>
  );
};
export default useAuth;
