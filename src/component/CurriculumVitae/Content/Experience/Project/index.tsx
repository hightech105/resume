import {FC, ReactNode} from "react";
import styles from "./project.module.scss";

type ProjectProps = {
	projectName: string;
	startTime: string;
	endTime: string;
	role: string;
	children: ReactNode;
}

export const Project:FC<ProjectProps> = ({
	projectName,
	startTime,
	endTime,
	role,
	children
}) => {
	return (
		<div className={styles.project}>
			<div className={styles.step}></div>
			<div className={styles.content}>
				<div className={styles.head}>
					<h3>{projectName}</h3>
					<span>{startTime} - {endTime}</span>
				</div>
				<div className={styles.role}>{role}</div>
				<div className={styles.description}>
					{children}
				</div>
			</div>
		</div>
	)
}