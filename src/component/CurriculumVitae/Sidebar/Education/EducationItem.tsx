import React, {FC} from "react";
import styles from "./education.module.scss";

type EducationItemProps = {
	startYear: number;
	endYear: number;
	university: string;
	children: React.ReactNode;
}

export const EducationItem:FC<EducationItemProps> = ({
	startYear,
	endYear,
	university,
	children,
}) => {
	return (
		<div className={styles["education-item"]}>
			<span>{startYear} - {endYear}</span>
			<h3>{university}</h3>
			{children}
		</div>
	)
}