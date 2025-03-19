import React, { useState, useEffect } from "react";
import data from './../taches.json'; // ton fichier JSON

function TableauTaches() {
    const [taches, setTaches] = useState([]);
    const [expandedTache, setExpandedTache] = useState(null); // Gère quelle tâche est étendue

    useEffect(() => {
        if (Array.isArray(data.taches)) {
            setTaches(data.taches); // Accède au tableau "taches" dans l'objet JSON
        } else {
            console.error("Les données de tâches ne sont pas un tableau.", data.taches);
        }
    }, []);

    // Fonction pour changer l'état de la tâche
    const handleEtatChange = (id, newEtat) => {
        const updatedTaches = taches.map((tache) => {
            if (tache.id === id) {
                return { ...tache, etat: newEtat };
            }
            return tache;
        });
        setTaches(updatedTaches);
        // Ici tu peux mettre à jour ton fichier JSON si nécessaire
    };

    // Fonction pour basculer l'affichage des informations
    const toggleDetails = (id) => {
        setExpandedTache(expandedTache === id ? null : id);
    };

    return (
        <div>
            <h1>Tableau des tâches</h1>
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
                                <span
                                    onClick={() => toggleDetails(tache.id)}
                                >
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
                                <option value="Nouveau">Nouveau</option>
                                <option value="En attente">En attente</option>
                                <option value="Reussi">Réussi</option>
                                <option value="En cours">En cours</option>
                            </select>
                        </td>
                        <td>{tache.deadline}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default TableauTaches;
