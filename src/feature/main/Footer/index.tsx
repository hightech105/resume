import { FC } from "react";
import { ContactLink } from "./ContactLink";
import styles from "./footer.module.scss";
import { Information } from "./Information";
import { Navigation } from "./Navigation";
import { Signature } from "./Signature";
import {useTranslation} from "react-i18next";

const Footer: FC = () => {
  
  const {t} = useTranslation();
  
  return (
    <div className={styles["footer"]}>
      <div className={styles["content"]}>
        <div className={styles["left"]}>
          <Signature/>
          <span>Full Stack developer</span><br />
          <span>Project Manager</span>
        </div>
        <div className={styles["middle"]}>
          <Navigation/>
        </div>
        <div className={styles["right"]}>
          <Information/>
        </div>
      </div>
      <div className={styles["greeting"]}>
        <div className={styles["greeting-content"]}>
          <span>{t("footer.maxim.greeting")}</span>
          <br/>
          <span>{t("footer.maxim.collaborate")}</span>
        </div>
        <ContactLink/>
      </div>
    </div>
  )
}
export default Footer;
