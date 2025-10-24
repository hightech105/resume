import {FC} from "react";
import {Company} from "../Company";
import {ShoppingSystem} from "./ShoppingSystem";
import {UrikataSystem} from "./UrikataSystem";
import {KnowledgePortal} from "./KnowledgePortal";
import {KnowledgePortalGateway} from "./KnowledgePortalGateway";

export const FujinetSystemJSC:FC = () => {
	return (
		<Company companyName={"Fujinet System JSC"} position={"Software developer"}>
			<ShoppingSystem />
			<UrikataSystem />
			<KnowledgePortal />
			<KnowledgePortalGateway />
		</Company>
	)
}