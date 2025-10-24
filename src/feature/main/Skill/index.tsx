import {SectionWrapper} from "../SectionWrapper";
import {SkillBlock} from "./SkillBlock";
import {getSkillData} from "./skillData";
import styles from "./skill.module.scss";
import {TechnicalSlider} from "./TechnicalSlider";
import {useTranslation} from "react-i18next";
import {useMemo, useState} from "react";

const Skill = () => {
	const [isShowMore, setShowMore] = useState(false);
	const {t} = useTranslation();
	
	const skillData = useMemo(() => getSkillData(t), [t]);
	
	const toggle = () => {
		setShowMore(!isShowMore);
	}
	
	return (
		<SectionWrapper
			sectionId="skill"
			title={t("skill.title")}
			className={styles.skill}>
			<div className={styles["block-wrapper"]}>
				{
					skillData.map((data, index) => {
						return (
							<SkillBlock
								position={index % 2 === 0}
								key={index}
								title={data.title}
								content={data.content}
								toggle={toggle}
								isShowMore={isShowMore}
							/>
						)
					})
				}
			</div>
			<div className={styles["technical-wrapper"]}>
				<TechnicalSlider/>
			</div>
		</SectionWrapper>
	)
}

export default Skill;