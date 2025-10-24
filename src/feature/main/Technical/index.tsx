import { FC, useRef } from "react";
import { SectionWrapper } from "../SectionWrapper";
import styles from "./technical.module.scss";
import { technicalData } from "./data";
import { TechnicalRow } from "./TechnicalRow";
import { useGSAP } from "@gsap/react";
import { timelineScroll } from "libs/gsap";
import { isEvenNumber } from "common/util";

const Technical: FC = () => {
  const technicalContainerRef = useRef<HTMLDivElement | null>(null);
  const imageRowRef = useRef<(HTMLDivElement | null)[]>([]);

  const setRef = (index: number) => (element: HTMLDivElement | null) => {
    imageRowRef.current[index] = element;
  };

  useGSAP(() => {
    const timeline = timelineScroll(technicalContainerRef.current);
    applyImageTween(timeline);
  });

  const applyImageTween = (timeline: GSAPTimeline) => {
    imageRowRef.current.forEach((element, index) => {
      timeline.fromTo(
        element,
        { opacity: 0, x: isEvenNumber(index) ? -100 : 100 },
        { opacity: 1, x: 0, duration: 0.5 }
      );
    });
  };

  return (
    <SectionWrapper
      sectionId="technical"
      title="TECHNICAL"
      className={styles.technical}
    >
      <div ref={technicalContainerRef}>
        {technicalData.map((technicalRow, index) => {
          const setElement = setRef(index);
          return (
            <TechnicalRow
              key={index}
              setRef={setElement}
              technicalDataSource={technicalRow}
            />
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default Technical;
