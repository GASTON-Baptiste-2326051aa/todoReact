import './styles/App.css';
import HeaderApp from "./header/headerApp";
import BodyApp from "./body/bodyApp";
import FooterApp from "./footer/footerApp";

function App() {
  return (
      <>
          <header><HeaderApp /></header>
          <main><BodyApp /></main>
          <footer><FooterApp /></footer>
      </>
  );
}

export default App;