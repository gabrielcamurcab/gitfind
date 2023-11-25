import { Header } from "../../components/Header";
import background from '../../assets/background.png';

import './styles.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="conteudo">
        <img src={background} alt="logo-github" className="background"/>
        <div className="info">
          <div>
            <input name="usuario" placeholder="@username"/>
            <button>Buscar</button>  
          </div>
          <div className="perfil">
            <img className="profile_img" src="https://avatars.githubusercontent.com/u/122840209?v=4" alt="imgProfile"/>
            <div>
              <h3>Nome do usuário</h3>
              <span>@gabrielcamurcab</span>
              <p>Descrição</p>
            </div>
          </div>
          <hr />
          <div className="div_repositorios">
            <h4>Repositórios</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
