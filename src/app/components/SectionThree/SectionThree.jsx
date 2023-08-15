import React from "react";
import Container from "../Container";
import Header from "../Header";
import Service from "./Service";
import { services } from "@/services/Data";

const SectionThree = () => {
  return (
    <div className="min-h-screen bg-primary py-20">
      <Container>
        <Header
          header="SERVICES"
          textColor="text-black"
          borderColor="border-black"
          borderSize="border-t-[2px]"
        />
        <div className="mt-[2rem] flex justify-end md:mt-[3rem] lg:mt-[3.5rem] xl:mt-[1rem] 2xl:mt-[0.5rem] 3xl:mt-[4rem]">
          <div className="flex w-full flex-col lg:w-[70%] xl:w-[65%] 2xl:w-[58%]">
            {services.map((item, index) => (
              <Service
                data={item}
                key={index}
                index={index}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SectionThree;
