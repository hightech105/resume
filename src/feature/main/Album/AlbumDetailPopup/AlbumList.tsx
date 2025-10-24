import { FC } from "react";
import { AlbumType } from "../type";
import styles from "./albumDetailPopup.module.scss";
import { AlbumListItem } from "./AlbumListItem";

type AlbumListProps = {
  albumData: AlbumType[];
  imageIndex: number;
  setImageIndex: (index: number) => void;
};

export const AlbumList: FC<AlbumListProps> = ({
  albumData,
  imageIndex,
  setImageIndex,
}) => (
  <div className={styles["album-list"]}>
    {albumData.map((album, index) => (
      <AlbumListItem
        key={index}
        src={album.src}
        alt={album.title}
        isActive={imageIndex === index}
        handleChoose={() => setImageIndex(index)}
      />
    ))}
  </div>
);
