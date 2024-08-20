import { useState } from "react";
import{ Link} from "react-router-dom"

const Cadastro = () => {
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string | number>("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      
      <label>Email:</label>
      <input
        type="email"
        placeholder="Digite seu email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label>Senha:</label>
      <input
        type="password"
        placeholder="Digite uma senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        required
      />
      <button><Link to={"/dashbord"}>Cadastrar</Link></button>
    </form>
  );
};

export default Cadastro;
