import {FC} from "react";
import {Project} from "../Project";

export const UrikataSystem: FC = () => {
	return (
		<Project projectName={"Urikata system"} startTime={"03/2023"} endTime={"04/2023"} role={"Trial software developer"}>
			<p>
				This was a real project where my mentor assigned me specific functionalities to implement.
			</p>
			<ul>
				<li>
					<strong>Technologies:</strong> KnockoutJS, PostgreSQL
				</li>
				<li>
					<strong>Team size:</strong> 1
				</li>
				<li>
					<strong>Role:</strong> I received a source code that had several functionalities removed and detailed designs
					of those . I completed these functionalities and delivered the final work to my mentor.
				</li>
				<li>
					<strong>Result:</strong> I completed the project in about two weeks and was offered a full-time position early.
				</li>
			</ul>
		</Project>
	)
}