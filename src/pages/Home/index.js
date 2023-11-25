import { useState } from "react";
import { Header } from "../../components/Header";
import background from '../../assets/background.png';
import ItemList from "../../components/ItemList";

import './styles.css';

function App() {

  const [user, setUser] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [repos, setRepos] = useState(null);

  const handleGetData = async () => {
    const userData = await fetch(`https://api.github.com/users/${user}`);
    const newUser = await userData.json();

    if (newUser.name) {
      const { name, avatar_url, bio, login } = newUser;
      setCurrentUser({ name, avatar_url, bio, login });

      const reposData = await fetch(`https://api.github.com/users/${user}/repos`);
      const newRepos = await reposData.json();

      if (newRepos.length) {
        setRepos(newRepos);
      }
    }
  }

  return (
    <div className="App">
      <Header />
      <div className="conteudo">
        <img src={background} alt="logo-github" className="background" />
        <div className="info">
          <div>
            <input
              name="usuario"
              value={user}
              onChange={event => setUser(event.target.value)}
              placeholder="@username"
            />
            <button onClick={handleGetData}>Buscar</button>
          </div>
          {currentUser?.name ? (
            <>
              <div className="perfil">
                <img className="profile_img" src={currentUser.avatar_url} alt="imgProfile" />
                <div>
                  <h3>{currentUser.name}</h3>
                  <span>@{currentUser.login}</span>
                  <p>{currentUser.bio}</p>
                </div>
              </div>
              <hr />
            </>
          ) : null
          }

          {
            repos?.length ? (
              <div className="div_repositorios">
                <h4>Repositórios</h4>
                {repos.map(repo => (
                  <ItemList title={repo.name} description={repo.description} url={repo.svn_url} />
                ))}

              </div>
            ) : null
          }
        </div>
      </div>
    </div>
  );
}

export default App;
