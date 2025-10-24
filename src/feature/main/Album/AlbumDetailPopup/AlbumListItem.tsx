import { FC } from "react";
import styles from "./albumDetailPopup.module.scss";

type AlbumListItemProps = {
  src: string;
  alt: string;
  isActive: boolean;
  handleChoose: () => void;
};

export const AlbumListItem: FC<AlbumListItemProps> = ({
  src,
  alt,
  isActive,
  handleChoose,
}) => (
  <div
    className={`${styles["album-list-item"]} ${
      isActive ? styles["active"] : ""
    }`}
    onClick={handleChoose}
  >
    <img src={src} alt={alt} />
  </div>
);
