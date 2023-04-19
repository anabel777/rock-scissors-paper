import '../styles/MoreGames.css';
import gamesArray from '../gamesArray/gamesArray';
import Game from './Game';
import PopularGame from './PopularGame';

const MoreGames=()=>{

    return(
        <div className='all-games-container'>
            <div  className='games-container'>
            {gamesArray.filter(game=>game.popular==true).map(game=>
                <>
                    <PopularGame gameName={game.name} genre={game.genre} rate={game.rate} />
                </>
            )}
                {gamesArray.filter(game=>game.popular==false).map(game=>
                                <>
                                    <Game gameName={game.name} genre={game.genre} rate={game.rate} />
                                </>
                )}
            </div>
        </div>
    );
}

export default MoreGames;