import React, { useContext } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { TacheContext } from "../App";

ChartJS.register(ArcElement, Tooltip, Legend);

function Graphique() {
    const { taches } = useContext(TacheContext);
    const etatCounts = taches.reduce((acc, tache) => {
        acc[tache.etat] = (acc[tache.etat] || 0) + 1;
        return acc;
    }, {});

    const data = {
        labels: Object.keys(etatCounts),
        datasets: [
            {
                data: Object.values(etatCounts),
                backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"],
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                position: "bottom",
            },
        },
    };

    return (
        <div className="graphique">
            <Doughnut data={data} options={options} />
        </div>
    );
}

export default Graphique;