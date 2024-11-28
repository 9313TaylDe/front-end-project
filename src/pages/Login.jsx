import axios from "axios";
import React, { useState } from "react";
import "../css/Login.css"; // Importando o arquivo CSS
import loginImg from "../assets/productlogin.png"; // Imagem de login
import { Link, Navigate, useNavigate } from "react-router-dom";
import Links from "../components/Links";
import useAuth from "../hooks/useAuth";
import RouteProtected from "../components/RoutesProtected";

// Credenciais do Diretor
export const NewAccount = ({ toggleLoginMode }) => {
  const [confiEmail, setConfiEmail] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signup } = useAuth();

  const handleSignup = async (e) => {
    e.preventDefault();
    const res = await signup(email, password); // Chama signup do contexto
    if (res) {
      setError(res); // Exibe erro
      return;
    }
    alert("Cadastro realizado com sucesso!");
    toggleLoginMode();
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
          <button type="submit" className="login-button">
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

export const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signin } = useAuth();

  const handleLogin = async () => {
    const res = await signin(email, password); // Chama signin do contexto
    if (res) {
      setError(res); // Exibe erro
      return;
    }
    navigate("/home");
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

  const navigate = useNavigate();
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
            <UserLogin />
          </div>
        )}

        {/* Tela de Cadastro */}
        {isNew && (
          <div className="login-content">
            <NewAccount toggleLoginMode={toggleLoginMode} />
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
