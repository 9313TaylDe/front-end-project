import { createContext, useEffect, useState } from "react";

// Criando o contexto de autenticação
export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log("Verificando autenticação no localStorage...");

    const userToken = localStorage.getItem("user_token");
    const usersStorage = JSON.parse(localStorage.getItem("users"));

    if (userToken && usersStorage) {
      const { email } = JSON.parse(userToken);
      const hasUser = usersStorage.find((user) => user.email === email);

      if (hasUser) {
        console.log("Usuario encontrado e autenticado", hasUser);
        setUser(hasUser);
      }
    }
  }, []);

  const signin = (email, password) => {
    const usersStorage = JSON.parse(localStorage.getItem("users"));
    console.log("Verificando autenticação no localStorage...");

    if (!usersStorage) {
      return "Nenhum usuário cadastrado.";
    }

    const hasUser = usersStorage.find((user) => user.email === email);

    if (!hasUser) {
      return "Usuário não cadastrado.";
    }

    if (hasUser.password !== password) {
      return "E-mail ou senha incorretos.";
    }

    console.log("Autenticação bem sucedida", email);
    const token = Math.random().toString(36).substring(2);
    localStorage.setItem("user_token", JSON.stringify({ email, token }));
    setUser({ email, password });
    return null; // Indica sucesso
  };

  const signup = (email, password) => {
    if (!email.includes("@")) {
      return "E-mail inválido.";
    }

    if (password.length < 8) {
      return "A senha deve ter pelo menos 8 caracteres.";
    }

    const usersStorage = JSON.parse(localStorage.getItem("users")) || [];

    const hasUser = usersStorage.some((user) => user.email === email);

    if (hasUser) {
      return "Já existe uma conta com esse e-mail.";
    }

    const newUser = [...usersStorage, { email, password }];
    localStorage.setItem("users", JSON.stringify(newUser));

    return null; // Cadastro com sucesso
  };

  const signout = () => {
    setUser(null);

    localStorage.removeItem("user_token");
  };

  return (
    <AuthContext.Provider
      value={{ user, signed: !!user, signin, signup, signout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
