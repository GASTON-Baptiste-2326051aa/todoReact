import {useState} from "react";
import FormulaireAjoutCategories from "./FormulaireAjoutCategorie";

function BouttonAjoutCategories()
{
    const [formulaire, setFormulaire] = useState(false);

    const toggleFormulaire = () => {
        setFormulaire(!formulaire);
    };

    return (
        <div>
            <button onClick={toggleFormulaire}>Ajouter une categorie</button>
            {formulaire && (
                <div className="popup-overlay" onClick={toggleFormulaire}>
                    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-button" onClick={toggleFormulaire}>X</button>
                        <FormulaireAjoutCategories />
                    </div>
                </div>
            )}
        </div>
    );
}

export default BouttonAjoutCategories;