import { useTranslation } from "react-i18next";

const Translate = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <h1 style={{color: 'white'}}>{t("this is shahzaib welcome hello how are you")}</h1>
      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("fr")}>French</button>
    </div>
  );
};

export default Translate;
