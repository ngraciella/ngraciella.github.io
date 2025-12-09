import { AboutMeSection } from "./sections/AboutMeSection";
import { EducationSection } from "./sections/EducationSection";
import { FooterSection } from "./sections/FooterSection";
import { HeaderSection } from "./sections/HeaderSection";
import { ProjectsSection } from "./sections/ProjectsSection";

export const Portfolio = (): JSX.Element => {
  return (
    <div
      className="bg-white overflow-x-hidden overflow-y-hidden w-full min-h-[3000px] flex flex-col"
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
