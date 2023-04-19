import { Genre } from "../gamesArray/gamesArray"

interface Props{
    gameName:string,
    genre:Genre[],
    rate:number[]
}

const PopularGame=({gameName,genre,rate} :Props)=>{
    return(

            <div className='game'>
                <div className='visible_default_part'>
                    <h2 className='game-title'>{gameName}</h2>
                    <span className="badge text-bg-warning">Popular</span>
                    {genre.map(g=><>
                            <span className="badge text-bg-primary">{g}</span>
                    </>)}
                </div>
                <div className="stars">
                    <p className='stars-title'>{gameName}</p>
                    <p className='stars-text'>
                        {rate.map(()=><>
                                <i className="bi bi-star-fill"></i>
                        </>)}
                    </p>
                </div>
            </div>

    );
}

export default PopularGame;