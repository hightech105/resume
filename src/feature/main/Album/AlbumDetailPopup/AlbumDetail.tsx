import { FC, useEffect, useRef } from "react";
import { AlbumType } from "../type";
import styles from "./albumDetailPopup.module.scss";

type AlbumDetailProps = {
  album: AlbumType;
};

export const AlbumDetail: FC<AlbumDetailProps> = ({ album }) => {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef) {
      const activeClassName = styles.active;
      imgRef.current?.classList.add(activeClassName);
      setTimeout(() => {
        imgRef.current?.classList.remove(activeClassName);
      }, 500);
    }
  }, [album]);

  return (
    <div className={styles["album-detail"]}>
      <img ref={imgRef} src={album.src} alt={album.title} />
    </div>
  );
};
