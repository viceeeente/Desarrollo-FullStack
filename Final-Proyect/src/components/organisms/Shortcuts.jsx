import React from "react";
import ShortcutCard from "../molecules/ShortcutCard";
import Consolas from "../../assets/icons/ConsolasLogo.png"; 
import PC from "../../assets/icons/PcLogo.png";
import Juegos from "../../assets/icons/JuegosLogo.png";
import Accesorios from "../../assets/icons/AccesoriosLogo.png";
import Mouse from "../../assets/icons/MouseLogo.png";
import Mousepad from "../../assets/icons/MousepadLogo.webp";
import SillaGamer from "../../assets/icons/SillaLogo.png";
import Polera from "../../assets/icons/PoleraLogo.webp";

export default function Shortcuts() {
  const shortcuts = [
    { title: "Consolas", img: Consolas, link: "/consolas" },
    { title: "PC Gamer", img: PC, link: "/pc" },
    { title: "Juegos", img: Juegos, link: "/juegos" },
    { title: "Accesorios", img: Accesorios, link: "/accesorios" },
    { title: "Mouse", img: Mouse, link: "/mouse" },
    { title: "Mousepad", img: Mousepad, link: "/mousepad" },
    { title: "Sillas Gamers", img: SillaGamer, link: "/sillas-gamers" },
    { title: "Poleras Personalizadas", img: Polera, link: "/poleras" },
  ];

  return (
    <section className="shortcuts">
      {shortcuts.map((item, i) => (
        <ShortcutCard key={i} {...item} />
      ))}
    </section>
  );
}
