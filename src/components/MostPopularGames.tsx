import '../styles/MostPopularGames.css';
import gamesArray from '../gamesArray/gamesArray';
import { useState } from 'react';
import PopularGame from './PopularGame';

const MostPopularGames=()=>{
let [popularArray, setPopularArray]=useState<Array<Object>>([]);
/*
    const isPopular=()=>{
        let [popularArray, setPopularArray]=useState([]);
        for(let i=0;i<gamesArray.length;i++){
            if(gamesArray[i].popular==true){
                let newPopularArray=[popularArray,...gamesArray[i]];
                setPopularArray(newPopularArray);
            }
        }
    }*/
    const popular=()=>{
        let newPopularArray=gamesArray.filter(game=>game.popular==true);
        setPopularArray(newPopularArray);
        return popularArray;
    }
    return(
        <>
            <div className='games-container'>
                {gamesArray.filter(game=>game.popular==true).map(game=>
                    <>
                        <PopularGame gameName={game.name} genre={game.genre} rate={game.rate} />
                    </>
                )}
            </div>

            <div className='see_more_games-container'>
                <p>Puedes ver más juegos <a href="./MoreGames">aquí</a></p>
            </div>
        </>
    );
}

export default MostPopularGames;