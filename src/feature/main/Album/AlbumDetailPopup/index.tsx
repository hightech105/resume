import { CircleInfoOutline } from "assets/icons";
import BaseModel from "component/BaseModel";
import Button from "component/Button";
import { FC, ReactNode } from "react";
import { AlbumType } from "../type";
import { AlbumDetail } from "./AlbumDetail";
import { AlbumList } from "./AlbumList";
import styles from "./albumDetailPopup.module.scss";

type AlbumDetailPopupProps = {
  visible: boolean;
  handleClose: () => void;
  imageIndex: number;
  setImageIndex: (index: number) => void;
  albumData: AlbumType[];
};

export const AlbumDetailPopup: FC<AlbumDetailPopupProps> = ({
  visible,
  handleClose,
  albumData,
  imageIndex,
  setImageIndex,
}) => {
  const footer: ReactNode[] = [
    <Button key={1} onClick={handleClose}>
      Close
    </Button>,
  ];
  return (
    <BaseModel
      title="Album detail"
      className={styles["album-detal-popup"]}
      contentClassName={styles["album-detal-popup-content"]}
      visible={visible}
      handleClose={handleClose}
      footer={footer}
      icon={<CircleInfoOutline />}
    >
      <AlbumDetail album={albumData[imageIndex]} />
      <AlbumList
        albumData={albumData}
        imageIndex={imageIndex}
        setImageIndex={setImageIndex}
      />
    </BaseModel>
  );
};
