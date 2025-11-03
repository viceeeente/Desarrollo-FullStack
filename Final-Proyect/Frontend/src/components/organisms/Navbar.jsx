import React, { useState, useEffect } from "react";
import DropdownMenu from "../molecules/DropdownMenu";
import SearchBar from "../molecules/SearchBar";
import CartButton from "../atoms/CartButton";
import AuthButton from "../molecules/AuthButton";
import logo from "../../assets/icons/logo.png";

export default function Navbar() {
  const [userName, setUserName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    const logged = localStorage.getItem("isLoggedIn") === "true";
    setUserName(storedName || "");
    setIsLoggedIn(logged);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userName");
    window.location.reload(); 
  };

  return (
    <header>
      <nav id="main-menu">
        <img src={logo} alt="Logo" id="logo" />

        <div id="greeting">
          {isLoggedIn ? `¡Bienvenido, ${userName}!` : ""}
        </div>

        <DropdownMenu />

        <SearchBar />

        <AuthButton isLoggedIn={isLoggedIn} onLogout={handleLogout} />

        <CartButton />
      </nav>
    </header>
  );
}
