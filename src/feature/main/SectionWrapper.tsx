import {useGSAP} from "@gsap/react";
import {DoubleLeftOutline, DoubleRightOutline} from "assets/icons";
import classNames from "classnames";
import {timelineScroll} from "libs/gsap";
import {FC, ReactNode, useRef} from "react";

type SectionWrapperProps = {
  sectionId: string;
  className?: string;
  title: string;
  children?: ReactNode;
};

export const SectionWrapper: FC<SectionWrapperProps> = ({
  sectionId,
  className,
  title,
  children,
}) => {
  const titleRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!titleRef.current) return;
    const titleElement = titleRef.current;
    const titleText = titleElement.querySelector(".title-text");
    const icons = titleElement.querySelectorAll("svg");
    const lines = titleElement.querySelectorAll(".line");
    const timeline = timelineScroll(titleElement);
    applyTitleTextTween(timeline, titleText);
    applyIconTween(timeline, icons);
    applyLineTween(timeline, lines);
  });

  const applyTitleTextTween = (
    timeline: GSAPTimeline,
    target: GSAPTweenTarget
  ) => {
    timeline.fromTo(
      target,
      {
        scale: 0,
        opacity: 0,
      },
      { scale: 1, opacity: 1 }
    );
  };

  const applyIconTween = (timeline: GSAPTimeline, target: GSAPTweenTarget) => {
    timeline.fromTo(
      target,
      {
        scale: 0,
      },
      {
        scale: 1
      }
    );
  };

  const applyLineTween = (timeline: GSAPTimeline, target: GSAPTweenTarget) => {
    timeline.fromTo(
      target,
      {
        flex: 0,
      },
      { flex: 1, duration: 1 }
    );
  };

  return (
    <div id={sectionId} className={classNames("section", className)}>
      <div ref={titleRef} className="title">
        <div className="line"></div>
        <DoubleRightOutline />
        <h3 className="title-text">{title}</h3>
        <DoubleLeftOutline />
        <div className="line"></div>
      </div>
      {children}
    </div>
  );
};
