import React, {useRef, useState} from "react";
import styles from "./fab.module.scss";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

interface FabChildProps {
  icon?: React.ReactNode;
  children?: React.ReactNode;
  onClick?: () => void;
}

export const FABChild: React.FC<FabChildProps> = ({
  icon,
  children,
  onClick,
}) => {
  const fabRef = useRef(null);
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleChildFab = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = () => {
    onClick?.();
    children && toggleChildFab();
  };
  
  useGSAP(() => {
    gsap.fromTo(
      fabRef.current,
      {
        opacity: 0,
        y: 30
      },
      {
        opacity: 1,
        y: 0
      }
    );
  })

  return (
    <div ref={fabRef} className={styles["fab-child-container"]}>
      <button className={styles["fab-child-button"]} onClick={handleClick}>
        {icon}
      </button>
      {children && isOpen && (
        <div className={styles["fab-submenu"]}>{children}</div>
      )}
    </div>
  );
};
