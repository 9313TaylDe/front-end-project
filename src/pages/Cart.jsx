import { useContext, useState } from "react";
import { CartContext } from "../components/CartProvider";
import CardProducts from "../components/ProductCards";
import "primeflex/primeflex.css";
import "../css/Cart.css";
import { useNavigate, useLocation } from "react-router-dom";

export const PayConclued = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [endereco, setEndereco] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [cep, setCEP] = useState("");
  const [telefone, setTelefone] = useState("");
  const [numberCard, setNumberCard] = useState("");
  const [nomeCard, setNomeCard] = useState("");
  const [validadeCard, setValidadeCard] = useState("");
  const [cvv, setCvv] = useState("");
  const [credito, setCredito] = useState("");
  const [debito, setDebito] = useState("");
  const { cart } = useContext(CartContext);

  const navigate = useNavigate();

  const calculateTotal = () => {
    const total = cart.reduce((sum, product) => {
      const productPrice = product.price || product.new_price || 0;
      return sum + parseFloat(productPrice);
    }, 0);
    return total.toFixed(2);
  };

  const handlePurchase = () => {
    if (cart.length === 0) {
      alert("Adicione produtos ao carrinho antes de finalizar a compra.");
      return;
    }

    const purchaseDetails = {
      nome,
      email,
      endereco,
      bairro,
      cidade,
      estado,
      cep,
      telefone,
      numberCard,
      nomeCard,
      validadeCard,
      cvv,
      produtos: cart.map((produto) => ({
        nome: produto.nome,
        preco: produto.price || produto.new_price || 0,
      })),
      total: calculateTotal(),
    };

    navigate("/congratulations-to-pay", { state: { purchaseDetails } });
  };

  return (
    <div className="pay-conclued-container">
      <form>
        <h1>Finalizar Compra</h1>
        <div className="container-informacoes-pessoais">
          <form className="form-informacoes-pessoais">
            <h2>Informações Pessoais</h2>
            <input
              type="text"
              placeholder="Nome completo"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="login-input"
            />
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="login-input"
            />
            <input
              type="text"
              placeholder="Telefone"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              className="login-input"
            />
          </form>

          <form className="form-endereco-entrega">
            <h2>Endereço de Entrega</h2>
            <input
              type="text"
              placeholder="Endereço"
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
              className="login-input"
            />
            <input
              type="text"
              placeholder="Bairro"
              value={bairro}
              onChange={(e) => setBairro(e.target.value)}
              className="login-input"
            />
            <input
              type="text"
              placeholder="Cidade"
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
              className="login-input"
            />
            <input
              type="text"
              placeholder="Estado"
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
              className="login-input"
            />
            <input
              type="text"
              placeholder="CEP"
              value={cep}
              onChange={(e) => setCEP(e.target.value)}
              className="login-input"
            />
          </form>
          <form className="form-pagamentos">
            <h2>Informações para pagamentos</h2>
            <div className="form-cartao">
              <input
                type="checkbox"
                value={credito}
                id="credito"
                onChange={(e) => setCredito(e.target.value)}
                className="card"
              />
              <label for="credito">Crédito</label>
            </div>
            <div className="form-cartao">
              {" "}
              <input
                type="checkbox"
                id="debito"
                value={debito}
                onChange={(e) => setDebito(e.target.value)}
                className="cartao"
              />
              <label for="debito">Débito</label>
            </div>
            <input
              type="text"
              placeholder="Bairro"
              value={numberCard}
              onChange={(e) => setNumberCard(e.target.value)}
              className="login-input"
            />
            <input
              type="text"
              placeholder="Cidade"
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
              className="login-input"
            />
            <input
              type="text"
              placeholder="Estado"
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
              className="login-input"
            />
            <input
              type="text"
              placeholder="CEP"
              value={cep}
              onChange={(e) => setCEP(e.target.value)}
              className="login-input"
            />
          </form>
        </div>
        <button type="button" onClick={handlePurchase} className="btn-submit">
          Finalizar Compra
        </button>
      </form>
      <div className="container-resumo">
        <h2>Resumo da Compra</h2>
        <ul>
          {cart.map((product, index) => (
            <li key={index}>
              {product.model} {product.nome} - R$
              {product.price || product.new_price || 0}
            </li>
          ))}
        </ul>
        <h3>Total: R${calculateTotal()}</h3>
      </div>
    </div>
  );
};

export const CongratulationsToPay = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { purchaseDetails } = location.state || {};

  if (!purchaseDetails) {
    return (
      <div>
        <h2>Nenhuma compra encontrada</h2>
        <button onClick={() => navigate("/")}>Voltar para a loja</button>
      </div>
    );
  }

  const {
    nome,
    email,
    endereco,
    bairro,
    cidade,
    estado,
    cep,
    telefone,
    produtos,
    total,
  } = purchaseDetails;

  return (
    <div className="congratulations-container">
      <h1>Compra Concluída com Sucesso!</h1>
      <p>Obrigado pela sua compra, {nome}!</p>
      <h3>Comprovante de Compra</h3>
      <div>
        <h4>Dados Pessoais:</h4>
        <p>Nome: {nome}</p>
        <p>E-mail: {email}</p>
        <p>Telefone: {telefone}</p>
      </div>
      <div>
        <h4>Endereço de Entrega:</h4>
        <p>
          {endereco}, {bairro}, {cidade}, {estado}, CEP: {cep}
        </p>
      </div>
      <div>
        <h4>Produtos:</h4>
        <ul>
          {produtos.map((produto, index) => (
            <li key={index}>
              {produto.nome} - R${produto.preco}
            </li>
          ))}
        </ul>
        <h3>Total Pago: R${total}</h3>
      </div>

      <button onClick={() => navigate("/")}>Voltar para a loja</button>
    </div>
  );
};

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const calculateTotal = () => {
    const total = cart.reduce((sum, product) => {
      const productPrice = product.price || product.new_price || 0;
      return sum + parseFloat(productPrice);
    }, 0);
    return total.toFixed(2);
  };

  return (
    <div className="containerpai-cart">
      <div className="cart-container">
        {/* <h3>Total: R${calculateTotal()}</h3> */}
        {cart.length === 0 ? (
          <p>Adicione produtos</p>
        ) : (
          <div className="card-carts">
            <PayConclued />
            {cart.map((product) => (
              <CardProducts
                key={product.id}
                id={product.id}
                image={product.image}
                model={product.model}
                nome={product.nome}
                price={product.price}
                new_price={product.new_price}
                removeFromCart={removeFromCart}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
