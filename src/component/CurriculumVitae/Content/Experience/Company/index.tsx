import {FC, ReactNode} from "react";
import styles from "./company.module.scss";

type CompanyProps = {
	companyName: string;
	position: string;
	children: ReactNode;
}

export const Company:FC<CompanyProps> = ({
	companyName,
	position,
	children
}) => {
	return (
		<div className={styles.company}>
			<h3 className={styles["company-name"]}>{companyName}</h3>
			<span className={styles["company-position"]}>{position}</span>
			<div className={styles["company-project"]}>
				{children}
			</div>
		</div>
	)
}