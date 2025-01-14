import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import translationEnglish from "../locale/english/translation.json";
import translationPolish from "../locale/polish/translation.json";

const resources = {
  pl: {
    main: translationPolish,
  },
  en: {
    main: translationEnglish,
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: "pl",
});

export default i18next;
