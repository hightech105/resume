import { ArrowUpOutline } from "assets/icons";
import { FC } from "react";
import styles from "./scrollTopButton.module.scss";
import { animateScroll as scroll } from "react-scroll";

const ScrollTopButton: FC = () => {
  const handleScrollTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className={styles["scroll-top-btn"]} onClick={handleScrollTop}>
      <ArrowUpOutline />
    </div>
  );
};

export default ScrollTopButton;
