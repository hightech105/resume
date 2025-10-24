import {FC} from "react";
import {Section} from "../Section";
import {achievementData} from "./achievementData";
import {AchievementItem} from "./AchievementItem";

export const Achievement: FC = () => {
	return (
		<Section title={"Achievement"}>
			{
				achievementData.map((data, index) => (
					<AchievementItem key={index} company={data.company} values={data.values}/>
				))
			}
		</Section>
	)
}