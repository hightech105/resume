import {FC, FormEvent, FormHTMLAttributes, PropsWithChildren, useState} from "react";
import {FormContext} from "./FormContext";

type FormProps = {
	handleSubmit?: (
		fieldValues: Record<string, any>,
		resetFields: () => void
	) => void;
}

const Form:FC<FormProps & PropsWithChildren & FormHTMLAttributes<HTMLFormElement>> = ({
	handleSubmit,
	children,
	...rest
}) => {
	const [fieldValues, setNewFieldValues] = useState<Record<string, any>>({});
	
	const setFieldValue = (name: string, value: any) => {
		setNewFieldValues({...fieldValues, [name]: value});
	}
	
	const setFieldValues = (newFieldValues: Record<string, any>) => {
		setNewFieldValues({
			...fieldValues,
			newFieldValues
		});
	}
	
	const resetFields = () => {
		setNewFieldValues({});
	}
	
	const submit = (e: FormEvent) => {
		e.preventDefault();
		handleSubmit?.(fieldValues, resetFields);
	}
	
	return (
		<FormContext.Provider value={{
			fieldValues,
			setFieldValues,
			setFieldValue
		}}>
			<form
				{...rest}
				onSubmit={submit}
			>
				{children}
			</form>
		</FormContext.Provider>
	)
}

export default Form;