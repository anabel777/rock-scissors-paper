import '../styles/Header.css';

const Header=()=>{
    return(
        <div>
    <nav className="navbar navbar-expand-md navbar-light">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-toggler" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar-toggler">
            <a className="navbar-brand" href="./HomePage">
              <i className="bi bi-scissors"></i>
            </a>
            <ul className="navbar-nav d-flex justify-content-center aling-items-center">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#game_rules">Reglas del juego</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./MoreGames">Más juegos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./MostPopularGames">Juegos Más Populares</a>
              </li>
            </ul>
          </div>
        </div>
    </nav>
        </div>
    );
}

export default Header;