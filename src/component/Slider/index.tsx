import {FC, PointerEventHandler, ReactNode, useMemo, useState} from "react";
import styles from "./slider.module.scss";
import classNames from "classnames";
import { DoubleLeftOutline, DoubleRightOutline } from "assets/icons";
import { useGSAP } from "@gsap/react";
import { useMultipleRef } from "hook";
import { timelineScroll } from "libs/gsap";
import gsap from "gsap";

type SliderProps = {
  items: ReactNode[];
};

enum refNames {
  slider = "slider",
  content = "content",
  prevButton = "pre-btn",
  nextButton = "next-btn",
  indicator = "indicator",
}

const Slider: FC<SliderProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDrag, setDrag] = useState(false);
  const [startX, setStartX] = useState(-1);
  const { getRef, setRef } = useMultipleRef<HTMLDivElement | null>();
  const { contextSafe } = useGSAP();

  useGSAP(() => {
    const timeline = timelineScroll(getRef(refNames.slider));
    applyContentTween(timeline);
    applyPreButton(timeline);
    applyNextButton(timeline);
    applyIndicatorButton(timeline);
  });

  const applyContentTween = (timeline: GSAPTimeline) => {
    timeline.fromTo(
      getRef(refNames.content),
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0 }
    );
  };

  const applyPreButton = (timeline: GSAPTimeline) => {
    timeline.fromTo(
      getRef(refNames.prevButton),
      { opacity: 0, x: -40 },
      { opacity: 1, x: 0 }
    );
  };

  const applyNextButton = (timeline: GSAPTimeline) => {
    timeline.fromTo(
      getRef(refNames.nextButton),
      { opacity: 0, x: 40 },
      { opacity: 1, x: 0 }
    );
  };

  const applyIndicatorButton = (timeline: GSAPTimeline) => {
    timeline.fromTo(
      getRef(refNames.indicator),
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0 }
    );
  };

  const handlePreButtonMouseMove = contextSafe(() => {
    gsap.to(getRef(refNames.prevButton), {
      x: 10,
      opacity: 0.5,
      animationTimingFunction: "ease-out",
      duration: 0.1,
    });
  });

  const handlePreButtonMouseLeave = contextSafe(() => {
    gsap.to(getRef(refNames.prevButton), {
      x: 0,
      opacity: 1,
      duration: 0.1,
    });
  });

  const handleNextButtonMouseMove = contextSafe(() => {
    gsap.to(getRef(refNames.nextButton), {
      x: -10,
      opacity: 0.5,
      animationTimingFunction: "ease-out",
      duration: 0.1,
    });
  });

  const handleNextButtonMouseLeave = contextSafe(() => {
    gsap.to(getRef(refNames.nextButton), {
      x: 0,
      opacity: 1,
      duration: 0.1,
    });
  });

  const previousIndex = useMemo(
    () => (currentIndex <= 0 ? items.length - 1 : currentIndex - 1),
    [currentIndex, items.length]
  );
  const nextIndex = useMemo(
    () => (currentIndex >= items.length - 1 ? 0 : currentIndex + 1),
    [currentIndex, items.length]
  );

  const previousHandle = () => {
    setCurrentIndex((currentIndex) =>
      currentIndex <= 0 ? items.length - 1 : currentIndex - 1
    );
  };

  const nextHandle = () => {
    setCurrentIndex((currentIndex) =>
      currentIndex >= items.length - 1 ? 0 : currentIndex + 1
    );
  };

  const handlePointerDown: PointerEventHandler<HTMLDivElement> = (event) => {
    setDrag(true);
    setStartX(event.clientX);
  };

  const handlePointerUp: PointerEventHandler<HTMLDivElement> = (event) => {
    if (isDrag) {
      const endX = event.clientX;
      const movementX = endX - startX;
      if (movementX > 0) {
        previousHandle();
      }
      if (movementX < 0) {
        nextHandle();
      }
      setDrag(false);
    }
  };

  return (
    <div
      ref={(element) => setRef(refNames.slider, element)}
      className={styles["slider"]}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
    >
      <div
        ref={(element) => setRef(refNames.content, element)}
        className={styles["slider-content"]}
      >
        {items.map((items, index) => {
          const className = classNames(styles["slider-item-wrapper"], {
            [styles["item-previous"]]: previousIndex === index,
            [styles["item-current"]]: currentIndex === index,
            [styles["item-next"]]: nextIndex === index,
          });
          return (
            <div key={index} className={className}>
              {items}
            </div>
          );
        })}
      </div>
      <div
        ref={(element) => setRef(refNames.prevButton, element)}
        className={styles["previous-button"]}
        onClick={previousHandle}
        onMouseMove={handlePreButtonMouseMove}
        onMouseLeave={handlePreButtonMouseLeave}
      >
        <DoubleLeftOutline />
      </div>
      <div
        ref={(element) => setRef(refNames.indicator, element)}
        className={styles["indicator"]}
      >
        {items.map((_, index) => (
          <div
            key={index}
            className={classNames(styles["dot"], {
              [styles["dot-active"]]: currentIndex === index,
            })}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
      <div
        ref={(element) => setRef(refNames.nextButton, element)}
        className={styles["next-button"]}
        onClick={nextHandle}
        onMouseMove={handleNextButtonMouseMove}
        onMouseLeave={handleNextButtonMouseLeave}
      >
        <DoubleRightOutline />
      </div>
    </div>
  );
};

export default Slider;
