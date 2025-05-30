import { useTranslation } from "react-i18next";
import Logo from "../assets/Logo.svg";
import { cn } from "../utils/cn";

const Header = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language.toUpperCase();

  const handleLanguageChange = (lang: "EN" | "KO") => {
    i18n.changeLanguage(lang.toLowerCase());
  };

  return (
    <header className="flex items-center justify-between h-[80px] min-w-full py-5 px-8">
      <div className="w-1/3" />

      <div className="w-1/3 flex justify-center">
        <img src={Logo} alt="Logo" className="h-8" />
      </div>

      <div className="w-1/3 flex justify-end space-x-1">
        <button
          onClick={() => handleLanguageChange("KO")}
          className={cn(
            "font-semibold",
            "max-md:text-sm",
            currentLang === "KO" ? "text-[#0c0c0c]" : "text-[#b6b6b6]"
          )}
        >
          KO
        </button>
        <span>/</span>
        <button
          onClick={() => handleLanguageChange("EN")}
          className={cn(
            "font-semibold",
            "max-md:text-sm",
            currentLang === "EN" ? "text-[#0c0c0c]" : "text-[#b6b6b6]"
          )}
        >
          EN
        </button>
      </div>
    </header>
  );
};

export default Header;
