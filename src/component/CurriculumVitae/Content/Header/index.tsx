import {FC} from "react";
import styles from "./header.module.scss";

export const Header: FC = () => {
	return (
		<div className={styles["header-wrapper"]}>
			<div className={styles.header}>
				<h1>
					NGUYEN <br />
					<span className={styles.name}>MINH CHAU</span>
				</h1>
				<span className={styles.position}>Software Developer</span>
			</div>
		</div>
	)
}