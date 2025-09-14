import React from "react";
import "./App.css";

// Valores dados pela proposta da AS
const VALID_EMAIL = "allan.barcellos@pucpr.br";
const VALID_SENHA  = "123456";

// Componete feito por classe
export default class LoginClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: VALID_EMAIL,
      senha: VALID_SENHA,
      mensagem: "",
      ok: null,
    };

    // bind dos handlers - para juntar o "this" com as funções
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmail  = this.handleEmail.bind(this);
    this.handleSenha  = this.handleSenha.bind(this);
  }

  handleEmail(e) { this.setState({ email: e.target.value }); }
  handleSenha(e) { this.setState({ senha: e.target.value }); }

  handleSubmit(e) {
    e.preventDefault();
    const sucesso = this.state.email === VALID_EMAIL && this.state.senha === VALID_SENHA;
    this.setState({
      ok: sucesso,
      mensagem: sucesso ? "Acessado com sucesso!" : "Usuário ou senha incorretos!",
    });
  }

  // Método Render - onde contém o JSX ("html + JS") para um display na página - renderização fica em app.js
  render() {
    const { email, senha, mensagem, ok } = this.state;

    return (
      <div className="login-container">
        <h1>Login</h1>

        {/* Formulário com os inputs controlados e o submit */}
        <form onSubmit={this.handleSubmit} className="login-form">
          <input
            type="email"
            placeholder="e-mail"
            value={email}
            onChange={this.handleEmail}
          />

          <input
            type="password"
            placeholder="senha"
            value={senha}
            onChange={this.handleSenha}
          />

          <div className="login-actions">
            <button type="submit">Acessar</button>
          </div>
        </form>

        {/* Mensagem de feedback somente após tentativa de login dando certo ou não */}
        {ok !== null && (
          <label className={ok ? "sucesso" : "erro"}>{mensagem}</label>
        )}
      </div>
    );
  }
}
