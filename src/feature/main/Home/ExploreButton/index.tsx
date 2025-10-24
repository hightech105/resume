import {Link} from "react-scroll";
import styles from "./exploreButton.module.scss";
import {ABOUT} from "../../sections";
import {useTranslation} from "react-i18next";

export const ExploreButton = () => {
	
	const {t} = useTranslation();
	
	return (
		<div className={styles["explore-button"]}>
			<Link to={ABOUT} smooth duration={500}>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				{t("home.explore")}
			</Link>
		</div>
	)
}
