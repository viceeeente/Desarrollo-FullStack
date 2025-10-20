import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "../components/pages/Index";
import Consolas from "../components/pages/Consolas";
import PC from "../components/pages/PC";
import Juegos from "../components/pages/Juegos";
import Accesorios from "../components/pages/Accesorios";
import Mouse from "../components/pages/Mouse";
import Mousepad from "../components/pages/Mousepad";
import Silla from "../components/pages/Silla";
import Poleras from "../components/pages/Poleras";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";
import Games from "../components/pages/Games";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/consolas" element={<Consolas />} />
        <Route path="/pc" element={<PC />} />
        <Route path="/juegos" element={<Juegos />} />
        <Route path="/accesorios" element={<Accesorios />} />
        <Route path="/mouse" element={<Mouse />} />
        <Route path="/mousepad" element={<Mousepad />} />
        <Route path="/sillas-gamers" element={<Silla />} />
        <Route path="/poleras" element={<Poleras />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/games" element={<Games />} />
      </Routes>
    </Router>
  );
}
