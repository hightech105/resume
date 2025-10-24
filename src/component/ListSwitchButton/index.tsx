import { FC } from "react";
import styles from "./listSwitchButton.module.scss";
import classNames from "classnames";

type ListSwitchButtonProps = {
  active: boolean;
  setActive: (active: boolean) => void;
};

const ListSwitchButton: FC<ListSwitchButtonProps> = ({ active, setActive }) => {
  return (
    <div
      className={classNames(styles["button"], { [styles["active"]]: active })}
      onClick={() => {
        setActive(!active);
      }}
    >
      <div className={styles["line"]}></div>
      <div className={styles["line"]}></div>
      <div className={styles["line"]}></div>
    </div>
  );
};

export default ListSwitchButton;
