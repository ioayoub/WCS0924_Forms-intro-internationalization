import { NavLink } from "react-router-dom";
import { useTranslation } from "../contexts/LangContext";

export default function Navbar() {
  const { translations, language, toggleLanguage } = useTranslation();

  return (
    <nav className="flex justify-around bg-pink-200 py-4">
      <span>MySuperForm</span>
      <ul className="flex gap-4">
        <li>
          <NavLink to="/">{translations.navbar.home}</NavLink>
        </li>
        <li>
          <NavLink to="/contact">{translations.navbar.contact}</NavLink>
        </li>
        <li>
          <button onClick={toggleLanguage}>
            {language === "fr" ? "🇫🇷" : "🇬🇧"}
          </button>
        </li>
      </ul>
    </nav>
  );
}
