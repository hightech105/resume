import {FC, useRef} from "react";
import {Process} from "./Process";
import styles from "./wellcom.module.scss";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

const Welcome:FC = () => {
	const ref = useRef(null);
	const signatureRef = useRef(null);
	const greetingRef = useRef(null);
	
	useGSAP(() => {
		const timeline = gsap.timeline();
		
		timeline.fromTo(
			signatureRef.current,
			{opacity: 0, scale: 0.5, y: 20},
			{opacity: 1, scale: 1.5, y: 50}
		)
		
		timeline.to(signatureRef.current, {scale: 1, y: 0}, 2);
		
		timeline.fromTo(
			greetingRef.current,
			{opacity: 0, scale: 0.5},
			{opacity: 1, scale: 1}
		);
		
		timeline.to(
			ref.current,
			{opacity: 0, scale: 0, delay: 7}
		)
	})

	return (
		<div ref={ref} className={styles.wellcome}>
			<div ref={signatureRef} className={styles.signature}>
				<h3>Đặng Thiên Hoà</h3>
			</div>
			<div ref={greetingRef} className={styles.greeting}>
				<span>
					Welcome to my portfolio
				</span>
			</div>
			<Process />
		</div>
	)
}

export default Welcome;