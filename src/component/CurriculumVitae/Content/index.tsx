import {FC} from "react";
import styles from "./content.module.scss";
import {Header} from "./Header";
import {ProfileSummary} from "./ProfileSummary";
import {Experience} from "./Experience";

export const Content: FC = () => {
	return (
		<div className={styles.content}>
			<Header />
			<ProfileSummary />
			<Experience />
		</div>
	)
}