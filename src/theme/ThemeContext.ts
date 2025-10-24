import {ThemeEnum} from "./themeEnum";
import {createContext} from "react";

type ThemeContextType = {
	theme: ThemeEnum;
	setTheme: (theme: ThemeEnum) => void;
}

const InitialThemContext: ThemeContextType = {
	theme: ThemeEnum.DARK,
	setTheme: () => {},
}

export const ThemeContext = createContext(InitialThemContext);