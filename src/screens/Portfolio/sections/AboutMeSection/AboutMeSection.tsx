import React from "react";

interface ContactInfo {
  label: string;
  value: string;
}

export const AboutMeSection = (): JSX.Element => {
  const contactData: ContactInfo[] = [
    { label: "EMAIL", value: "hello@nathadea.com" },
    { label: "ROLE", value: "Software Developer" },
    { label: "ADDRESS", value: "Melbourne, AU" },
  ];

  return (
    <section
      id = "about"
      className="ml-[116px] w-[1211px] h-[724px] relative mt-[241px]"
      aria-labelledby="about-heading"
    >
      <h2
        id="about-heading"
        className="absolute top-0 left-[3px] [font-family:'Poppins',Helvetica] font-bold text-[#999999] text-[80px] tracking-[0] leading-[normal]"
      >
        About
      </h2>

      <p className="top-[137px] left-[3px] w-[1202px] text-lg absolute [font-family:'Poppins',Helvetica] font-normal text-[#6d6d6d] tracking-[0.39px] leading-9">
        Hello! I am pleased to meet you. <br />I am currently an undergraduate
        student in The University of Melbourne majoring in Computing and
        Software Systems. If you like to get to know me better, let&apos;s talk
        through the information I have given below!
      </p>

      <div className="top-[284px] w-[1089px] h-[440px] absolute left-0">
        <img
          className="top-0 w-[975px] h-72 aspect-[3.39] object-cover absolute left-0"
          alt="Decorative line drawing illustration"
          src="https://c.animaapp.com/xfTka2Q8/img/image-1.png"
        />

        <div className="absolute top-[164px] left-[659px] w-[430px] h-[276px]">
          <div className="-left-px w-[432px] h-[278px] bg-[#ffe7e7] absolute -top-px" />

          <address className="not-italic">
            {contactData.map((item, index) => (
              <div
                key={item.label}
                className={`absolute left-10 w-auto h-[52px] ${
                  index === 0
                    ? "top-10 w-[225px]"
                    : index === 1
                      ? "top-28 w-[200px]"
                      : "top-[184px] w-[200px]"
                }`}
              >
                <div
                  className={`absolute top-[calc(50.00%_-_26px)] left-0 opacity-60 [font-family:'Poppins',Helvetica] font-medium text-[#7e7b7b] text-base text-right tracking-[6.33px] leading-[normal] ${
                    index === 0
                      ? "w-[31.11%]"
                      : index === 1
                        ? "w-[30.98%]"
                        : "w-[55.09%]"
                  }`}
                >
                  {item.label}
                </div>

                <div
                  className={`absolute top-[calc(50.00%_+_1px)] left-0 [font-family:'Poppins',Helvetica] font-normal text-[#2d2d2d] text-lg tracking-[0.39px] leading-[normal] ${
                    index === 0
                      ? "w-[90.22%]"
                      : index === 1
                        ? "w-[98.91%]"
                        : "w-[87.43%]"
                  }`}
                >
                  {item.value}
                </div>
              </div>
            ))}
          </address>
        </div>
      </div>

      <div
        className="absolute top-[612px] left-[3px] [font-family:'Aguafina_Script',Helvetica] font-normal text-[#6d6d6d] text-[70px] tracking-[1.71px] leading-[normal]"
        aria-label="Signature"
      >
        natpetrus
      </div>
    </section>
  );
};
