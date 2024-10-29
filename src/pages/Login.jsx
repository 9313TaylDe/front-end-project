import { useRef, useState } from "react";
const Login = () => {
  //   const [nome, setNome] = useState("");
  const nome = useRef("");
  const email = useRef("");
  const password = useRef("");

  console.log("re-renderizou");

  return (
    <>
      {/* utilizadno o useState
      <input
        type="text"
        placeholder="digite"
        onChange={(e) => setNome(e.target.value)}
      />
      <button>click</button>
      <h1>{nome}</h1> */}

      {/* <input
        type="text"
        placeholder="digite"
        onChange={(e) => (nome.current = e.target.value)}
      /> */}
      <input type="text" placeholder="Digite o seu nome" ref={nome} />
      <input type="email" placeholder="Digite o sue email" ref={email} />
      <input type="password" placeholder="Digite a sua senha" ref={password} />
      {nome != "" || nome.trim() != null(<p>Por favor, preencha o nome</p>)}

      {password.current.length >= 8 &&
        password.current.length <=
          16(<p>A senha precisa ter entre 8 e 16 caracteres</p>)}
      {email.current.includes("@") &&
        email.current.includes(".")(<p>Email válido</p>)}
      <button
        onClick={() =>
          console.log(
            nome.current.value,
            password.current.value,
            email.current.value
          )
        }
      >
        click
      </button>
    </>
  );
};

export default Login;
