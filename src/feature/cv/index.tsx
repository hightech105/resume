import {FC} from "react";
import styles from "./cv.module.scss";
import CurriculumVitae from "../../component/CurriculumVitae";

const CV: FC = () => {
	return (
		<div className={styles["cv-wrapper"]}>
			<CurriculumVitae />
		</div>
	)
}

export default CV;