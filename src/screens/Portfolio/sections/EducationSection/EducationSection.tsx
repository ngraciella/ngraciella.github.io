import React from "react";

interface EducationEntry {
  institution: string;
  degree: string;
  period: string;
  skills: string[];
}

export const EducationSection = (): JSX.Element => {
  const educationData: EducationEntry[] = [
    {
      institution: "The University of Melbourne",
      degree: "Bachelor of Science (BS) in Computing and Software Systems",
      period: "July 2023 - Present",
      skills: ["C#", "Java", "HTML", "CSS / Tailwind", "JavaScript (ReactJS)", "SQL", "Python"],
    },
    {
      institution: "Trinity College, Melbourne",
      degree: "Associate of Science (AS)",
      period: " July 2022 - July 2023",
      skills: ["Mathematics", "Psychology"],
    },
  ];

  return (
    <section id = "education-section">
      <div className="ml-[12%] w-[100%] h-[518px] mt-[100px] flex flex-col">
        <h2 className="w-[416px] h-[120px] [font-family:'Poppins',Helvetica] font-bold text-[#999999] text-[80px] tracking-[0] leading-[normal]">
          Education
        </h2>

        {educationData.map((entry, index) => (
          <article
            key={index}
            className={`relative ${
              index === 0
                ? "w-[1056px] h-[75px] mt-[52px]"
                : index === 1
                  ? "w-[767px] h-[75px] mt-[60px]"
                  : "w-[935px] h-[76px] mt-[60px]"
            }`}
          >
            <h3 className="absolute top-0 left-0 [font-family:'Poppins',Helvetica] font-medium text-[#6d6d6d] text-3xl tracking-[0.64px] leading-[33px] whitespace-nowrap">
              {entry.institution}
            </h3>

            <p className="absolute top-0 left-[519px] [font-family:'Poppins',Helvetica] font-normal text-[#6d6d6d] text-lg tracking-[0.39px] leading-[33px] whitespace-nowrap">
              {entry.degree}
            </p>

            <time
              className={`absolute ${index === 2 ? "top-[39px]" : "top-[39px]"} left-0 opacity-60 [font-family:'Poppins',Helvetica] font-medium text-[#7e7c7c] text-lg tracking-[0.39px] leading-9 whitespace-nowrap`}
            >
              {entry.period}
            </time>

            <ul
              className={`absolute ${index === 2 ? "top-[43px]" : "top-[41px]"} left-[519px] flex gap-[13px]`}
            >
              {entry.skills.map((skill, skillIndex) => (
                <li key={skillIndex} className="relative h-[33px]">
                  <div
                    className="top-px left-0 h-8 bg-[#ededed] rounded-2xl"
                    style={{
                      width:
                        skill === "C#"
                          ? "47px"
                          : skill === "Java"
                            ? "59px"
                            : skill === "HTML"
                              ? "59px"
                                : skill === "CSS / Tailwind"
                                ? "117px"
                                  : skill === "JavaScript (ReactJS)"
                                  ? "159px"
                                    : skill === "SQL"
                                      ? "50px"
                                        : skill === "Python"
                                        ? "69px"
                                          : skill === "Mathematics"
                                            ? "112px"
                                            : skill === "Psychology"
                                              ? "99px"
                                              : skill === "Chemistry"
                                                ? "92px"
                                                : skill === "Physics"
                                                  ? "74px"
                                                  : skill === "Biology"
                                                    ? "74px"
                                                    : "auto",
                    }}
                  />
                  <span className="absolute top-0 left-3.5 [font-family:'Poppins',Helvetica] font-medium text-[#666666] text-xs tracking-[0.26px] leading-[33px] whitespace-nowrap">
                    {skill}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};
