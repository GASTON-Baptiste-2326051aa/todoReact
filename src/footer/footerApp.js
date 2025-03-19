
import BouttonAjout from "./bouttonAjout";
import BouttonAffichageTaches from "./bouttonAffichageTaches";
import BouttonAffichageCategories from "./bouttonAffichageCategories";


function FooterApp()
{
    return(
        <section className="footerApp">
            <section className="topFooter" >
                <BouttonAjout/>
            </section>
            <section className="bottomFooter">
                <BouttonAffichageTaches/>
                <BouttonAffichageCategories/>
            </section>
        </section>
    )
}

export default FooterApp;