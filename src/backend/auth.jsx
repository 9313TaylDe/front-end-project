import { createContext, useEffect, useState } from "react";
import "./db.json";
export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  useEffect(() => {
    const userToken = localStorage.getItem("user_token");
    const usersStorage = JSON.parse(localStorage.getItem("./db.json"));

    if (userToken && usersStorage) {
      const { email } = JSON.parse(userToken);

      const hasUser = usersStorage.find((user) => user.email === email);

      if (hasUser) setUser(hasUser);
    }
  }, []);

  const signin = (email, password) => {
    const usersStorage = JSON.parse(localStorage.getItem("./db.json"));

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

    const token = Math.random().toString(36).substring(2);
    localStorage.setItem("user_token", JSON.stringify({ email, token }));
    setUser({ email, password });

    return null; // Indica sucesso
  };

  // const signup = (email, password) => {
  //   if (!email.includes("@")) {
  //     return "E-mail inválido.";
  //   }

  //   if (password.length < 8) {
  //     return "A senha deve ter pelo menos 8 caracteres.";
  //   }

  //   const usersStorage = JSON.parse(localStorage.getItem("./db.json"));

  //   const hasUser = usersStorage?.filter((user) => user.email === email);

  //   if (hasUser?.length) {
  //     return "Já existe uma conta com esse e-mail.";
  //   }

  //   const newUser = usersStorage
  //     ? [...usersStorage, { email, password }]
  //     : [{ email, password }];

  //   localStorage.setItem("./db.json", JSON.stringify(newUser));

  //   return null; // Indica sucesso
  // };

  const signup = (email, password) => {
    // Validação básica
    if (!email.includes("@")) {
      return "E-mail inválido.";
    }

    if (password.length < 8) {
      return "A senha deve ter pelo menos 8 caracteres.";
    }

    // Recupera usuários existentes
    const usersStorage = JSON.parse(localStorage.getItem("./db.json")) || [];

    // Verifica se já existe o usuário
    const hasUser = usersStorage.some((user) => user.email === email);

    if (hasUser) {
      return "Já existe uma conta com esse e-mail.";
    }

    // Adiciona novo usuário
    const newUser = [...usersStorage, { email, password }];
    localStorage.setItem("./db.json", JSON.stringify(newUser));

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
