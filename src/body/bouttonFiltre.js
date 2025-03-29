import React, { useState, useContext } from "react";
import { CategorieContext, TacheContext } from "../App";
import { ETATS } from "../enum";

function BouttonFiltre() {
    const { categories } = useContext(CategorieContext);
    const { setTaches, allTaches } = useContext(TacheContext);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [urgentOnly, setUrgentOnly] = useState(false);
    const [selectedEtats, setSelectedEtats] = useState([]);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    const handleCategoryChange = (event) => {
        const value = event.target.value;
        setSelectedCategories((prev) =>
            prev.includes(value)
                ? prev.filter((cat) => cat !== value)
                : [...prev, value]
        );
    };

    const handleEtatChange = (event) => {
        const value = event.target.value;
        setSelectedEtats((prev) =>
            prev.includes(value)
                ? prev.filter((etat) => etat !== value)
                : [...prev, value]
        );
    };

    const handleFilter = () => {
        const filtered = allTaches.filter((tache) => {
            const taskCategorie = tache.categorie ? String(tache.categorie) : "aucune";
            const matchCategorie = selectedCategories.length === 0 || selectedCategories.includes(taskCategorie);
            const taskEtat = tache.etat;
            const matchEtat = selectedEtats.length === 0 || selectedEtats.includes(taskEtat);
            const matchUrgent = !urgentOnly || tache.urgent;

            return matchCategorie && matchEtat && matchUrgent;
        });
        setTaches(filtered);
        togglePopup();
    };

    const handleReset = () => {
        setTaches(allTaches);
        setSelectedCategories([]);
        setUrgentOnly(false);
        setSelectedEtats([]);
    };

    return (
        <div>
            <button className="filtrer-btn" onClick={togglePopup}>Filtrer</button>
            {isOpen && (
                <div className="popup-filtre">
                    <h2>Filtrer les tâches</h2>

                    <label>
                        <input
                            type="checkbox"
                            checked={urgentOnly}
                            onChange={() => setUrgentOnly(!urgentOnly)}
                        />
                        Urgent seulement
                    </label>

                    <h3>Catégories</h3>
                    {categories.length > 0 ? (
                        categories.map((cat) => (
                            <label key={cat.id}>
                                <input
                                    type="checkbox"
                                    value={String(cat.id)}
                                    onChange={handleCategoryChange}
                                    checked={selectedCategories.includes(String(cat.id))}
                                />
                                {cat.titre}
                            </label>
                        ))
                    ) : (
                        <p>Aucune catégorie disponible</p>
                    )}

                    <h3>État</h3>
                    {Object.values(ETATS).map((etat) => (
                        <label key={etat}>
                            <input
                                type="checkbox"
                                value={etat}
                                onChange={handleEtatChange}
                                checked={selectedEtats.includes(etat)}
                            />
                            {etat}
                        </label>
                    ))}

                    <button onClick={handleFilter}>Appliquer</button>
                    <button onClick={handleReset}>Réinitialiser</button>
                    <button onClick={togglePopup}>Annuler</button>
                </div>
            )}
        </div>
    );
}

export default BouttonFiltre;