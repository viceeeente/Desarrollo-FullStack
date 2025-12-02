import { useContext } from "react";
import DropdownMenu from "../molecules/DropdownMenu";
import SearchBar from "../molecules/SearchBar";
import CartButton from "../atoms/CartButton";
import AuthButton from "../molecules/AuthButton";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo.png";

export default function Navbar() {
  const { isLoggedIn, userName, rol, logout } = useContext(AuthContext);

  return (
    <header>
      <nav id="main-menu">
        <img src={logo} alt="Logo" id="logo" />

        <div id="greeting">
          {isLoggedIn ? `¡Bienvenido, ${userName}! (${rol})` : ""}
        </div>

        <DropdownMenu />
        <SearchBar />

        {rol === "ADMIN" && (
          <Link to="/admin" className="admin-btn">
            Panel Admin
          </Link>
        )}
        {rol === "VENDEDOR" && (
          <Link to="/vendedor" className="admin-btn">
            Panel Vendedor
          </Link>
        )}

        <AuthButton isLoggedIn={isLoggedIn} onLogout={logout} />
        <CartButton />
      </nav>
    </header>
  );
}
