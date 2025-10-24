import { FC } from "react";
import styles from "./album.module.scss";

type AlbumItemProps = {
  src?: string;
  alt?: string;
  handleOpenAlbumDetail?: () => void;
  setRef: (element: HTMLDivElement | null) => void;
};

export const AlbumItem: FC<AlbumItemProps> = ({
  src,
  alt,
  handleOpenAlbumDetail,
  setRef,
}) => (
  <div
    ref={(element) => setRef(element)}
    className={styles["album-item"]}
    onClick={handleOpenAlbumDetail}
  >
    <img src={src} alt={alt} />
  </div>
);
