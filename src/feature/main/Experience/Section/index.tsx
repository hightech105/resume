import { useGSAP } from "@gsap/react";
import React, { FC, useRef } from "react";
import { ExperienceSectionStepType } from "../type";
import styles from "./section.module.scss";
import { Step } from "./Step";
import { tweenFromToScroll } from "libs/gsap";

type SectionProps = {
  title: string | React.ReactNode;
  stepData: ExperienceSectionStepType[];
};

const Section: FC<SectionProps> = ({ title, stepData }) => {
  const titleRef = useRef(null);

  useGSAP(() => {
    tweenFromToScroll(
      titleRef.current,
      { opacity: 0, scale: 0.7, x: -999 },
      { opacity: 1, scale: 1, x: 0 }
    );
  });

  return (
    <div className={styles.section}>
      <div ref={titleRef} className={styles["section-title"]}>
        {title}
      </div>
      <div className={styles["section-content"]}>
        {stepData.map((data, index) => (
          <Step key={index} dotTitle={data.dotTitle}>
            {data.content}
          </Step>
        ))}
      </div>
    </div>
  );
};

export default Section;
