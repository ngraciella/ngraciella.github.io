import React from "react";

interface Project {
  id: number;
  title: string;
  role: string;
  description: string;
  link?: string;
  image: string;
  alignment: "left" | "right";
}

export const ProjectsSection = (): JSX.Element => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Mental Health\nService Navigation",
      role: "FRONTEND DEVELOPER",
      description:
        "Designed a website to assist people in finding the nearest mental health services within Australia",
      link: "https://edens-group.vercel.app",
      image:
        "https://c.animaapp.com/xfTka2Q8/img/screenrecording2025-12-09at19-57-02-ezgif-com-video-to-gif-conve.gif",
      alignment: "left",
    },
    {
      id: 2,
      title: "Single-Player\nRetro 2D Style\nGame",
      role: "GAME DEVELOPER",
      description:
        "A simple classic game for refreshing! Users must pick-up and drop-off passengers while collecting in-game currency",
      image:
        "https://c.animaapp.com/xfTka2Q8/img/screenrecording2025-12-09at19-37-42-ezgif-com-video-to-gif-conve.gif",
      alignment: "right",
    },
  ];

  return (
    <section id ="project-section">
      <div className="ml-[12%] w-[100%] h-[1376px] mt-[33px] flex flex-col">
        <h2 className="w-[335px] h-[120px] [font-family:'Poppins',Helvetica] font-bold text-[#999999] text-[80px] tracking-[0] leading-[normal]">
          Projects
        </h2>

        <div className="w-[1301px] h-[494px] relative mt-[5rem]">
          <a
            className="absolute top-[440px] left-[742px] w-[411px] [font-family:'Poppins',Helvetica] font-normal text-[#6d6d6d] text-lg tracking-[0.39px] leading-[33px] underline hover:text-[#999999] transition-colors"
            href="https://edens-group.vercel.app"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Visit Mental Health Service Navigation website"
          >
            https://edens-group.vercel.app
          </a>

          <p className="absolute top-[247px] left-[742px] w-[411px] [font-family:'Poppins',Helvetica] font-normal text-[#6d6d6d] text-lg tracking-[0.39px] leading-[33px]">
            Designed a website for The Victorian Collaborative Centre (For Mental Health and Well-being)
            to assist people in finding the nearest mental
            health services within Australia
          </p>

          <div className="absolute top-[171px] left-[742px] w-[540px] [font-family:'Poppins',Helvetica] font-normal text-[#6d6d6d] text-xl tracking-[0.39px] leading-[33px]">
            FRONTEND DEVELOPER
          </div>

          <h3 className="absolute top-0.5 left-[742px] [font-family:'Poppins',Helvetica] font-bold text-[#999999] text-[57px] tracking-[-0.26px] leading-[normal] whitespace-pre-line">
            Mental Health
            <br />
            Service Navigation
          </h3>

          <img
            className="absolute top-0 left-0 w-[657px] h-[494px] aspect-[1.33]"
            alt="Mental Health Service Navigation project demonstration"
            src="https://c.animaapp.com/xfTka2Q8/img/screenrecording2025-12-09at19-57-02-ezgif-com-video-to-gif-conve.gif"
            loading="lazy"
          />
        </div>

        <div className="ml-[41px] w-[1162px] h-[494px] relative mt-[10rem]">
          <p className="absolute top-[348px] left-3.5 w-[405px] [font-family:'Poppins',Helvetica] font-normal text-[#6d6d6d] text-lg text-right tracking-[0.39px] leading-[33px]">
            A casual game for your entertainment!<br />Pick-up and drop-off passengers<br />
            while collecting in-game currency
          </p>

          <div className="absolute top-[271px] right-[743px] w-[405px] [font-family:'Poppins',Helvetica] font-normal text-[#6d6d6d] text-xl text-right tracking-[0.39px] leading-[33px]">
            GAME DEVELOPER
          </div>

          <h3 className="absolute top-2 left-0 [font-family:'Poppins',Helvetica] font-bold text-[#999999] text-6xl text-right tracking-[-0.26px] leading-[normal] whitespace-pre-line">
            Single-Player
            <br />
            Retro 2D Style
            <br />
            Game
          </h3>

          <img
            className="absolute top-0 left-[499px] w-[657px] h-[494px] aspect-[1.33] object-cover"
            alt="Single-Player Retro 2D Style Game project demonstration"
            src="https://c.animaapp.com/xfTka2Q8/img/screenrecording2025-12-09at19-37-42-ezgif-com-video-to-gif-conve.gif"
            loading="lazy"
          />
        </div>  
      </div>
    </section>
  );
};
