export class Categorie {
    constructor(titre, couleur = null, emoji = null, actif = true) {
        if (titre.trim().length < 1) {
            throw new Error("Le titre doit contenir au moins un caractère.");
        }

        this.titre = titre;
        this.nombreTaches = 0;
        this.couleur = couleur;
        this.emoji = emoji;
        this.actif = actif;
    }

    ajouterTache(){
        this.nombreTaches++;
    }
}