import {FC} from "react";
import {Section} from "../Section";
import {skillData} from "./skillData";
import {SkillItem} from "./SkillItem";
import styles from "./skill.module.scss";

export const Skill:FC = () => {
	return (
		<Section title={"Skill"} className={styles.skill}>
			{
				skillData.map((data, index) => (
					<SkillItem key={index} label={data.label} values={data.values} />
				))
			}
		</Section>
	)
}