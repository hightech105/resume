import {FC} from "react";
import styles from "./curriculumVitae.module.scss";
import {Sidebar} from "./Sidebar";
import {Content} from "./Content";

const CurriculumVitae: FC = () => {
	return (
		<div className={styles.cv}>
			<div className={styles["sidebar-wrapper"]}>
				<Sidebar/>
			</div>
			<div className={styles["content-wrapper"]}>
				<Content/>
			</div>
		</div>
	)
}

export default CurriculumVitae;