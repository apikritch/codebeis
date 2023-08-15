"use client";
import React, { useState } from "react";

const Service = (props) => {
  const { data, index } = props;
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-4 border-b-[1px] border-black md:mt-11 lg:mt-7 xl:mt-6 2xl:mt-11">
      <a
        className="flex cursor-pointer items-end"
        onClick={() => setOpen(!open)}>
        <div className="w-1/6 pb-[10px] text-[1.1rem] sm:w-1/12 md:pb-[14px]">
          00{index + 1}
        </div>
        <div
          className={`normal-font mr-auto select-none ${
            data.name === "WEB DEVELOPMENT"
              ? "text-[0rem] before:text-[1.75rem] before:content-['WEB_DEV'] xs:before:text-[2rem] sm:before:text-[2.5rem] md:text-[3.15rem] md:before:content-none"
              : "text-[1.75rem] xs:text-[2rem] sm:text-[2.5rem] md:text-[3.15rem]"
          }`}>
          {data.name}
        </div>
        <i
          className={`lni lni-arrow-top-right !text-[1.9rem] xs:!text-[2.2rem] sm:!text-[2.75rem] ${
            open
              ? "!mb-[5px] xs:!mb-[6px] sm:!mb-[7px] md:!mb-[12px] 3xl:!mb-[11px]"
              : "scale-y-[-1] !pt-[6px] xs:!pt-[7px] sm:!pt-[7px] md:!pt-[12px] 3xl:!pt-[11px]"
          }`}
        />
      </a>
      {open && (
        <div className="mb-12 flex justify-end">
          <div className="w-5/6 sm:w-11/12">
            <div className="normal-font w-full sm:w-[85%] lg:w-3/4">
              {data.description}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Service;
