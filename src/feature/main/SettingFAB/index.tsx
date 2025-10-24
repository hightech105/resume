import {SettingOutline} from "assets/icons";
import FAB from "component/FAB";
import {FC} from "react";
import {ThemeSetting} from "./ThemeSetting";
import {LanguageSetting} from "./LanguageSetting";

const SettingFAB: FC = () => {
  return (
    <FAB icon={<SettingOutline style={{width: 20, height: 20, fill: "#FFFFFF"}}/>}>
      <ThemeSetting />
      <LanguageSetting />
    </FAB>
  );
};

export default SettingFAB;
