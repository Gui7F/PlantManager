import {Link} from "react-router-dom"
const Home = () => {
    return (
      <div>
        <h1>Faça gestão das suas plantações de frutas com <span>PlantManager</span></h1>
        <p>
          Plante e gerencie todos os processos de cultivo, atraves da nossa plataforma é possivel
          gerenciar cada plantação de forma eficiênte e rápida, você pode gerir desde da germinação até
          a colheita.
        </p>
        <button><Link to={''}>Começar a Gestão</Link></button>
      </div>
    );
  }
  
  export default Home;