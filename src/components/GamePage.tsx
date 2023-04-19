import { useState } from "react";
import '../styles/GamePage.css';

const GamePage=()=>{

    let [won,setWon]=useState('');


    const choiseClick=(x:number)=>{
        let pc_choise=Math.floor(Math.random()*(3+1-1));
        /* Eleccion usuario */
        if(x==1){
            console.log("Has elejido piedra");
        }else if(x==2){
            console.log("Has elejido papel");
        }else{
            console.log("Has elejido tijeras");
        }
        /* Eleccion pc */
        if(pc_choise==1){
            console.log("El pc ha elegido piedra");
            <p>Has ganado</p>
        }else if(pc_choise==2){
            console.log("El pc ha elegido papel");
        }else{
            console.log("El pc ha elegido tijeras");
        }
        /* Resultado partida */
        if(x==pc_choise){
            console.log("Has empatado");
            setWon("Has empatado");
        }else if(x==1 && pc_choise==3){
            console.log("Has ganado");
            setWon("Has ganado");
        }else if(x==2 && pc_choise==1){
            console.log("Has ganado");
            setWon("Has ganado");
        }else if(x==3 && pc_choise==2){
            console.log("Has ganado");
            setWon("Has ganado");
        }else{
            console.log("Has perdido");
            setWon("Has perdido");
        }
    }
    return(
<>
        <div className="options-container d-flex justify-content-center aling-items-center">
            <button type="button" className="btn btn-outline-danger" onClick={()=>choiseClick(1)}>Piedras</button>
            <button type="button" className="btn btn-outline-danger" onClick={()=>choiseClick(2)}>Papel</button>
            <button type="button" className="btn btn-outline-danger" onClick={()=>choiseClick(3)}>Tijeras</button>
        </div>

        <div className="result-container d-flex justify-content-center aling-items-center">
            <p className={won=='Has ganado' ? 'green' :'red'}>{won}</p>
        </div>
</>
    );
}

export default GamePage;