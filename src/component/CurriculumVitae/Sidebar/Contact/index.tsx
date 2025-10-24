import {FC} from "react";
import {Section} from "../Section";
import {contactData} from "./contactData";
import {ContactItem} from "./ContactItem";
import styles from "./contact.module.scss";

export const Contact: FC = () => {
	return (
		<Section title={"Contact"} className={styles.contact}>
			<ul>
				{
					contactData.map((data, index) => (
						<ContactItem
							key={index}
							icon={<data.icon />}
							link={data.link}
							content={data.content}
						/>
					))
				}
			</ul>
		</Section>
	)
}