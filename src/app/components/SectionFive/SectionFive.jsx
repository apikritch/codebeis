import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";

import Container from "../Container";
import Header from "../Header";

const SectionFive = () => {
  return (
    <div className="bg-black pb-14 pt-20 md:py-20">
      <Container>
        <Header
          header="CONTACT US"
          textColor="text-white"
          borderColor="border-white"
          borderSize="border-t-[1px]"
        />
        <div className="mb-[7rem] mt-[5.5rem] grid grid-cols-3 text-white lg:mb-[4.75rem] lg:mt-[4.25rem] xl:mb-[4.5rem] xl:mt-[4rem] 2xl:mb-[5.5rem] 2xl:mt-[5rem]">
          <div className="lg:order-0 order-1 col-span-3 mt-[4rem] flex flex-col md:flex-row lg:col-span-1 lg:mt-0 lg:flex-col">
            <div className="mb-[1.8rem] w-1/2 lg:w-full">
              <div className="header-font mb-[0.7rem] text-[1.35rem] opacity-75">
                ADDRESS
              </div>
              <div className="normal-font text-[1.16rem] font-[300] leading-[1.36]">
                999 88st,
              </div>
              <div className="normal-font text-[1.16rem] font-[300] leading-[1.36]">
                Raccoon City, Holy Roman Empire
              </div>
              <div className="normal-font text-[1.16rem] font-[300] leading-[1.36]">
                123-456-7890
              </div>
            </div>
            <div className="w-1/2 lg:w-full">
              <div className="header-font mb-[0.7rem] text-[1.35rem] opacity-75">
                EMAIL
              </div>
              <div className="normal-font text-[1.16rem] font-[300] leading-[1.36]">
                wassup@codebeis.com
              </div>
            </div>
          </div>
          <form className="order-0 col-span-3 flex flex-col px-0 lg:order-1 lg:col-span-2 lg:px-[5rem] xl:px-[6rem] 2xl:px-[12rem]">
            <input
              type="text"
              placeholder="Name"
              className="header-font mb-[3.15rem] border-b-[1px] border-white/[.60] bg-transparent text-[1.5rem] font-[300] leading-[1.125] text-white/[.50] md:text-[1.75rem]"
            />
            <input
              type="email"
              placeholder="Email"
              className="header-font mb-[3.15rem] border-b-[1px] border-white/[.60] bg-transparent text-[1.5rem] font-[300] leading-[1.125] text-white/[.50] md:text-[1.75rem]"
            />
            <input
              type="text"
              placeholder="Message"
              className="header-font mb-[3.15rem] border-b-[1px] border-white/[.60] bg-transparent text-[1.5rem] font-[300] leading-[1.125] text-white/[.50] md:text-[1.75rem]"
            />
            <button
              type="button"
              className="header-font mt-[1.1rem] h-[60px] rounded-full border-[1px] text-[1.75rem] font-bold leading-[0] md:h-[90px]">
              SEND
            </button>
          </form>
        </div>
        <div className="flex flex-col items-center text-white md:flex-row md:items-end md:justify-between">
          <div className="mb-6 flex items-center">
            <FontAwesomeIcon
              icon={brands("twitter")}
              className="mr-[1.75rem] text-[1.5rem] md:mr-[2.75rem] md:text-[2.5rem]"
            />
            <FontAwesomeIcon
              icon={brands("instagram")}
              className="mr-[1.75rem] text-[1.5rem] md:mr-[2.75rem] md:text-[2.5rem]"
            />
            <FontAwesomeIcon
              icon={brands("behance")}
              className=" mr-0 text-[1.5rem] md:mr-[2.75rem] md:text-[2.5rem]"
            />
          </div>
          <div>copyright© codebeis 2023</div>
        </div>
      </Container>
    </div>
  );
};

export default SectionFive;
