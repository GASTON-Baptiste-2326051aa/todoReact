import { useContext } from "react";
import { TacheContext } from "../App";
import { tache } from "../objects/tache"; // si tu as exporté ta classe comme ça

function FormulaireAjoutTaches() {
    const {taches, setTaches } = useContext(TacheContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        try {
            const nouvelleTache = new tache(
                form.titre.value,
                form.deadline.value,
                form.categorie.value || null,
                form.etat.value,
                form.description.value || null,
                form.urgent.checked,
                new Date().toISOString().split("T")[0]

            );
            nouvelleTache.id = Date.now();
            setTaches([...taches, nouvelleTache]);
            form.reset();
            alert("Tâche ajoutée !");
        }
        catch (error) {
            alert(error.message);
            return;
        }

        // Ajoute un id unique

    };

    return (
        <form id="form-ajout-tache" onSubmit={handleSubmit}>
            <section className="form-title">Ajouter une nouvelle tâche</section>

            <section>
                <label htmlFor="titre">Titre</label>
                <input type="text" id="titre" name="titre" required />
            </section>

            <section>
                <label htmlFor="deadline">Deadline</label>
                <input type="date" id="deadline" name="deadline" required />
            </section>

            <section>
                <label htmlFor="categorie">Catégorie</label>
                <input type="text" id="categorie" name="categorie" />
            </section>

            <section>
                <label htmlFor="etat">État</label>
                <select id="etat" name="etat">
                    <option value="nouveau">Nouveau</option>
                    <option value="en attente">En attente</option>
                    <option value="réussi">Réussi</option>
                    <option value="en cours">En cours</option>
                    <option value="abandonné">Abandonné</option>
                </select>
            </section>

            <section>
                <label htmlFor="description">Description</label>
                <textarea id="description" name="description"></textarea>
            </section>

            <section>
                <label htmlFor="urgent">Urgent</label>
                <input type="checkbox" id="urgent" name="urgent" />
            </section>

            <button type="submit">Ajouter la tâche</button>
        </form>
    );
}

export default FormulaireAjoutTaches;
