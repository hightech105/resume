import {SectionWrapper} from "../SectionWrapper";
import React, {FC, useState} from "react";
import Form from "component/Form";
import {FormArea, FormInput, FormSubmit} from "component/Form/FormItem";
import styles from "./contact.module.scss";
import emailjs from '@emailjs/browser';
import mailConfig from "mail/config.json";
import {isEmail} from "common/util";
import {useTranslation} from "react-i18next";
import {toast} from "react-toastify";
import {Loading} from "../../../component/Loading";
import classNames from "classnames";

const Contact: FC = () => {
	const [isSendingMail, setSendingMail] = useState<boolean>(false);
	const {t} = useTranslation();
	
	const handleSubmit = (fieldValues: Record<string, any>, resetFields: () => void) => {
		setSendingMail(true);
		if (!isValid(fieldValues)) {
			setSendingMail(false);
			return;
		}
		sendMailFeedback(fieldValues, resetFields);
	}
	
	const isValid = (fieldValues: Record<string, any>) => {
		const defaultField = {
			name: t("contact.field.name.label"),
			email: t("contact.field.emailAddress.label"),
			subject: t("contact.field.subject.label"),
			message: t("contact.field.message.label")
		};
		
		for (let [key, value] of Object.entries(defaultField)) {
			if (!fieldValues[key]) {
				toast(t("contact.requiredError", {fieldName: value}), {
					theme: "colored",
					type: "error",
				});
				return false;
			}
			if (key === "email" && !isEmail(fieldValues[key])) {
				toast(t("contact.notValidEmail"), {
					theme: "colored",
					type: "error",
				});
				return false;
			}
		}
		return true;
	}
	
	const sendMailThankyou = async  (fieldValues: Record<string, any>) => {
		const mailForm = {
			toName: fieldValues["name"],
			toEmail: fieldValues["email"],
		}
		
		await emailjs.send(mailConfig.mailService, mailConfig.mailThankYouTemplate, mailForm, {
				publicKey: mailConfig.publicKey,
		});
	}
	
	const sendMailFeedback = (fieldValues: Record<string, any>, resetFields: () => void) => {
		toast(t("contact.sendingFeedbackMail"), {
			theme: "colored",
			type: "info"
		});
		const mailForm = {
			fromName: fieldValues["name"],
			replyTo: fieldValues["email"],
			subject: fieldValues["subject"],
			message: fieldValues["message"],
		}
		emailjs
			.send(mailConfig.mailService, mailConfig.mailFeedbackTemplate, mailForm, {
				publicKey: mailConfig.publicKey,
			})
			.then(
				async () => {
					toast(t("contact.sentFeedbackMail"),{
						theme: "colored",
						type: "success",
					});
					setSendingMail(false);
					resetFields();
					await sendMailThankyou(fieldValues);
				},
				(error) => {
					toast(error,{
						theme: "colored",
						type: "error",
					});
					setSendingMail(false);
				},
			);
	}
	
	return (
		<SectionWrapper sectionId={"contact"} title={t("contact.title")}>
			<div className={classNames(styles["form-wrapper"], {[styles.loading]: isSendingMail}) }>
				{
					isSendingMail && <Loading />
				}
				<Form handleSubmit={handleSubmit}>
					<FormInput label={t("contact.field.name.label")} name={"name"} placeholder={t("contact.field.name.placehoder")}/>
					<FormInput label={t("contact.field.emailAddress.label")} name={"email"} placeholder={"example@example.com"}/>
					<FormInput label={t("contact.field.subject.label")} name={"subject"} placeholder={t("contact.field.subject.placehoder")}/>
					<FormArea label={t("contact.field.message.label")} name={"message"} placeholder={t("contact.field.message.placehoder")}/>
					<FormSubmit isLoading={isSendingMail}> {t("contact.sendFeedback")} </FormSubmit>
				</Form>
			</div>
		</SectionWrapper>
	)
}

export default Contact;