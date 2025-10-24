import {FC, PropsWithChildren, useEffect, useState} from "react";
import {ThemeEnum} from "./themeEnum";
import {ThemeContext} from "./ThemeContext";
import "./sass/theme.scss";

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
    const [theme, setTheme] = useState<ThemeEnum>(() => {
      const theme = localStorage.getItem("theme");
      if (!Object.values(ThemeEnum).includes(theme as ThemeEnum)) {
        return ThemeEnum.DARK;
      } else {
        return theme as ThemeEnum;
      }
    });
  
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);
    
    return (
        <ThemeContext.Provider value={{
            theme,
            setTheme
        }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;