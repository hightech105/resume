import { FABChild } from "component/FAB/FABChild"
import {useLanguage} from "../../../../hook/useLanguage";
import {useMemo} from "react";

export const LanguageSetting = () => {
    
    const {language, setLanguage} = useLanguage();
    
    const LanguageIcon = useMemo(() => {
        switch (language) {
            case "en":
                return <strong style={{color: "blue"}}>EN</strong>
            case "vi":
                return <strong style={{color: "red"}}>VI</strong>
            default:
                return <strong style={{color: "blue"}}>EN</strong>
        }
    }, [language]);
    
    return (
        <FABChild icon={LanguageIcon} onClick={setLanguage}/>
    )
}