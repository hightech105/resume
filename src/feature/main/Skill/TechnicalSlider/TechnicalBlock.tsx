import {FC} from "react";
import styles from "./technicalSlider.module.scss";

type TechnicalBlockProps = {
	imageUrl: string;
	caption: string;
}

export const TechnicalBlock: FC<TechnicalBlockProps> = ({
  imageUrl,
  caption
}) => {
	return (
		<div className={styles.block}>
			<div className={styles["img-wrapper"]}>
				<img src={imageUrl} alt={caption}/>
			</div>
			<span>{caption}</span>
		</div>
	)
}