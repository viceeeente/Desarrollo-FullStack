import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "../components/pages/Index";
import Consolas from "../components/pages/consolas";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/consolas" element={<Consolas />} />
      </Routes>
    </Router>
  );
}
