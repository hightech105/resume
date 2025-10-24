import { ReactNode } from "react";

export type ExperienceSectionStepType = {
  dotTitle: string;
  content: string | React.ReactNode;
}

export type ExperienceSectionType = {
  title: string | ReactNode;
  stepData: ExperienceSectionStepType[]
}