import {FC} from "react";
import styles from "./footer.module.scss";
import {Link} from "react-scroll";
import {ABOUT, CONTACT, EXPERIENCE, HOME, REPOSITORY, SKILL} from "../sections";
import {useTranslation} from "react-i18next";

export const Navigation: FC = () => {
  
  const {t} = useTranslation();
  
  return (
    <>
      <div className={styles["title"]}>{t("footer.navigation.title")}</div>
      <ul>
        <li>
          <Link to={HOME} smooth duration={500}>
            {t("footer.navigation.home")}
          </Link>
        </li>
        <li>
          <Link to={ABOUT} smooth duration={500}>
            {t("footer.navigation.about")}
          </Link>
        </li>
        <li>
          <Link to={SKILL} smooth duration={500}>
            {t("footer.navigation.skill")}
          </Link>
        </li>
        <li>
          <Link to={EXPERIENCE} smooth duration={500}>
            {t("footer.navigation.experience")}
          </Link>
        </li>
        <li>
          <Link to={REPOSITORY} smooth duration={500}>
            {t("footer.navigation.repository")}
          </Link>
        </li>
        <li>
          <Link to={CONTACT} smooth duration={500}>
            {t("footer.navigation.contact")}
          </Link>
        </li>
      </ul>
    </>
  )
}