import React, { useState, useContext } from "react";
import { TacheContext } from "../App";
import { useSortableData } from "./useSortableData";
import { ETATS, ETAT_TERMINE } from "../enum";

function TableauTaches() {
    const { taches, setTaches, allTaches, setAllTaches } = useContext(TacheContext);
    const [expandedTache, setExpandedTache] = useState(null);

    const etatOrder = {
        [ETATS.NOUVEAU]: 1,
        [ETATS.EN_ATTENTE]: 2,
        [ETATS.EN_COURS]: 3,
        [ETATS.REUSSI]: 4,
        [ETATS.ABANDONNE]: 5,
    };

    const { items: sortedTaches, requestSort, sortConfig } = useSortableData(taches, etatOrder);

    const handleEtatChange = (id, newEtat) => {
        const updatedTaches = taches.map((tache) => {
            if (tache.id === id) {
                return { ...tache, etat: newEtat };
            }
            return tache;
        });
        setTaches(updatedTaches);
        const updatedAllTaches = allTaches.map((tache) => {
            if (tache.id === id) {
                return { ...tache, etat: newEtat };
            }
            return tache;
        });
        setAllTaches(updatedAllTaches);
    };

    const toggleDetails = (id) => {
        setExpandedTache(expandedTache === id ? null : id);
    };

    return (
        <div>
            <h1 className="titre-tab">Tableau des tâches</h1>
            <div className="tableau-container">
                <table className="tableau-taches">
                    <thead>
                    <tr>
                        <th onClick={() => requestSort('titre')}>
                            Titre {sortConfig?.key === 'titre' && (sortConfig?.direction === 'asc' ? '▲' : '▼')}
                        </th>
                        <th onClick={() => requestSort('etat')}>
                            État {sortConfig?.key === 'etat' && (sortConfig?.direction === 'asc' ? '▲' : '▼')}
                        </th>
                        <th onClick={() => requestSort('deadline')}>
                            Deadline {sortConfig?.key === 'deadline' && (sortConfig?.direction === 'asc' ? '▲' : '▼')}
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {sortedTaches.map((tache) => (
                        <tr key={tache.id}>
                            <td>
                                <span
                                    className={`${ETAT_TERMINE.includes(tache.etat) ? 'tache-terminee' : ''} ${tache.urgent ? 'tache-urgente' : ''}`}
                                    onClick={() => toggleDetails(tache.id)}
                                >
                                    {tache.titre} {expandedTache === tache.id ? '▲' : '▼'}
                                </span>
                                {expandedTache === tache.id && (
                                    <div>
                                        <p>Description: {tache.description}</p>
                                        <p>Date de création: {tache.date_creation}</p>
                                        <p>Urgent: {tache.urgent ? 'Oui' : 'Non'}</p>
                                        <p>Catégorie: {tache.categorie ? tache.categorie.titre || tache.categorie : "Aucune"}</p>
                                    </div>
                                )}
                            </td>
                            <td>
                                <select
                                    value={tache.etat}
                                    onChange={(e) => handleEtatChange(tache.id, e.target.value)}
                                >
                                    <option value={ETATS.NOUVEAU}>{ETATS.NOUVEAU}</option>
                                    <option value={ETATS.EN_ATTENTE}>{ETATS.EN_ATTENTE}</option>
                                    <option value={ETATS.EN_COURS}>{ETATS.EN_COURS}</option>
                                    <option value={ETATS.REUSSI}>{ETATS.REUSSI}</option>
                                    <option value={ETATS.ABANDONNE}>{ETATS.ABANDONNE}</option>
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