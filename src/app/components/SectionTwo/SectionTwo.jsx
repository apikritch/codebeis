import React from "react";
import Container from "../Container";
import Header from "../Header";

const SectionTwo = () => {
  return (
    <div className="min-h-screen bg-primary py-20">
      <Container>
        <Header
          header="ABOUT"
          textColor="text-black"
          borderColor="border-black"
          borderSize="border-t-[2px]"
        />
        <div className="mt-[3rem] flex justify-end pr-0 md:mt-[5rem] lg:mt-[3rem] lg:pr-[2rem] xl:mt-[4rem] xl:pr-[4rem] 2xl:mt-[5rem] 3xl:mt-[10rem] 3xl:pr-[8rem]">
          <div className="normal-font w-full text-[1.6rem] xs:text-[1.9rem] md:text-[2.9rem] lg:w-[67.5%] lg:text-[2.35rem] xl:w-[62.5%] xl:text-[2.4rem] 2xl:w-[55%] 2xl:text-[2.55rem] 3xl:text-[3rem]">
            “At Codebeis, we firmly believe that every project is unique,
            deserving of personalized attention and tailored solutions. Whether
            you&apos;re a startup seeking to establish a striking online
            presence or an established business looking to revamp your digital
            identity, we are here to guide you through the entire journey.”
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SectionTwo;
