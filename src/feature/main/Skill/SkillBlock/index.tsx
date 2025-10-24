import {FC, useContext, useRef} from "react";
import styles from "./skillBlock.module.scss";
import {useGSAP} from "@gsap/react";
import {timelineScroll} from "libs/gsap";
import classNames from "classnames";
import {useTranslation} from "react-i18next";
import {ThemeContext} from "../../../../theme/ThemeContext";
import {ThemeEnum} from "../../../../theme/themeEnum";

type SkillBlockProps = {
	title: string;
	content: string;
	position: boolean;
	toggle: () => void;
	isShowMore: boolean;
}

export const SkillBlock: FC<SkillBlockProps> = ({
  title,
  content,
  position,
  toggle,
  isShowMore
}) => {
	const {t} = useTranslation();
	const {theme} = useContext(ThemeContext);
	const ref = useRef<HTMLDivElement | null>(null);
	const lightRef = useRef<HTMLDivElement | null>(null);
	const contentRef = useRef<HTMLDivElement | null>(null);
	
	useGSAP(() => {
		const timeline = timelineScroll(ref.current);
		timeline.fromTo(
			ref.current,
			{x: 50 * (position ? -1 : 1), opacity: 0},
			{x: 0, opacity: 1, duration: 1}
		)
		if (lightRef.current) {
			timeline.fromTo(
				lightRef.current,
				{opacity: 0},
				{opacity: 1}
			);
		}
	})
	
	return (
		<div ref={ref} className={styles.block}>
			{
				theme === ThemeEnum.DARK &&
				<div ref={lightRef} className={classNames(styles.light, {[styles.reverse]: position})}></div>
			}
			<div className={styles.layer}>
				<div className={styles.title}>
					<h3>{title}</h3>
				</div>
				<div ref={contentRef} className={classNames(styles.content, {[styles.toggle]: isShowMore})}>
					<p>{content}</p>
				</div>
				<div
					className={styles["toggle-button"]}
					onClick={toggle}
				>
					{
						!isShowMore
							? <span>{t("skill.showMore")}</span>
							: <span>{t("skill.showLess")}</span>
					}
				</div>
			</div>
		</div>
	)
}