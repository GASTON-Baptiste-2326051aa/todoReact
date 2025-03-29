import Graphique from "./graphique";
import Compteur from "./compteur";

function HeaderApp() {
    return (
        <section className="headerApp">
            <div className="header-left">
                <Compteur />
            </div>
            <h1 className="header-title">To Do</h1>
            <div className="header-right">
                <Graphique />
            </div>
        </section>
    );
}

export default HeaderApp;