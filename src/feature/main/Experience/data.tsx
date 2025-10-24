import {ExperienceSectionType} from "./type";
import {StepContentFrame} from "./Section/StepContentFrame";
import {
	AWSLogo,
	DockerLogo,
	KnockoutJS,
	MySQLLogo,
	PostgreLogo,
	PythonLogo,
	ReactLogo,
	SpringLogo,
	ThymeleafLogo,
	Yii2Logo,
	EPAMLogo,
	FTPLogo,
	NextJSLogo,
	MongoDBLogo,
	ExpressJSLogo,
	JestLogo,
	TMALogo,
	NodeLogo
} from "assets/images/logo";
import {TFunction} from "i18next";

export const experienceData = (t: TFunction): ExperienceSectionType[] => [
	{
		title: (
			<>
				<img src={EPAMLogo} alt="" height={"30px"} style={{borderRadius: 3}}/>
				<span>EPAM Systems, Inc (May 2021 - Aug 2025)</span>
			</>
		),
		stepData: [
			{
				dotTitle: "Full Stack Developer | Project Manager",
				content: (
					<StepContentFrame
						projectName="Full Stack Developer | Project Manager"
						position={""}
						summary={t("experience.knowledgePortal.summary")}
						projectTechnologyLogos={[
							NextJSLogo,
							MongoDBLogo,
							ExpressJSLogo,
							DockerLogo,
							JestLogo,
						]}
						teamSize={10}
						role={t("experience.knowledgePortal.role")}
						issues={t("experience.knowledgePortal.issues")}
						result={t("experience.knowledgePortal.result")}
						projectLink="https://www.epam.com/"
					/>
				),
			},
		],
	},
	{
		title: (
			<>
				<img src={FTPLogo} alt="" height={"30px"} style={{borderRadius: 3}}/>
				<span>FPT Software (Jul 2018 - Dec 2019)</span>
			</>
		),
		stepData: [
			{
				dotTitle: "Full Stack Developer",
				content: (
					<StepContentFrame
						projectName="Full Stack Developer"
						position={""}
						summary={t("experience.ftpsoftware.summary")}
						projectTechnologyLogos={[
							ReactLogo,
							NextJSLogo,
							PythonLogo,
							MySQLLogo,
							AWSLogo,
						]}
						teamSize={5}
						role={t("experience.ftpsoftware.role")}
						issues={t("experience.ftpsoftware.issues")}
						result={t("experience.ftpsoftware.result")}
						projectLink="https://fptsoftware.com/"
					/>
				),
			},
		],
	},
	{
		title: (
			<>
				<img src={TMALogo} alt="" height={"30px"} style={{borderRadius: 3}}/>
				<span>TMA Solutions (Jun 2017 - Jun 2018)</span>
			</>
		),
		stepData: [
			{
				dotTitle: "Full Stack Developer",
				content: (
					<StepContentFrame
						projectName="Junior Full Stack Developer"
						position={""}
						summary={t("experience.tmasolution.summary")}
						projectTechnologyLogos={[
							ReactLogo,
							NodeLogo,
							MongoDBLogo,
						]}
						teamSize={5}
						role={t("experience.tmasolution.role")}
						issues={t("experience.tmasolution.issues")}
						result={t("experience.tmasolution.result")}
						projectLink="https://www.tmasolutions.com/"
					/>
				),
			},
		],
	},
];
