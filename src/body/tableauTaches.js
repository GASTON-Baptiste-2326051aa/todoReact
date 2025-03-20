import React, { useState, useContext } from "react";
import { TacheContext } from "../App";

function TableauTaches() {
    const {taches, setTaches} = useContext(TacheContext);
    const [expandedTache, setExpandedTache] = useState(null); // Gère quelle tâche est étendue

    const handleEtatChange = (id, newEtat) => {
        const updatedTaches = taches.map((tache) => {
            if (tache.id === id) {
                return { ...tache, etat: newEtat }; // Met à jour l'état de la tâche modifiée
            }
            return tache;
        });
        setTaches(updatedTaches); // Mets à jour l'état global avec les nouvelles tâches
    };

    // Fonction pour basculer l'affichage des informations
    const toggleDetails = (id) => {
        setExpandedTache(expandedTache === id ? null : id);
    };

    return (<div>
        <h1 className="titre-tab">Tableau des tâches</h1>
        <div className="tableau-container">

            <table className="tableau-taches">
                <thead>
                <tr>
                    <th>Titre</th>
                    <th>Etat</th>
                    <th>Deadline</th>
                </tr>
                </thead>
                <tbody>
                {taches.map((tache) => (
                    <tr key={tache.id}>
                        <td>
                                <span onClick={() => toggleDetails(tache.id)}>
                                    {tache.titre}
                                    {expandedTache === tache.id ? '▲' : '▼'} {/* Flèche */}
                                </span>
                            {expandedTache === tache.id && (
                                <div>
                                    <p>Description: {tache.description}</p>
                                    <p>Date de création: {tache.date_creation}</p>
                                    <p>Urgent: {tache.urgent ? 'Oui' : 'Non'}</p>
                                </div>
                            )}
                        </td>
                        <td>
                            <select
                                value={tache.etat}
                                onChange={(e) => handleEtatChange(tache.id, e.target.value)}
                            >
                                <option value="nouveau">Nouveau</option>
                                <option value="en attente">En attente</option>
                                <option value="réussi">Réussi</option>
                                <option value="en cours">En cours</option>
                                <option value="abandonné">Abandonné</option>

                            </select>
                        </td>
                        <td>{tache.deadline}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
        </div>
    );
}

export default TableauTaches;
