import classNames from "classnames";
import ListSwitchButton from "component/ListSwitchButton";
import {ABOUT, CONTACT, EXPERIENCE, HOME, REPOSITORY, SKILL} from "feature/main/sections";
import {FC, useEffect, useRef, useState} from "react";
import {Link} from "react-scroll";
import styles from "./header.module.scss";
import {useTranslation} from "react-i18next";

export const Menu: FC = () => {
	const menuRef = useRef<HTMLDivElement>(null);
	const [openMobileMenu, setOpenMobileMenu] = useState(false);
	
	const {t} = useTranslation("");
	
	useEffect(() => {
		const windowClick = (event: MouseEvent) => {
			if (openMobileMenu && !menuRef.current?.contains(event.target as Node)) {
				closeMobileMenu();
			}
		};
		
		window.addEventListener("click", windowClick);
		return () => window.removeEventListener("click", windowClick);
	}, [openMobileMenu]);
	
	const closeMobileMenu = () => {
		setOpenMobileMenu(false);
	};
	
	return (
		<div
			ref={menuRef}
			className={classNames(styles.menu, {[styles.active]: openMobileMenu})}
		>
			<ListSwitchButton active={openMobileMenu} setActive={setOpenMobileMenu}/>
			<ul>
				<li>
					<Link to={HOME} smooth duration={500}>
						{t("header.menu.home")}
					</Link>
				</li>
				<li>
					<Link to={ABOUT} smooth duration={500}>
						{t("header.menu.about")}
					</Link>
				</li>
				{/*<li>*/}
				{/*  <Link to={ALBUM} smooth duration={500}>*/}
				{/*    Album*/}
				{/*  </Link>*/}
				{/*</li>*/}
				<li>
					<Link to={SKILL} smooth duration={500}>
						{t("header.menu.skill")}
					</Link>
				</li>
				<li>
					<Link to={EXPERIENCE} smooth duration={500}>
						{t("header.menu.experience")}
					</Link>
				</li>
				<li>
					<Link to={REPOSITORY} smooth duration={500}>
						{t("header.menu.repository")}
					</Link>
				</li>
				<li>
					<Link to={CONTACT} smooth duration={500}>
						{t("header.menu.contact")}
					</Link>
				</li>
			</ul>
		</div>
	);
};
