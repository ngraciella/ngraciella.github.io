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
    <section id = "contact">
      <div className="ml-[12%] w-[100%] h-[624px] relative mt-[141px]" aria-labelledby="about-heading">
        <h2
          id="about-heading"
          className="absolute top-0 left-[3px] [font-family:'Poppins',Helvetica] font-bold text-[#999999] text-[80px] tracking-[0] leading-[normal]"
        >
          Contact me
        </h2>
        
        <div className="top-[15%] w-[1089px] h-[440px] absolute left-0">
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
                          ? "w-[200px]"
                          : "w-[200px]"
                    }`}
                  >
                    {item.value}
                  </div>
                </div>
              ))}
            </address>
          </div>
        </div>
      </div>
    </section>
  );
};
