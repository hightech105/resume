import { FC, useRef, useState } from "react";
import { SectionWrapper } from "../SectionWrapper";
import styles from "./album.module.scss";
import { AlbumDetailPopup } from "./AlbumDetailPopup";
import { AlbumItem } from "./AlbumItem";
import { albumData } from "./data";
import { useMultipleRef } from "hook";
import { useGSAP } from "@gsap/react";
import { timelineScroll } from "libs/gsap";

enum refNames {
  albumList = "album-list",
  noContent = "no-content",
}

const Album: FC = () => {
  const { getRef, setRef } = useMultipleRef<HTMLDivElement | null>();
  const imageRef = useRef<(HTMLDivElement | null)[]>([]);
  const [isOpenAlbumDetail, setIsOpennAlbumDetail] = useState(false);
  const [currentImageIndex, setIsCurrentImageIndex] = useState(0);

  useGSAP(() => {
    const timeline = timelineScroll(getRef(refNames.albumList));
    applyNoContentTimeline(timeline);
    applyImageTween(timeline);
  });

  const applyNoContentTimeline = (timeline: GSAPTimeline) => {
    timeline.fromTo(
      getRef(refNames.noContent),
      {
        opacity: 0,
        width: 0,
      },
      { opacity: 1, width: "unset" }
    );
  };

  const applyImageTween = (timeline: GSAPTimeline) => {
    imageRef.current.forEach((element) => {
      timeline.fromTo(
        element,
        {
          opacity: 0,
          scale: 0.3,
        },
        { opacity: 1, scale: 1 }
      );
    });
  };

  const openAlbumDetail = (index: number) => {
    setIsOpennAlbumDetail(true);
    setIsCurrentImageIndex(index);
  };

  const handleCloseAlbumDetail = () => {
    setIsOpennAlbumDetail(false);
  };

  return (
    <SectionWrapper sectionId="album" title="ALBUM" className={styles.album}>
      <div
        ref={(element) => setRef(refNames.albumList, element)}
        className={styles["album-items"]}
      >
        {albumData.length <= 0 ? (
          <div
            ref={(element) => setRef(refNames.noContent, element)}
            className={styles["no-data"]}
          >
            <span>There is no data</span>
          </div>
        ) : (
          albumData.map((data, index) => {
            const setRef = (element: HTMLDivElement | null) => {
              imageRef.current[index] = element;
            };
            return (
              <AlbumItem
                key={index}
                src={data.src}
                alt={data.title}
                setRef={setRef}
                handleOpenAlbumDetail={() => openAlbumDetail(index)}
              />
            );
          })
        )}
      </div>
      {albumData.length > 0 && (
        <AlbumDetailPopup
          visible={isOpenAlbumDetail}
          handleClose={handleCloseAlbumDetail}
          albumData={albumData}
          imageIndex={currentImageIndex}
          setImageIndex={setIsCurrentImageIndex}
        />
      )}
    </SectionWrapper>
  );
};

export default Album;
