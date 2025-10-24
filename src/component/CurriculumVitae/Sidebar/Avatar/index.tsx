import {FC} from "react";
import avatar from "assets/images/avatar.png";
import styles from "./avatar.module.scss";

export const Avatar: FC = () => {
	return (
		<div className={styles.avatar}>
			<img src={avatar} alt={""} width={"100%"}/>
		</div>
	)
}