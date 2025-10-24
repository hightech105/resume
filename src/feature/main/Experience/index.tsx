import {FC} from "react";
import {SectionWrapper} from "../SectionWrapper";
import Section from "./Section";
import {experienceData} from "./data";
import {useTranslation} from "react-i18next";

const Experience: FC = () => {
  const {t} = useTranslation();
  const data = experienceData(t);
  
  return (
    <SectionWrapper
      sectionId="experience"
      title={t("experience.title")}
    >
      {data.map((record, index) => (
        <Section key={index} title={record.title} stepData={record.stepData} />
      ))}
    </SectionWrapper>
  )
};

export default Experience;
