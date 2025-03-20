import './styles/App.css';
import HeaderApp from "./header/headerApp";
import BodyApp from "./body/bodyApp";
import FooterApp from "./footer/footerApp";
import {createContext, useEffect, useState} from "react";
import data from './taches.json';

export const TacheContext = createContext();

function App() {
    const [taches, setTaches] = useState([]);
    useEffect(() => {
        if (Array.isArray(data.taches)) {
            setTaches(data.taches); // Accède au tableau "taches" dans l'objet JSON
        } else {
            console.error("Les données de tâches ne sont pas un tableau.", data.taches);
        }
    }, []);
  return (
      <>
          <TacheContext.Provider value={{taches, setTaches}}>
              <header><HeaderApp /></header>
              <main><BodyApp /></main>
              <footer><FooterApp /></footer>
          </TacheContext.Provider>
      </>
  );
}

export default App;