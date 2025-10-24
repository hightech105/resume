import React, { FC } from "react";
import styles from "./uiProblem.module.scss";
import { CSSLogo, HTMLLogo, JavaScriptLogo } from "assets/images/logo";

export const UIProblem: FC = () => {
  const technicalUrls = [HTMLLogo, CSSLogo, JavaScriptLogo];

  return (
    <div className={styles["ui-problem"]}>
      <div className={styles["title"]}>
        <h3>UI Problem</h3>
      </div>
      <div className={styles["content"]}>
        <ul>
          <li className={styles["field"]}>
            <label>Summary: </label> A project designed to elevate my frontend
            development skills.
          </li>
          <li className={styles["field"]}>
            <label>Github: </label>{" "}
            <a href="https://github.com/chau-nm/ui_problems">
              https://github.com/chau-nm/ui_problems
            </a>
          </li>
          <li className={styles["field"]}>
            <label>Technical: </label>{" "}
            <div className={styles["tech-item"]}>
              {technicalUrls.map((url, index) => (
                <img key={index} src={url} alt="" />
              ))}
            </div>
          </li>
          <li className={styles["field"]}>
            <p>At this project, I only coding with HTML, CSS, JS.</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
