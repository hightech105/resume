import {FC} from "react";
import styles from "./skill.module.scss";

type SkillItemProps = {
	label: string;
	values: string[];
}

export const SkillItem: FC<SkillItemProps> = ({label, values}) => {
	return (
		<div className={styles["skill-item"]}>
			<span>{label}:</span>
			<ul>
				<li>
					{
						values.map((data, index) => (
							index === values.length - 1 ? data : data + ", "
						))
					}
				</li>
			</ul>
		</div>
	)
}