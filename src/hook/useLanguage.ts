import {useTranslation} from "react-i18next";
import {LanguageEnum} from "../language/languageEnum";

type useLanguageType = {
	language: string;
	setLanguage: () => void;
}

export const useLanguage = (): useLanguageType => {
	const {i18n} = useTranslation();
	
	const setLanguage = async () => {
		if (i18n.language === LanguageEnum.EN) {
			await i18n.changeLanguage(LanguageEnum.VI);
		} else {
			await i18n.changeLanguage(LanguageEnum.EN);
		}
	}
	
	return {
		language: i18n.language,
		setLanguage
	}
}