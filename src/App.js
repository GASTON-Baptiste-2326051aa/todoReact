// src/App.js
import React, { useState, useEffect, createContext } from 'react';
import './styles/App.css';
import HeaderApp from "./header/headerApp";
import BodyApp from "./body/bodyApp";
import FooterApp from "./footer/footerApp";
import data from './taches.json';
import VueCategories from './body/vueCategories';

export const TacheContext = createContext();
export const CategorieContext = createContext();
export const RelationContext = createContext();

function App() {
    const [taches, setTaches] = useState([]);
    const [allTaches, setAllTaches] = useState([]); // Liste complète des tâches
    const [categories, setCategories] = useState([]);
    const [relations, setRelations] = useState([]);
    const [showPopup, setShowPopup] = useState(true);
    const [view, setView] = useState('taches');

    useEffect(() => {
        if (showPopup) return;

        if (Array.isArray(data.taches)) {
            setTaches(data.taches);
            setAllTaches(data.taches); // Sauvegarde master
        } else {
            console.error("Les données de tâches ne sont pas un tableau.", data.taches);
        }

        if (Array.isArray(data.categories)) {
            setCategories(data.categories);
        } else {
            console.error("Les données de catégories ne sont pas un tableau.", data.categories);
        }

        if (Array.isArray(data.relations)) {
            setRelations(data.relations);
        }
    }, [showPopup]);

    const handleLoadData = () => {
        setShowPopup(false);
    };

    const handleStartFromScratch = () => {
        setShowPopup(false);
        setTaches([]);
        setAllTaches([]);
        setCategories([]);
        setRelations([]);
    };

    // Lors du changement de vue, on restaure par exemple la liste des tâches depuis le JSON pour la vue "taches"
    const handleChangeView = (newView) => {
        if (newView === 'taches') {
            setTaches(allTaches);
        }
        setView(newView);
    };

    return (
        <>
            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <h2>Charger les données</h2>
                        <button onClick={handleLoadData}>Charger le fichier JSON</button>
                        <button onClick={handleStartFromScratch}>Partir de zéro</button>
                    </div>
                </div>
            )}
            {!showPopup && (
                <TacheContext.Provider value={{ taches, setTaches, allTaches, setAllTaches }}>
                    <CategorieContext.Provider value={{ categories, setCategories }}>
                        <RelationContext.Provider value={{ relations, setRelations }}>
                            <header><HeaderApp /></header>
                            <main>
                                {view === 'taches' ? <BodyApp /> : <VueCategories />}
                            </main>
                            <footer>
                                <FooterApp />
                                <button onClick={() => handleChangeView(view === 'taches' ? 'categories' : 'taches')}>
                                    {view === 'taches' ? 'Voir les catégories' : 'Voir les tâches'}
                                </button>
                            </footer>
                        </RelationContext.Provider>
                    </CategorieContext.Provider>
                </TacheContext.Provider>
            )}
        </>
    );
}

export default App;
