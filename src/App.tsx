import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ComponentNavbar from "./components/ComponentNavbar";
import ComponentAllArticles from "./components/ComponentAllArticles";

function App() {
  return (
    <>
      <header>
        <ComponentNavbar />
      </header>
      <main>
        <ComponentAllArticles />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
