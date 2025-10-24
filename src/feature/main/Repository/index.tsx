import {FC, useMemo, useRef} from "react";
import {SectionWrapper} from "../SectionWrapper";
import {getData} from "./data";
import {RepositoryItem} from "./RepositoryItem";
import styles from "./repository.module.scss";
import {useGSAP} from "@gsap/react";
import {tweenFromToScroll} from "libs/gsap";
import {ButtonLink} from "component/ButtonLink";
import {useTranslation} from "react-i18next";

const Repository: FC = () => {
	
	const {t} = useTranslation();
	const repoRef = useRef(null);
	const moreButtonRef = useRef(null);
	
	const data = useMemo(() => getData(t), [t]);
	
	useGSAP(() => {
		applyRepoTween();
		applyMoreTween();
	})
	
	const applyRepoTween = () => {
		tweenFromToScroll(
			repoRef.current,
			{
				y: 10,
				opacity: 0
			},
			{
				y: 0,
				opacity: 1,
				duration: 1
			}
		);
	}
	
	const applyMoreTween = () => {
		tweenFromToScroll(
			moreButtonRef.current,
			{
				y: 10,
				opacity: 0
			},
			{
				y: 0,
				opacity: 1,
				duration: 1
			}
		);
	}
	
	return (
		<SectionWrapper sectionId="repository" title={t("repository.title")}>
			<div ref={repoRef} className={styles["item-wrapper"]}>
				{
					data.map((repo, index) => (
						<RepositoryItem
							key={index}
							name={repo.name}
							description={repo.description}
							technilogies={repo.technologies}
							link={repo.link}
						/>
					))
				}
			</div>
			<div ref={moreButtonRef} className={styles.more}>
				<ButtonLink href={"https://github.com/chau-nm"}>{t("repository.more")}</ButtonLink>
			</div>
		</SectionWrapper>
	);
};

export default Repository;
