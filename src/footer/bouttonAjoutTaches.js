import { useState } from "react";
import FormulaireAjoutTaches from "./FormulaireAjoutTaches";

function BouttonAjoutTaches() {
    const [formulaire, setFormulaire] = useState(false);

    const toggleFormulaire = () => {
        setFormulaire(!formulaire);
    };

    return (
        <div>
            <button onClick={toggleFormulaire}>Ajouter une tâche</button>
            {formulaire && (
                <div className="popup-overlay" onClick={toggleFormulaire}>
                    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-button" onClick={toggleFormulaire}>X</button>
                        <FormulaireAjoutTaches />
                    </div>
                </div>
            )}
        </div>
    );
}

export default BouttonAjoutTaches;
