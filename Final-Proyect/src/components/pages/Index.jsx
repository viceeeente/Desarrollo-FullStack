import React from "react";
import Welcome from "../molecules/Welcome";
import Navbar from "../organisms/Navbar";
import Shortcuts from "../organisms/Shortcuts";
import MapSection from "../organisms/MapSection";
import Footer from "../organisms/Footer";

export default function Index() {
  return (
    <div className="page-container">
      <Navbar />
      <main className="main-content">
        <Welcome />
        <Shortcuts />
        <MapSection />
      </main>
      <Footer />
    </div>
  );
}
