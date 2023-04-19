import '../styles/StartingPage.css';
import scisors from '../imgs/2112.i518.014.F.m005.c7.realistic scissors red ribbon.jpg';

const StartingPage=()=>{
    return(
        <div id="starting_page-container" className='seccion-clara d-flex flex-column'>
            <div id='PlayButton' className='starting_page_button-container'>
                <a href='./GamePage' id="starting_page-link">
                    <button type="button" className="btn btn-outline-danger">Jugar</button>
                </a>
            </div>
            
            <div id='image'>
                <img src={scisors} alt="imagen tijeras" width='100%' height='500px' />
            </div>
            
            <div id='game_rules' className='justify-content-center aling-items-center seccion-oscura'>
                <h2>Reglas</h2>
                <h3>Objetivo</h3>

                    <p>Elegir un candidato. Seleccionar un candidato.</p>
                    <h3>Instrucciones</h3>

                    <p>
                        Los jugadores cuentan juntos «1, 2, 3…, ¡piedra, papel o tijera!»<br /><br />

                        Justo al acabar muestran todos al mismo tiempo una de sus manos, de modo que pueda verse el elemento que cada uno ha elegido:<br /><br />

                        Piedra: un puño cerrado.<br />
                        Papel: todos los dedos extendidos, con la palma de la mano de lado, mirando hacia abajo o hacia arriba<br />
                        Tijera: dedos índice y corazón extendidos y separados formando una «V».<br />
                        El objetivo es vencer al oponente seleccionando el arma que gana, según las siguientes reglas:<br /><br />

                        La piedra aplasta la tijera. (Gana la piedra.)<br />
                        La tijera corta el papel. (Gana la tijera.)<br />
                        El papel envuelve la piedra. (Gana el papel.)<br />
                        En caso de empate (que dos jugadores elijan el mismo elemento o que tres jugadores elijan cada uno un objeto distinto), se juega otra vez.
                    </p>
            </div>
            
            <div className='starting_page_button-container'>
                <a href='./GamePage' id="starting_page-link">
                    <button type="button" className="btn btn-outline-danger">Jugar</button>
                </a>
            </div>
        </div>
    );
}

export default StartingPage;