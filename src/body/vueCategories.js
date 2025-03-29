import React, { useContext } from "react";
import { CategorieContext } from "../App";

function VueCategories() {
    const { categories } = useContext(CategorieContext);

    return (
        <div>
            <h1>Catégories</h1>
            <div className="categories-container">
                {categories.length > 0 ? (
                    categories.map((categorie) => (
                        <div key={categorie.id} className="categorie-card">
                            <div className="categorie-card-header" style={{ backgroundColor: categorie.color }}>
                                <h3>{categorie.titre} {categorie.emoji ? `(${categorie.emoji})` : ""}</h3>
                            </div>
                            <div className="categorie-card-body">
                                <p>{categorie.description}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Aucune catégorie disponible</p>
                )}
            </div>
        </div>
    );
}

export default VueCategories;