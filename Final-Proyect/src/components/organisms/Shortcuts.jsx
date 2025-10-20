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
    { title: "Consolas", img: "https://cdn-icons-png.flaticon.com/512/141/141309.png", link: "/consolas" },
    { title: "PC Gamer", img: "https://cdn-icons-png.freepik.com/512/8674/8674466.png", link: "/pc" },
    { title: "Juegos", img: "https://cdn-icons-png.flaticon.com/512/686/686589.png", link: "/games" },
    { title: "Accesorios", img: "https://cdn-icons-png.flaticon.com/512/38/38708.png", link: "/accesorios" },
    { title: "Mouse", img: "https://static.thenounproject.com/png/1080127-200.png", link: "/mouse" },
    { title: "Mousepad", img: "https://cdn.iconscout.com/icon/premium/png-256-thumb/mouse-pad-6875490-5640481.png", link: "/mousepad" },
    { title: "Sillas Gamers", img: "https://cdn-icons-png.flaticon.com/256/1698/1698641.png", link: "/sillas-gamers" },
    { title: "Poleras Personalizadas", img: "https://images.vexels.com/media/users/3/142647/isolated/lists/7975c8713e6cd70ff26097efbbebdbd1-ropa-de-camiseta.png", link: "/poleras" },
  ];

  return (
    <section className="shortcuts">
      {shortcuts.map((item, i) => (
        <ShortcutCard key={i} {...item} />
      ))}
    </section>
  );
}
