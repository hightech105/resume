import {ChangeEvent, FC, InputHTMLAttributes, useContext} from "react";
import {FormContext} from "../../FormContext";
import styles from "./formInput.module.scss";

type FormInputProps = {
	label: string;
	name: string;
}

export const FormInput:FC<FormInputProps & InputHTMLAttributes<HTMLInputElement>> = ({
	label,
	name,
	...rest
}) => {
	const { fieldValues, setFieldValue } = useContext(FormContext);
	
	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		if (name) {
			setFieldValue(name, event.target.value);
		}
	}
	
	return (
		<div className={styles["form-input"]}>
			<label>{label}</label><br/>
			<input value={fieldValues[name] ?? ""} onChange={handleChange} {...rest}/>
		</div>
	)
}