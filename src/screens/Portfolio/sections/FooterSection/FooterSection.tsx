export const FooterSection = (): JSX.Element => {
  return (
    <footer className="w-[100%] h-[90px] relative bg-transparent">
      <div className="-left-px w-[100%] h-[100%] bg-[#d7d7d7] opacity-[0.22] absolute -top-px" />

      <div className="absolute top-[33%] left-[38%] opacity-80 [font-family:'Poppins',Helvetica] font-normal text-[#6d6d6d] text-lg text-center tracking-[0.39px] leading-9 whitespace-nowrap">
        Designed with ♡&emsp;|&emsp;nathadea.com &copy; 2025
      </div>
    </footer>
  );
};
