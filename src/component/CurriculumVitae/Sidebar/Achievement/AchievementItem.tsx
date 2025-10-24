import {FC} from "react";
import styles from "./achievement.module.scss";

type AchievementItemProps = {
	company: string;
	values: {
		label: string;
		award: string;
	}[];
}

export const AchievementItem: FC<AchievementItemProps> = ({company, values}) => {
	return (
		<div className={styles["achievement-item"]}>
			<span className={styles["company"]}>{company}</span>
			<ul>
				{
					values.map((data, index) => (
						<li key={index}>
							<span><strong>{data.label}:</strong> {data.award}</span>
						</li>
					))
				}
			</ul>
		</div>
	)
}