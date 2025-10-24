import {FC, ReactNode} from "react";
import styles from "./section.module.scss";

type SectionProps = {
	title: string;
	className?: string;
	children: ReactNode;
}

export const Section:FC<SectionProps> = ({title, className, children}) => {
	return (
		<div className={styles.section + " " + className}>
			<div className={styles.title}>
				<h3>{title}</h3>
			</div>
			<div className={styles.content}>
				{children}
			</div>
		</div>
	)
}