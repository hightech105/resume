import {AnchorHTMLAttributes, FC, ReactNode} from "react";
import classNames from "classnames";
import styles from "./buttonLink.module.scss";

type ButtonLinkProps = {
	children?: ReactNode;
}

export const ButtonLink:FC<ButtonLinkProps & AnchorHTMLAttributes<HTMLAnchorElement>> = ({
	color,
	children,
	...rest
}) => {
	return (
		<a
			className={classNames(styles["button-link"], rest.className)}
			{...rest}
		>
			{children}
		</a>
	)
}