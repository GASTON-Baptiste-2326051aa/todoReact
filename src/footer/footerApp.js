
import BouttonAjoutTaches from "./bouttonAjoutTaches";
import BouttonAjoutCategories from "./bouttonAjoutCategories";


function FooterApp()
{
    return(
        <section className="footerApp">
                <BouttonAjoutTaches/>
                <BouttonAjoutCategories/>
        </section>
    )
}

export default FooterApp;