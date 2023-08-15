import React from "react";
import Container from "../Container";

const SectionOne = () => {
  return (
    <div className="min-h-[calc(100vh-6rem)] bg-primary">
      <Container>
        <div className="relative flex h-[6.25rem] justify-center overflow-hidden sm:h-[10.7rem] md:h-[12.5rem] lg:h-[17.25rem] xl:h-[21.75rem] 2xl:h-[26.25rem] 3xl:h-[30rem]">
          <div className="logo-font absolute left-[49.1%] top-[57%] -translate-x-1/2 -translate-y-1/2 select-none text-[7rem] tracking-[-.04em] xs:left-[49%] xs:text-[8.25rem] sm:text-[14.4rem] md:left-[49.1%] md:text-[17.15rem] lg:left-[49%] lg:text-[23.45rem] xl:text-[29.75rem] 2xl:text-[36rem] 3xl:left-[49.7%] 3xl:text-[40.95rem] 3xl:tracking-[-0.005em]">
            CODEBEIS
          </div>
        </div>
        <div className="flex justify-end">
          <div className="header-font block text-[1.2rem] font-medium sm:text-[1.8rem] md:hidden">
            creative digital studio
          </div>
        </div>

        <div className="mt-[7rem] flex justify-start sm:mt-[1.5rem] md:justify-end 3xl:mt-[2rem]">
          <div className="header-font flex w-full flex-col text-[1.425rem] font-medium md:w-[44.8%]">
            <div className="leading-[1.1]">APP DESIGN</div>
            <div className="leading-[1.1]">BRANDING</div>
            <div className="leading-[1.1]">WEB DESIGN</div>
            <div className="leading-[1.1]">WEB DEVELOPMENT</div>
            <div className="leading-[1.1]">UX/UI DESIGN</div>
          </div>
        </div>
        <div className="mt-[6rem] flex flex justify-end xs:mt-[8rem] sm:hidden md:mt-[26rem] md:flex lg:mt-[3rem] xl:mt-[2rem] 3xl:mt-[8rem]">
          <div className="header-font text-[1.425rem] font-medium">
            SCROLL DOWN
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SectionOne;
