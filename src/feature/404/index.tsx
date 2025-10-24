import { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./pageNotFound.module.scss";

const PageNotFound: FC = () => {
  return (
    <div className={styles["page-not-found"]}>
      <h1>404</h1>
      <span>Page Fot Found</span>
      <br />
      <Link to={"/"}>Go Home</Link>
    </div>
  );
};

export default PageNotFound;
