import { FC } from "react";
import styles from "./section.module.scss";
import { useMultipleRef } from "hook";
import { useGSAP } from "@gsap/react";
import { timelineScroll } from "libs/gsap";

type StepProps = {
  dotTitle?: string;
  children?: React.ReactNode;
};

enum refNames {
  wrapper = "wrapper",
  dot = "dot",
  line = "line",
  content = "content",
}

export const Step: FC<StepProps> = ({ dotTitle, children }) => {
  const { getRef, setRef } = useMultipleRef<HTMLDivElement | null>();

  useGSAP(() => {
    const timeline = timelineScroll(getRef(refNames.wrapper));
    applyDotTween(timeline);
    applyLine(timeline);
    applyContent(timeline);
  });

  const applyDotTween = (timeline: GSAPTimeline) => {
    timeline.fromTo(
      getRef(refNames.dot),
      { opacity: 0, scale: 0 },
      { opacity: 1, scale: 1 }
    );
  };

  const applyLine = (timeline: GSAPTimeline) => {
    timeline.fromTo(
      getRef(refNames.line),
      { opacity: 0, height: 0 },
      { opacity: 1, height: "100%" }
    );
  };

  const applyContent = (timeline: GSAPTimeline) => {
    timeline.fromTo(
      getRef(refNames.content),
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0 }
    );
  };

  return (
    <div
      ref={(element) => setRef(refNames.wrapper, element)}
      className={styles["step-wrapper"]}
    >
      <div className={styles["step-left"]}>
        <div
          ref={(element) => setRef(refNames.dot, element)}
          className={styles.dot}
        >
          {dotTitle && <div className={styles["dot-title"]}>{dotTitle}</div>}
        </div>
        <div
          ref={(element) => setRef(refNames.line, element)}
          className={styles.line}
        ></div>
      </div>
      <div
        ref={(element) => setRef(refNames.content, element)}
        className={styles["step-right"]}
      >
        {children}
      </div>
    </div>
  );
};
