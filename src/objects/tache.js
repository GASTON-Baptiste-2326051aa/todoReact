export class tache{
    constructor(titre, deadline, categorie = null, etat = 'nouveau', description = null, urgent = false, date_creation) {
        if (titre.trim().length < 3) {
            throw new Error("Le titre doit contenir au moins trois caractères.");
        }
        this.titre = titre;
        this.deadline = deadline;
        this.categorie = categorie;
        this.etat = etat;
        this.description = description;
        this.urgent = urgent;
        this.date_creation = date_creation;
    }

    estFaite(){
        return this.etat === 'réussi' || this.etat === 'abandonné';
    }

}