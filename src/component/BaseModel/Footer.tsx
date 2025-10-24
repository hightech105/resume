import { FC, ReactNode } from "react";
import styles from "./baseModel.module.scss";

type FooterProps = {
  footerComponents: ReactNode[];
  footerAlign: "left" | "center" | "right";
};

export const Footer: FC<FooterProps> = ({ footerComponents, footerAlign }) => {
  const getJustify = () => {
    switch (footerAlign) {
      case "left":
        return "flex-start";
      case "center":
        return "center";
      case "right":
        return "flex-end";
    }
  };

  return (
    <div className={styles.footer} style={{ justifyContent: getJustify() }}>
      {footerComponents}
    </div>
  );
};
