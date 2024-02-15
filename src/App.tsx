import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ComponentNavbar from "./components/ComponentNavbar";
import ComponentAllArticles from "./components/ComponentAllArticles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ComponentDetailArticle from "./components/ComponentSingleArticle";

function App() {
  return (
    <BrowserRouter>
      <>
        <header>
          <ComponentNavbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<ComponentAllArticles />} />
            <Route path="/details:/id" element={<ComponentDetailArticle />} />
          </Routes>
        </main>
        <footer></footer>
      </>
    </BrowserRouter>
  );
}

export default App;
