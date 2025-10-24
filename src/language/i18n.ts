import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import EN from "./locale/en.json";
import VI from "./locale/vi.json";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";

const resources = {
	en: {translation: EN},
	vi: {translation: VI},
};

i18n
	.use(initReactI18next)
	.use(I18nextBrowserLanguageDetector)
	.init({
		resources,
		fallbackLng: "en",
		supportedLngs: ['en', 'vi'],
		interpolation: {
			escapeValue: false,
		},
	}).then(() => {});

export default i18n;