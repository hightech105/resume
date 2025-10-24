import {FC, ReactNode} from "react";
import {ProjectFeatures} from "./ProjectFeatures";
import {ProjectTechnology} from "./ProjectTechnology";
import styles from "./stepContentFrame.module.scss";
import {useTranslation} from "react-i18next";

type StepContentFrameProps = {
	projectName: string;
	position: string;
	summary: ReactNode;
	projectFeatures?: string[];
	projectTechnologyLogos?: string[];
	teamSize: number;
	role: string;
	issues?: string;
	result: string;
	projectLink?: string;
};

export const StepContentFrame: FC<StepContentFrameProps> = ({
  projectName,
  position,
  summary,
  projectTechnologyLogos,
  projectFeatures,
  teamSize,
  role,
  issues,
  result,
  projectLink
}) => {
	
	const {t} = useTranslation();
	
	return (
		<div className={styles["step-content"]}>
			<div className={styles.head}>
			<span className={styles["project-name"]}>
				{projectName}
			</span>
				<br/>
				<i className={styles.position}>
					{position}
				</i>
			</div>
			<div className={styles.summary}>
				{summary}
			</div>
			<div className={styles.detail}>
				<ul>
					{
						projectFeatures &&
						<ProjectFeatures projectFeatures={projectFeatures}/>
					}
					{
						projectTechnologyLogos &&
						<ProjectTechnology technologiesLogoUrls={projectTechnologyLogos}/>
					}
					<li>
						<div className={styles.row}>
							<label>{t("experience.field.teamSize")}:</label>
							<span>{teamSize}</span>
						</div>
					</li>
					<li>
						<div className={styles.row}>
							<label>{t("experience.field.role")}:</label>
							<span>{role}</span>
						</div>
					</li>
					{
						issues &&
						<li>
							<div className={styles.row}>
								<label>{t("experience.field.issues")}:</label>
								<span>{issues}</span>
							</div>
						</li>
					}
					<li>
						<div className={styles.row}>
							<label>{t("experience.field.result")}:</label>
							<span>{result}</span>
						</div>
					</li>
					{
						projectLink &&
						<li>
							<div className={styles.row}>
								<label>{t("experience.field.detail")}:</label>
								<span>
							    <a href={projectLink}>{projectLink}</a>
							  </span>
							</div>
						</li>
					}
				</ul>
			</div>
		</div>
	)
};
