import { FC } from "react";
import styles from "./header.module.scss";
import { Link } from "react-scroll";
import { HOME } from "../sections";

export const Signature: FC = () => (
  <div className={styles.signature}>
    <Link to={HOME} smooth duration={500}>
      Đặng Thiên Hoà
    </Link>
  </div>
);
