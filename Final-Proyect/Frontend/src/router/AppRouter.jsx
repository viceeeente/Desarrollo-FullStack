import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";

import Index from "../components/pages/Index";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";
import Consolas from "../components/pages/Consolas";
import PC from "../components/pages/PC";
import Juegos from "../components/pages/Juegos";
import Accesorios from "../components/pages/Accesorios";
import Mouse from "../components/pages/Mouse";
import Mousepad from "../components/pages/Mousepad";
import Silla from "../components/pages/Silla";
import Poleras from "../components/pages/Poleras";
import Carrito from "../components/pages/Carrito";

import AdminLayout from "../components/admin/AdminLayout";
import Dashboard from "../components/admin/Dashboard";
import ProductosAdmin from "../components/admin/ProductosAdmin";

import VendedorLayout from "../components/vendedor/VendedorLayout";
import VendedorDashboard from "../components/vendedor/VendedorDashboard";
import ProductosVendedor from "../components/vendedor/ProductosVendedor";
import BoletasVendedor from "../components/vendedor/BoletasVendedor";

export default function AppRouter() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />       
        <Route path="/register" element={<Register />} />
        <Route path="/consolas" element={<Consolas />} />
        <Route path="/pc" element={<PC />} />
        <Route path="/juegos" element={<Juegos />} />
        <Route path="/accesorios" element={<Accesorios />} />
        <Route path="/mouse" element={<Mouse />} />
        <Route path="/mousepad" element={<Mousepad />} />
        <Route path="/sillas-gamers" element={<Silla />} />
        <Route path="/poleras" element={<Poleras />} />

        <Route element={<PrivateRoute allowedRoles={["USER", "ADMIN", "VENDEDOR"]} />}>
          <Route path="/carrito" element={<Carrito />} />
        </Route>

        <Route element={<PrivateRoute allowedRoles={["ADMIN"]} />}>
          <Route path="/admin" element={<AdminLayout />}>

            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />     
            <Route path="productos" element={<ProductosAdmin />} />

          </Route>
        </Route>

        <Route element={<PrivateRoute allowedRoles={["VENDEDOR"]} />}>
          <Route path="/vendedor" element={<VendedorLayout />} >
            <Route index element={<VendedorDashboard />} />
            <Route path="productos" element={<ProductosVendedor />} />
            <Route path="boletas" element={<BoletasVendedor />} /> 
          </Route>
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </Router>
  );
}
