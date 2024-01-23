import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import translationGr from "../../public/i18n/ar.json";
import translationIT from "../../public/i18n/it.json";
import translationRS from "../../public/i18n/ru.json";
import translationSP from "../../public/i18n/sp.json";
import translationENG from "../../public/i18n/en.json";
import translationCN from "../../public/i18n/ch.json";
import translationFR from "../../public/i18n/fr.json";
import translationAR from "../../public/i18n/ar.json";


// the translations
const resources = {
    gr: {
        translation: translationGr,
    },
    it: {
        translation: translationIT,
    },
    rs: {
        translation: translationRS,
    },
    sp: {
        translation: translationSP,
    },
    en: {
        translation: translationENG,
    },
    cn: {
        translation: translationCN,
    },
    fr: {
        translation: translationFR,
    },
    ar: {
        translation: translationAR,
    },
};

const language = typeof window !== 'undefined' && localStorage.getItem("I18N_LANGUAGE");
if (!language) {
    typeof window !== 'undefined' && localStorage.setItem("I18N_LANGUAGE", "en");
}

i18n
    .use(detector)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: typeof window !== 'undefined' && localStorage.getItem("I18N_LANGUAGE") || "en",
        fallbackLng: "en", // use en if detected lng is not available

        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    });

export default i18n;
