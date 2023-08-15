"use client";
import React, { useState } from "react";
import Container from "../Container";
import Header from "../Header";
import { projects } from "@/services/Data";

const SectionFour = () => {
  const [projectIndex, setProjectIndex] = useState(0);

  return (
    <div className="min-h-screen bg-primary py-20">
      <Container>
        <Header
          header="SELECTED PROJECTS"
          textColor="text-black"
          borderColor="border-black"
          borderSize="border-t-[2px]"
        />
        <div className="mt-[2rem] grid grid-cols-1 md:mt-[5rem] md:grid-cols-5 lg:mt-[4rem] lg:grid-cols-3 xl:mt-[3rem] 3xl:mt-[4.75rem]">
          <div className="col-span-1 flex flex-col items-start md:col-span-2 lg:col-span-1">
            {projects.map((item, index) => (
              <div
                className="mt-1 w-full lg:mt-0"
                key={index}>
                <div className="flex w-full justify-between md:justify-normal">
                  <div
                    className={`normal-font text-[1.9rem] leading-[1.325] xs:text-[2rem] sm:text-[2.75rem] 2xl:text-[3.1rem] ${
                      projectIndex === index ? "opacity-100" : "opacity-30"
                    } `}
                    onClick={() => setProjectIndex(index)}>
                    {item.name}
                  </div>
                  {projectIndex === index && (
                    <div className="header-font mt-1 flex flex-col items-end text-[1.4rem] font-semibold xs:text-[1.5rem] sm:font-medium md:mt-4 md:hidden lg:mt-0">
                      {item.tags.map((tag, i) => (
                        <div
                          key={i}
                          className="leading-[1.125]">
                          {tag}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                {projectIndex === index && (
                  <div className="mb-4 mt-6 block h-[13rem] w-full bg-[#d9d9d9] xs:h-[15rem] sm:h-[20rem] md:hidden xl:h-[25rem] 2xl:h-[32.5rem]">
                    {projectIndex + 1}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="col-span-3 hidden md:block lg:col-span-2">
            <div className="flex flex-col lg:grid lg:grid-cols-3">
              <div className="lg:order-0 header-font order-1 mt-4 flex flex-col text-[1.5rem] font-medium lg:mt-0">
                {projects[projectIndex].tags.map((tag, i) => (
                  <div
                    key={i}
                    className="leading-[1.125]">
                    {tag}
                  </div>
                ))}
              </div>
              <div className="order-0 col-span-2 lg:order-1">
                <div className="h-[20rem] w-full bg-[#d9d9d9] xl:h-[25rem] 2xl:h-[32.5rem]">
                  {projectIndex + 1}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="header-font mt-[2rem] flex items-end text-[1.8rem] font-medium sm:mt-[3rem] md:mt-[8rem] xl:mt-[3rem] 3xl:mt-[4.55rem]">
            <div className="mr-3">ALL PROJECTS</div>
            <i
              className={`lni lni-arrow-top-right !pb-[6.1px]
                !text-[1.5rem]`}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SectionFour;
