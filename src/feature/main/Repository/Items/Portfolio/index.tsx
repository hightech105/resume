import { FC } from "react";
import styles from "./portfolio.module.scss";
import { ReactLogo } from "assets/images/logo";

export const Portfolio: FC = () => {
  return (
    <div className={styles["portfolio"]}>
      <div className={styles["title"]}>
        <h3>Resume</h3>
      </div>
      <div className={styles["content"]}>
        <ul>
          <li className={styles["field"]}>
            <label>Summary: </label> The React Resume Website
          </li>
          <li className={styles["field"]}>
            <label>Github: </label>{" "}
            <a href="https://github.com/chau-nm/chau-nm-resume">
              https://github.com/chau-nm/chau-nm-resume
            </a>
          </li>
          <li className={styles["field"]}>
            <label>Technical: </label> <img src={ReactLogo} alt="" />
          </li>
          <li className={styles["field"]}>
            <p>
              The reference for this project is the website you are currently
              viewing.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};
