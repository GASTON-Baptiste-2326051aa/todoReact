import { useContext } from "react";
import { CategorieContext } from "../App";
import { Categorie } from "../objects/categorie"; // si tu as exporté ta classe comme ça

function FormulaireAjoutCategories() {
    const { categories, setCategories } = useContext(CategorieContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        try {
            const nouvelleCategorie = new Categorie(
                Date.now(),
                form.titre.value,
                form.couleur.value || null,
                form.emoji.value || null,
                form.actif.checked
            );
            nouvelleCategorie.id = Date.now();
            setCategories([...categories, nouvelleCategorie]);
            form.reset();
            alert("Catégorie ajoutée !");
        } catch (error) {
            alert(error.message);
            return;
        }
    };

    return (
        <form id="form-ajout-categorie" onSubmit={handleSubmit}>
            <section className="form-title">Ajouter une nouvelle catégorie</section>

            <section>
                <label htmlFor="titre">Titre</label>
                <input type="text" id="titre" name="titre" required />
            </section>

            <section>
                <label htmlFor="couleur">Couleur</label>
                <input type="text" id="couleur" name="couleur" />
            </section>

            <section>
                <label htmlFor="emoji">Emoji</label>
                <input type="text" id="emoji" name="emoji" />
            </section>

            <section>
                <label htmlFor="actif">Actif</label>
                <input type="checkbox" id="actif" name="actif" defaultChecked />
            </section>

            <button type="submit">Ajouter la catégorie</button>
        </form>
    );
}

export default FormulaireAjoutCategories;
