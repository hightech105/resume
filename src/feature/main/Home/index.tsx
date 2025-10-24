import IllustrationCoder from "assets/images/illustration_coder.png";
import {FC, useRef} from "react";
import {ContactLinnk} from "./ContactLink";
import styles from "./home.module.scss";
import {useGSAP} from "@gsap/react";
import {useTranslation} from "react-i18next";
import {ExploreButton} from "./ExploreButton";
import {timelineScroll} from "../../../libs/gsap";

const Home: FC = () => {
	
	const {t} = useTranslation();
	const leftRef = useRef(null);
	const rightRef = useRef(null);
	// const moveRef = createRef<HTMLDivElement>();
	
	useGSAP(() => {
		const timeline = timelineScroll();
		applyLeftTween(timeline);
		applyRightTween(timeline);
		// applyMoveTween(timeline);
	})
	
	const applyLeftTween = (timeline: GSAPTimeline) => {
		timeline.fromTo(
			leftRef.current,
			{y: 20, opacity: 0.2},
			{y: 0, opacity: 1, duration: 2}
		);
	}
	
	const applyRightTween = (timeline: GSAPTimeline) => {
		timeline.fromTo(
			rightRef.current,
			{x: 10, opacity: 0},
			{x: 0, opacity: 1, duration: 1},
			0.5
		);
	}
	
	// const applyMoveTween = (timeline: GSAPTimeline) => {
	// 	timeline.fromTo(
	// 		moveRef.current,
	// 		{y: -10, opacity: 0},
	// 		{x: 0, opacity: 1, duration: 1},
	// 		1
	// 	);
	// }
	
	return (
		<div id="home" className={styles.home}>
			<div className={styles.content}>
				<div ref={leftRef} className={styles.left}>
					<div className={styles.greeting}>
						<span>{t("home.greeting")}</span>
					</div>
					<div className={styles.position}>
						<h3 className={styles.top}>
							{t("home.position.top")}
						</h3>
						<h3 className={styles.bottom}>
							{t("home.position.bottom")}
						</h3>
					</div>
					<div className={styles.maxim}>
						<span>{t("home.maxim")}</span>
					</div>
					<ContactLinnk/>
					<ExploreButton/>
				</div>
				<div ref={rightRef} className={styles.right}>
					<img src={IllustrationCoder} alt=""/>
				</div>
			</div>
			{/*<NextSectionButton ref={moveRef} title="ABOUT ME" path={ABOUT}/>*/}
		</div>
	)
};

export default Home;
