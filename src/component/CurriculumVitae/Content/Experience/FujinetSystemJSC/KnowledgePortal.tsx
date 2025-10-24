import {FC} from "react";
import {Project} from "../Project";

export const KnowledgePortal: FC = () => {
	return (
		<Project projectName={"Knowledge Portal"} startTime={"04/2023"} endTime={"Now"} role={"Software developer"}>
			<p>
				This project provides services for universities in Japan.<br/>
				At the beginning of this project, I was lucky to participate as an intern with four colleagues. We finished our internship and have been contracted by the client ever since.
			</p>
			<ul>
				<li>
					<strong>Technologies:</strong> ReactJS, Yii2 framework, MySQL, Docker, AWS.
				</li>
				<li>
					<strong>Team size:</strong> 10
				</li>
				<li>
					<strong>Role:</strong> My client will create issues related to the system's functionalities on GitHub Issues. These will include UX and UI designs, as well as the logic of the features. I will complete these issues and deliver them back to the client.
				</li>
				<li>
					<strong>Issues:</strong> Single sign-on with SAML protocol using Keycloak IDP, Multiple-language using i18next and DeepL API, Content Management System with EditorJS, Optimizing the system's processing, Update version of library, Additional operations of the system,etc.
				</li>
				<li>
					<strong>Result:</strong> I have effectively completed all the tasks assigned to me and received excellent feedback from my leader. The client acknowledged our contributions and has renewed the contract during our working relationship. Furthermore, the client has entrusted me with additional large-scale projects.
				</li>
				<li>
					<strong>Detail of project:</strong> <a href={"https://www.siba-service.jp/service/knowledge-portal/"}>https://www.siba-service.jp/service/knowledge-portal/</a>
				</li>
			</ul>
		</Project>
	)
}