import { useTranslation } from "../contexts/LangContext";

export default function HomePage() {
  const { language, translations } = useTranslation();

  return (
    <>
      <h1
        className={`text-5xl text-center my-12 `}
        id={language === "fr" ? "colorize" : ""}
      >
        {translations.homepage.maintitle}
      </h1>
      <p className="text-center">{translations.homepage.description}</p>
    </>
  );
}
