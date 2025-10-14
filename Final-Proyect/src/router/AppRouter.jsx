import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "../components/pages/Index";
import Consolas from "../components/pages/Consolas";
import PC from "../components/pages/PC";
import Juegos from "../components/pages/Juegos";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/consolas" element={<Consolas />} />
        <Route path="/pc" element={<PC />} />
        <Route path="/juegos" element={<Juegos />} />
      </Routes>
    </Router>
  );
}
