import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import CommandesPage from "./components/commandes/CommandesPage";
import EmpruntsPage from "./components/emprunts/EmpruntsPage";
import ExplorePage from "./components/explore/ExplorePage";
import { Footer } from "./components/Footer";
import { HomePage } from "./components/home/HomePage";
import StatistiquesPage from "./components/statistiques/StatistiquesPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/statistics" element={<StatistiquesPage />} />
        <Route path="/orders" element={<CommandesPage />} />
        <Route path="/loans" element={<EmpruntsPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
