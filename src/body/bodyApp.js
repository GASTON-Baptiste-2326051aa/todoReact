import BouttonFiltre from "./bouttonFiltre";
import TableauTaches from "./tableauTaches";

function BodyApp()
{
    return(
        <section className="bodyApp">
            <section className="topBody">
                <BouttonFiltre/>
            </section>
            <section className="sectionTableau">
                <TableauTaches/>
            </section>
        </section>
    )
}

export default BodyApp;