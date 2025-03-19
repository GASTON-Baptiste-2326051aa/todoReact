import Graphique from "./graphique";
import Compteur from "./compteur";

function HeaderApp()
{
    return(
            <section className="headerApp">
                <Compteur/>
                <h1>To Do</h1>
                <Graphique/>
            </section>
    )
}

export default HeaderApp;