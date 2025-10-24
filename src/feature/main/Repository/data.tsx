import {
	CSSLogo,
	HTMLLogo,
	JavaScriptLogo,
	JavaSkill,
	Minesweeper, MySQLLogo, ReactLogo, SpringLogo,
	Tetris,
	TypeScriptLogo
} from "assets/images/logo";
import {TFunction} from "i18next";

export const getData = (t: TFunction) => [
	{
		name: "TetrisGame",
		description: (
			<p>
				<img src={Tetris} alt={""} height={15}/> {" "}
				{t("repository.tetrisGame")}
			</p>
		),
		technologies: [JavaSkill],
		link: "https://github.com/chau-nm/TetrisGame"
	},
	{
		name: "MinesweeperJava",
		description: (
			<p>
				<img src={Minesweeper} alt={""} height={15}/> {" "}
				{t("repository.minesweeperJava")}
			</p>
		),
		technologies: [JavaSkill],
		link: "https://github.com/chau-nm/MinesweeperJava"
	},
	{
		name: "ui_problems",
		description: t("repository.uiProblems"),
		technologies: [HTMLLogo, CSSLogo, JavaScriptLogo],
		link: "https://github.com/chau-nm/ui_problems"
	},
	{
		name: "leetcode_problems",
		description: t("repository.leetcodeProblems"),
		technologies: [JavaSkill, TypeScriptLogo],
		link: "https://github.com/chau-nm/leetcode_problems"
	},
	{
		name: "algorithms",
		description: t("repository.algorithms"),
		technologies: [JavaSkill, TypeScriptLogo],
		link: "https://github.com/chau-nm/algorithms"
	},
	{
		name: "kltn",
		description: t("repository.kltn"),
		technologies: [ReactLogo, SpringLogo, MySQLLogo],
		link: "https://github.com/chau-nm/kltn"
	}
]