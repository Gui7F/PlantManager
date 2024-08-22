import { useState } from "react";
import{ Link} from "react-router-dom"

const Cadastro = () => {
  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string | number>("");
  const [confirmeSenha, setConfirmeSenha] = useState<string | number>("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nome:</label>
      <input
        type="text"
        placeholder="Digite seu nome e sobrenome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        required
        name="name"
      />

      <label>Email:</label>
      <input
        type="email"
        placeholder="Digite seu email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        name="email"
      />

      <label>Senha:</label>
      <input
        type="password"
        placeholder="Digite uma senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        required
        name="password"
      />

      <label>Confirme a senha:</label>
      <input
        type="password"
        placeholder="Confirme sua senha"
        value={confirmeSenha}
        onChange={(e) => setConfirmeSenha(e.target.value)}
        required
        name="confirmPassword"
      />
      <button><Link to={"/login"}>Cadastrar</Link></button>
    </form>
  );
};

export default Cadastro;
