import '../styles/Footer.css';

const Footer=()=>{
    return(
        <div id="footer-container" className='seccion-oscura d-flex'>
            <ul className='unorderedList d-flex'>
                <li><a href='./MoreGames'>Mas Juegos</a></li>
                <li><a href='./MostPopularGames'>Juegos más populares</a></li>
                <li><a href='#PlayButton'>Jugar</a></li>
                <li><a href='#game_rules'>Reglas</a></li>
            </ul>
        </div>
    );
}
export default Footer;