import React from "react";
import Navbar from "../organisms/Navbar";
import Shortcuts from "../organisms/Shortcuts";
import MapSection from "../organisms/MapSection";
import Footer from "../organisms/Footer";

export default function Index() {
  return (
    <>
      <Navbar />
      <main>
        <Shortcuts />
        <MapSection />
      </main>
      <Footer />
    </>
  );
}
