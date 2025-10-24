import {FC, ReactNode} from "react";
import styles from "./repositoryItem.module.scss";
import {DoubleLeftOutline, DoubleRightOutline} from "assets/icons";
import {useTranslation} from "react-i18next";

type RepositoryItemProps = {
	name: string;
	description: ReactNode;
	technilogies: string[];
	link: string;
}

export const RepositoryItem: FC<RepositoryItemProps> = ({
	name,
	link,
	description,
	technilogies
}) => {
	const {t} = useTranslation();
	
	return (
		<div className={styles["repository-item"]}>
			<div className={styles.name}>
				<h3>{name}</h3>
			</div>
			<div className={styles.description}>
				{description}
			</div>
			<div className={styles.bottom}>
				<ul className={styles.technologies}>
					{
						technilogies.map((technology, index) => (
							<li key={index} className={styles["technology-item"]}>
								<img src={technology} alt={""} height={30}/>
							</li>
						))
					}
				</ul>
				<div className={styles["view-button"]}>
					<a href={link}>
						<DoubleRightOutline className={styles["double-left"]}/>
						<span style={{whiteSpace: "nowrap"}}> {t("repository.view")} </span>
						<DoubleLeftOutline className={styles["double-right"]}/>
					</a>
				</div>
			</div>
		</div>
	)
}