import { FC } from "react";
import styles from "./footer.module.scss";
import { HomeOutline, MailOutline, PhoneOutline } from "assets/icons";
import {useTranslation} from "react-i18next";

export const Information: FC = () => {
  
  const {t} = useTranslation();
  
  return (
    <>
      <div className={styles["title"]}>{t("footer.information.title")}</div>
      {/* <ul>
        <li>
          <PhoneOutline />
          0865703869
        </li>
      </ul> */}
      <ul>
        <li>
          <MailOutline />
          dangthienhoa105@gmail.com
        </li>
      </ul>
      <ul>
        <li>
          <HomeOutline />
          {t("footer.information.address")}
        </li>
      </ul>
    </>
  )
}
