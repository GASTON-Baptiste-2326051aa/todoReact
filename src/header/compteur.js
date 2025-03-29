import React, { useContext } from "react";
import { TacheContext } from "../App";
import { ETAT_TERMINE } from "../enum";

function Compteur() {
    const { taches } = useContext(TacheContext);
    const totalTaches = taches.length;
    const nonFinies = taches.filter(tache => !ETAT_TERMINE.includes(tache.etat)).length;

    return (
        <div className="compteur">
            <h1>Total : {totalTaches}</h1>
            <h2>Non finies : {nonFinies} </h2>
        </div>
    );
}

export default Compteur;
