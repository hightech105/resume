import {FC, PropsWithChildren} from "react";
import styles from "./formSubmit.module.scss";
import Button from "component/Button";

type FormSubmitProps = {
	isLoading?: boolean;
}

export const FormSubmit: FC<PropsWithChildren & FormSubmitProps> = ({
  isLoading,
	children
}) => (
	<div className={styles["form-submit"]}>
		<Button type={"submit"} isLoading={isLoading}>{children}</Button>
	</div>
)
