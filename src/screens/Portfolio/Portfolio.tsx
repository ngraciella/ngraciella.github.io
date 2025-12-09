import React from "react";
import { AboutMeSection } from "./sections/AboutMeSection";
import { EducationSection } from "./sections/EducationSection";
import { FooterSection } from "./sections/FooterSection";
import { HeaderSection } from "./sections/HeaderSection";
import { ProjectsSection } from "./sections/ProjectsSection";

export const Portfolio = (): JSX.Element => {
  return (
    <div
      className="bg-white overflow-x-hidden w-full min-w-[1440px] min-h-[4185px] flex flex-col"
      data-model-id="1:2"
    >
      <HeaderSection />
      <EducationSection />
      <ProjectsSection />
      <AboutMeSection />
      <FooterSection />
    </div>
  );
};
