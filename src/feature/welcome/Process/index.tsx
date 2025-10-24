import {FC, useRef, useState} from "react";
import styles from "./process.module.scss";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

export const Process:FC = () => {
	const [percent, setPercent] = useState(0);
	const notifyRef = useRef<HTMLDivElement | null>(null);
	const processRef = useRef<HTMLDivElement | null>(null);
	const processCurrentRef = useRef<HTMLDivElement | null>(null);
	
	useGSAP(() => {
		const timeline = gsap.timeline({delay: 3});
		timeline.fromTo(
			processRef.current,
			{opacity: 0, scale: 0},
			{opacity: 1, scale: 1}
		)
		timeline.fromTo(
			notifyRef.current,
			{opacity: 0, y: -10},
			{opacity: 1, y: 0}
		)
		timeline.fromTo(
			processCurrentRef.current,
			{width: 0},
			{
				width: "100%",
				duration: 5,
				ease: "circ.inOut",
				onUpdate: () => {
					const newPercent = (processCurrentRef.current?.clientWidth ?? 1) / (processRef.current?.clientWidth ?? 1) * 100;
					setPercent(Math.round(newPercent * 100) / 100);
				}
			}
		)
	})
	
	return (
		<div className={styles["process-wrapper"]}>
			<div ref={notifyRef} className={styles.notify}>
				<i>
					Loading
					<span>.</span>
					<span>.</span>
					<span>.</span>
					{percent}%
				</i>
			</div>
			<div ref={processRef} className={styles.process}>
				<div ref={processCurrentRef} className={styles.current}>
				</div>
			</div>
		</div>
	)
}