import React, {FC, useEffect, useRef, useState} from "react";
import styles from "./fab.module.scss";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

type FABProps = {
  icon?: React.ReactNode;
  children?: React.ReactNode;
};

const FAB: FC<FABProps> = ({ icon, children }) => {
  const fabRef = useRef<HTMLDivElement>(null);
  const fabButtonRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    const clickOutside = (event: any) => {
      if (fabRef.current && !fabRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    window.addEventListener("click", clickOutside)
    return () => {
      window.removeEventListener("click", clickOutside);
    };
  }, []);

  useGSAP(() => {
    gsap.to(
      fabButtonRef.current,
      {
        rotate: isOpen ? "0deg" : "180deg",
      }
    )
  }, {dependencies: [isOpen]})
  
  const toggleFab = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div ref={fabRef} className={styles["fab-container"]}>
      <button ref={fabButtonRef} className={styles["fab"]} onClick={toggleFab}>
        {icon}
      </button>
      {isOpen && (
        <div className={styles["fab-menu"]}>
          {React.Children.map(children, (child, index) => (
            <div
              className={styles["fab-child"]}
              style={{ bottom: 80 * (index + 1) }}
            >
              {child}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FAB;
