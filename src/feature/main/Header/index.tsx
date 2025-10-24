import { FC, useEffect, useRef } from "react";
import styles from "./header.module.scss";
import { Menu } from "./Menu";
import { Signature } from "./Signature";

const Header: FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);

  const handleScrollWindows = () => {
    if (!headerRef.current) return;
    const header = headerRef.current;
    if (window.scrollY > 100) {
      header.classList.add(styles["header-fixed"]);
    } else {
      header.classList.remove(styles["header-fixed"]);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollWindows);

    return () => {
      window.removeEventListener("scroll", handleScrollWindows);
    };
  }, []);

  return (
    <div ref={headerRef} className={styles.header}>
      <Signature />
      <Menu />
    </div>
  );
};

export default Header;
