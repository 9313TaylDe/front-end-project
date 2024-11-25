import axios from "axios";
import React, { useState } from "react";
import "../css/Login.css"; // Importando o arquivo CSS
import loginImg from "../assets/productlogin.png"; // Imagem de login
import { Link, Navigate, useNavigate } from "react-router-dom";
import Links from "../components/Links";
import useAuth from "../hooks/useAuth";
import RouteProtected from "../components/RoutesProtected";

// Credenciais do Diretor
export const NewAccount = ({ onLoginSuccess }) => {
  const [confiEmail, setConfiEmail] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signup } = useAuth();

  const handleSignup = async (e) => {
    e.preventDefault(); // Previne o recarregamento da página
    setError(""); // Limpa mensagens de erro

    if (!email || !confiEmail || !password) {
      setError("Preencha todos os campos");
      return;
    }

    if (email !== confiEmail) {
      setError("Os e-mails não coincidem");
      return;
    }

    try {
      const res = signup(email, password); // Certifique-se de que o `signup` retorna um valor síncrono

      if (res) {
        setError(res); // Exibe o erro do `signup`
        return;
      }

      alert("Usuário cadastrado com sucesso!");
      // onLoginSuccess(true); // Indica sucesso no login
      navigate("/"); // Redireciona para a página inicial
    } catch (err) {
      // Garante que só erros inesperados entram aqui
      console.error("Erro no cadastro:", err);
      setError("Erro inesperado no cadastro. Tente novamente.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Nova conta agora</h2>
        <form onSubmit={handleSignup}>
          <input
            type="email"
            placeholder="Digite o seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
          />
          <input
            type="email"
            value={confiEmail}
            placeholder="Confirme o seu e-mail"
            className="login-input"
            onChange={(e) => setConfiEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Digite a sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
          {error && <p className="error-message">{error}</p>}
          <button type="submit" onClick={handleSignup} className="login-button">
            Registre-se
          </button>
          <Link to="/login" className="login-link">
            Já possui uma conta? Faça login aqui
          </Link>
        </form>
        <div className="imgProduct">
          <img src={loginImg} alt="Google" />
        </div>{" "}
      </div>
    </div>
  );
};

export const UserLogin = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signin } = useAuth();

  const handleLogin = async () => {
    setError("");

    if (!email || !password) {
      setError("Preencha todos os campos");
      return;
    }

    try {
      const res = await signin(email, password); // Certifique-se que `signin` retorna um `Promise`

      if (res) {
        setError(res); // Se houver erro no login
        return;
      }

      alert("Login realizado com sucesso!");
      onLoginSuccess(true); // Indica sucesso no login
    } catch (err) {
      setError("Erro inesperado ao fazer login. Tente novamente.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Acesse sua conta como usuário</h2>
        <form>
          <input
            type="email"
            placeholder="Digite o seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
          />
          <input
            type="password"
            placeholder="Digite a sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
          {error && <p className="error-message">{error}</p>}
          <button type="button" onClick={handleLogin} className="login-button">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

const LoginPage = ({ handleLoginSuccess }) => {
  const [isNew, setIsNew] = useState(false); // Estado para alternar entre Login e Cadastro

  const toggleLoginMode = () => {
    setIsNew((prev) => !prev); // Alterna entre "Login" e "Cadastro"
  };

  return (
    <div className="login-container-principal">
      <div className={`login-box-principal ${isNew ? "rotate" : ""}`}>
        {/* Botão para alternar entre Login e Cadastro */}
        <button onClick={toggleLoginMode} className="alternar-metodo-delogin">
          {isNew ? "Voltar para Login" : "Ir para Cadastro"}
        </button>

        {/* Tela de Login */}
        {!isNew && (
          <div className="login-content">
            <UserLogin onLoginSuccess={handleLoginSuccess} />
          </div>
        )}

        {/* Tela de Cadastro */}
        {isNew && (
          <div className="login-content">
            <NewAccount onLoginSuccess={handleLoginSuccess} />
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
