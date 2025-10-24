import {ChangeEvent, FC, TextareaHTMLAttributes, useContext} from "react";
import {FormContext} from "../../FormContext";
import styles from "./formArea.module.scss";

type FormAreaProps = {
	label: string;
	name: string;
}

export const FormArea:FC<FormAreaProps & TextareaHTMLAttributes<HTMLTextAreaElement>> = ({
  label,
	name,
 ...rest
}) => {
	const { fieldValues, setFieldValue } = useContext(FormContext);
	
	const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		if (name) {
			setFieldValue(name, event.target.value);
		}
	}
	
	return (
		<div className={styles["form-text-area"]}>
			<label>{label}</label><br/>
			<textarea value={fieldValues[name] ?? ""} onChange={handleChange} {...rest}/>
		</div>
	)
}