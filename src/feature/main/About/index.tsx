import { useGSAP } from "@gsap/react";
import Button from "component/Button";
import { useMultipleRef } from "hook";
import { timelineScroll } from "libs/gsap";
import { FC } from "react";
import { SectionWrapper } from "../SectionWrapper";
import styles from "./about.module.scss";
import {useNavigate} from "react-router-dom";
import { CV } from "common/path";
import {useTranslation} from "react-i18next";

enum refNames {
  about = "about",
  content = "content",
  button = "button",
}

const About: FC = () => {
  const { getRef, setRef } = useMultipleRef<HTMLDivElement | null>();
  const navigate = useNavigate();
  const {t} = useTranslation();

  useGSAP(() => {
    const timeline = timelineScroll(getRef(refNames.about));
    applyContentTween(timeline);
    applyButtonTween(timeline);
  });

  const applyContentTween = (timeline: GSAPTimeline) => {
    timeline.fromTo(
      getRef(refNames.content),
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0 }
    );
  };

  const applyButtonTween = (timeline: GSAPTimeline) => {
    timeline.fromTo(
      getRef(refNames.button),
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1 }
    );
  };
  
  const handleMoveViewCV = () => {
    navigate(CV);
  }

  return (
    <SectionWrapper
      sectionId="about"
      title={t("about.title")}
      className={styles["about"]}
    >
      <div ref={(element) => setRef(refNames.about, element)}>
        <div
          ref={(element) => setRef(refNames.content, element)}
          className={styles["content"]}
        >
          <p>{t("about.content")}</p>
        </div>
        <div
          ref={(element) => setRef(refNames.button, element)}
          className={styles["view-cv-button"]}
        >
          <Button onClick={handleMoveViewCV}>{t("about.viewCv")}</Button>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
