import { HomePage } from "./components/home/HomePage";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ExplorePage from "./components/explore/ExplorePage";
import StatistiquesPage from "./components/statistiques/StatistiquesPage";
import { Footer } from "./components/Footer";
import CommandesPage from "./components/commandes/CommandesPage";
import EmpruntsPage from "./components/emprunts/EmpruntsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/statistiques" element={<StatistiquesPage />} />
        <Route path="/commandes" element={<CommandesPage />} />
        <Route path="/emprunts" element={<EmpruntsPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
