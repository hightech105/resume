import {FC} from "react";
import styles from "./stepContentFrame.module.scss";
import {useTranslation} from "react-i18next";

type ProjectTechinicalProps = {
	technologiesLogoUrls: string[];
}

export const ProjectTechnology:FC<ProjectTechinicalProps> = ({technologiesLogoUrls}) => {
	
	const {t} = useTranslation();
	
	return (
		<li>
			<div className={styles.row}>
				<label>{t("experience.field.projectTechnology")}:</label>
				<span>
				{
					technologiesLogoUrls.map((logo, index) => {
						return <img key={index} src={logo} height={30} alt={""}/>
					})
				}
			</span>
			</div>
		</li>
	)
}