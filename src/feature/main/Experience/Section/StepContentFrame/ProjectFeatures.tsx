import {FC} from "react";
import styles from "./stepContentFrame.module.scss";
import {useTranslation} from "react-i18next";

type ProjectFeaturesProps = {
	projectFeatures: string[];
}

export const ProjectFeatures: FC<ProjectFeaturesProps> = ({projectFeatures}) => {
	
	const {t} = useTranslation();
	
	return (
		<li>
			<div className={styles.row}>
				<label>{t("experience.field.projectFeature")}:</label>
				<span>
				{
					projectFeatures.map((feature, index) => {
						return `${feature}${index === projectFeatures.length - 1 ? '' : ', '}`;
					})
				}
			</span>
			</div>
		</li>
	)
}