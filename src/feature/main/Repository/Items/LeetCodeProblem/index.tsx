import React, { FC } from "react";
import styles from "./leetCodeProblem.module.scss";
import { LeetCodeLogo } from "assets/images/logo";

export const LeetCodeProblem: FC = () => {
  return (
    <div className={styles["leet-code-problem"]}>
      <div className={styles["title"]}>
        <h3>LeetCode Problem</h3>
      </div>
      <div className={styles["content"]}>
        <ul>
          <li className={styles["field"]}>
            <label>Summary: </label> A project aimed at enhancing my logical
            thinking skills.
          </li>
          <li className={styles["field"]}>
            <label>Github: </label>{" "}
            <a href="https://github.com/chau-nm/leetcode_problems">
              https://github.com/chau-nm/leetcode_problems
            </a>
          </li>
          <li className={styles["field"]}>
            <label>Technical: </label> <img src={LeetCodeLogo} alt="" />
          </li>
          <li className={styles["field"]}>
            <p>I code on LeetCode and push to GitHub using the LeetHub tool.</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
