import React from "react";

export const HeaderSection = (): JSX.Element => {
  const navigationLinks = [
    { label: "EDUCATION", href: "#education-section" },
    { label: "PROJECT", href: "#project-section" },
    { label: "CONTACT", href: "#contact" },
  ];

  const socialLinks = [
    { label: "IG.", href: "https://www.instagram.com/ngraciella", ariaLabel: "Instagram" },
    { label: "IN.", href: "https://www.linkedin.com/in/natpetrus", ariaLabel: "LinkedIn" },
    { label: "FB.", href: "https://www.facebook.com", ariaLabel: "Facebook" },
  ];

  return (
    <header className="ml-[15%] w-[100%] h-[769px] relative bg-transparent">
      <div className="left-[120px] w-[90%] h-[715px] bg-[#d7d7d7] opacity-[0.22] absolute -top-px" />

      <div className="absolute top-0 left-[127px] h-[715px] aspect-[1.56]">
        <img
          className="absolute w-[99.73%] h-full top-0 left-0"
          alt="Portfolio hero background"
          src="https://c.animaapp.com/xfTka2Q8/img/img-3462-1.png"
        />

        <div
          className="absolute w-[99.73%] h-full top-0 left-0 bg-black opacity-[0.79]"
          aria-hidden="true"
        />
      </div>

      <nav
        className="absolute top-[539px] left-[567px] w-[205px] h-6 flex"
        aria-label="Social media links"
      >
        {socialLinks.map((link, index) => (
          <React.Fragment key={link.label}>
            {index > 0 && (
              <div className={index === 1 ? "ml-[53px]" : "ml-[46px]"} />
            )}
            <a
              href={link.href}
              className={`${index === 0 ? "w-[34px]" : index === 1 ? "w-8" : "w-[34px]"} h-6 [font-family:'Poppins',Helvetica] font-medium text-[#6d6d6d] text-base tracking-[6.33px] leading-[normal] hover:opacity-80 transition-opacity`}
              aria-label={link.ariaLabel}
              target = "_blank"
            >
              {link.label}
            </a>
          </React.Fragment>
        ))}
      </nav>

      <div className="top-[656px] left-0 h-[113px] absolute w-[355px]">
        <div className="-top-px -left-px h-[115px] bg-[#ffe7e7] absolute w-[355px]" />

        <a
          href="#download-cv"
          className="absolute top-10 left-10 opacity-60 [font-family:'Poppins',Helvetica] font-medium text-black text-2xl tracking-[8.30px] leading-[normal] hover:opacity-100 transition-opacity cursor-pointer"
          download
          aria-label="Download curriculum vitae"
        >
          DOWNLOAD CV
        </a>
      </div>

      <p className="top-[324px] left-[567px] w-[554px] text-2xl absolute [font-family:'Poppins',Helvetica] font-normal text-[#6d6d6d] tracking-[0.39px] leading-9">
        I am an undergraduate majoring in Computing and Software Sytems, currently in my final year.
      </p>

      <div
        className="absolute top-[323px] left-[535px] w-[3px] h-60 bg-[#d7d7d7]"
        aria-hidden="true"
      />

      <div className="absolute top-[250px] left-0 w-[523px] h-[430px]">
        <h1 className="absolute top-0 left-0 w-full">
          <div className="[font-family:'Poppins',Helvetica] font-bold text-[#999999] text-[100px] tracking-[0] leading-[5px]">
            Hello! I&apos;m
          </div>

          <div className="mt-[140px] [font-family:'Poppins',Helvetica] font-bold text-[#999999] text-[100px] tracking-[0] leading-[0px]">
            Nathadea
          </div>

          <div className="mt-[140px] [font-family:'Poppins',Helvetica] font-bold text-[#999999] text-[100px] tracking-[0] leading-[0px]">
            Petrus
          </div>
        </h1>
      </div>

      <nav
        className="absolute top-[60px] left-[660px] w-[467px] h-6 flex"
        aria-label="Main navigation"
      >
        {navigationLinks.map((link, index) => (
          <React.Fragment key={link.label}>
            {index > 0 && (
              <div className={index === 1 ? "ml-16" : "ml-[65px]"} />
            )}
            <a
              href={link.href}
              className={`${index === 0 ? "w-[143px]" : index === 1 ? "w-[109px]" : "w-20"} h-6 [font-family:'Poppins',Helvetica] font-medium text-[#6d6d6d] text-base text-right tracking-[6.33px] leading-[normal] hover:text-black transition-colors`}
            >
              {link.label}
            </a>
          </React.Fragment>
        ))}
      </nav>
    </header>
  );
};
