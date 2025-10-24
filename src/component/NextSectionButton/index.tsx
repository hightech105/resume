import {ComponentPropsWithoutRef, FC, forwardRef} from "react";
import styles from "./nextSectionButton.module.scss";
import {CaretDownOutLine} from "assets/icons";
import {scrollInView} from "common/util";

interface NextSectionButtonProps extends ComponentPropsWithoutRef<any> {
	title?: string;
	path?: string;
}

const NextSectionButton: FC<NextSectionButtonProps> = forwardRef<HTMLDivElement, NextSectionButtonProps>(({
  title,
  path
}, ref) => {
	const handleGoToPath = () => {
		if (!path) return;
		scrollInView(path);
	};
	
	return (
		<div
			className={styles["next-section-button"]}
			ref={ref}
			style={{
				cursor: path ? "pointer" : "default",
			}}
			onClick={handleGoToPath}
		>
			{title && (
				<div className={styles.title}>
					<span>{title}</span>
				</div>
			)}
			<CaretDownOutLine/>
		</div>
	);
});

export default NextSectionButton;
