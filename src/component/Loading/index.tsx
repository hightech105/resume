import {FC, useRef} from "react";
import styles from "./loading.module.scss";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

export const Loading: FC = () => {
	const refs = useRef<(HTMLDivElement | null)[]>([]);
	
	useGSAP(() => {
		const timeline = gsap.timeline({repeat: -1, yoyo: true});
		const dots = refs.current;
		dots.forEach((dot, index) => {
			timeline.to(dot, {
				y: -10,
				duration: 0.1,
				delay: index * 0.008,
			});
		});
	})
	
	return (
		<div className={styles.loading}>
			{
				[0, 1, 2].map((value) => (
					<div
						key={value}
						ref={(element) => {
							refs.current[value] = element
						}}
						className={styles.dot}
					></div>
				))
			}
		</div>
	)
}