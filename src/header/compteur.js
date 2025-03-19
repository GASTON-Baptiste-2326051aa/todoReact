import React from "react";
import data from './../taches.json'; // ton fichier JSON


function Compteur(){
    let compteur = 0;
    if (Array.isArray(data.taches)) {
        compteur = data.taches.length;
    }
    return (
        <div>
            <h1>
                {compteur}
            </h1>
        </div>
    )
}


export default Compteur;