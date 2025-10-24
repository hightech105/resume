import {createContext} from "react";

type FormContextType = {
	fieldValues: Record<string, any>;
	setFieldValues: (fieldValues: Record<string, any>) => void;
	setFieldValue: (name: string, value: any) => void;
}

const formContextInitialValue: FormContextType = {
	fieldValues: {},
	setFieldValues: () => {
	},
	setFieldValue: () => {
	},
};

export const FormContext = createContext(formContextInitialValue);
