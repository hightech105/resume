import {FC} from "react";
import {Section} from "../Section";
import {EducationItem} from "./EducationItem";

export const Education: FC = () => {
	return (
		<Section title={"Education"}>
			<EducationItem startYear={2019} endYear={2023} university={"Nong Lam University"}>
				<ul>
					<li>Information Technology</li>
					<li>GPA: 3.19/4.0</li>
				</ul>
			</EducationItem>
		</Section>
	)
}