import { FC } from "react";
import styles from "./technical.module.scss";

type TechnicalRowProps = {
  technicalDataSource: string[];
  setRef: (element: HTMLDivElement | null) => void;
};

export const TechnicalRow: FC<TechnicalRowProps> = ({
  technicalDataSource,
  setRef,
}) => (
  <div ref={(element) => setRef(element)} className={styles["technical-row"]}>
    <ul>
      {technicalDataSource.map((source, index) => {
        return (
          <li key={index}>
            <img src={source} alt="" />
          </li>
        );
      })}
    </ul>
  </div>
);
