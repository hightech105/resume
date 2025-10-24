import {FC} from "react";
import {Project} from "../Project";

export const KnowledgePortalGateway:FC = () => {
	return (
		<Project projectName={"Knowledge Portal Gateway"} startTime={"09/2024"} endTime={"now"} role={"Software developer"}>
			<p>
				An IoT project centered around using a QR code scanner to control door access.
			</p>
			<ul>
				<li>
					<strong>Technologies:</strong> Python, NanoPi using Armbian linux operating system
				</li>
				<li>
					<strong>Team size:</strong> 1
				</li>
				<li>
					<strong>Role:</strong> Develop the device's operations according to the client's design as outlined in Notion.
				</li>
				<li>
					<strong>Result:</strong> I have completed the functionalities requested by the client.
				</li>
			</ul>
		</Project>
	)
}