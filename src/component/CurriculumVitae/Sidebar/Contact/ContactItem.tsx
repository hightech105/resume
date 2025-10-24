import {FC, ReactNode} from "react";

type ContactItemProps = {
	icon?: ReactNode;
	content?: string;
	link?: string;
}

export const ContactItem: FC<ContactItemProps> = ({icon, content, link}) => (
	<li>
		<div>
			{icon}
		</div>
		<div>
			{link ? (
				<a href={link}>{content}</a>
			) : (
				content
			)}
		</div>
	</li>
)
