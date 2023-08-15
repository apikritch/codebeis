import React from "react";
import Image from "next/image";
import Container from "./Container";
import Logo from "../../assets/images/Layer_1.svg";

const NavBar = () => {
  return (
    <div className="bg-primary">
      <Container>
        <div className="header-font mt-4 flex items-center justify-between border-b-[1px] border-black pb-[1.75rem] text-[1.5rem] font-medium md:mt-0 md:grid md:grid-cols-5 md:justify-normal lg:grid-cols-4">
          <div className="pt-0 md:pt-2">
            <Image
              src={Logo}
              alt="codebeis logo"
              height={25}
            />
          </div>
          <div className="col-span-2 hidden md:block lg:col-span-1">
            creative digital studio
          </div>
          <div className="col-span-2 hidden justify-end gap-7 md:flex lg:gap-16">
            <a href="">work</a>
            <a href="">studio</a>
            <a href="">contact</a>
          </div>
          <a className="flex items-center md:hidden">
            <i className="lni lni-menu !text-[2rem]"></i>
          </a>
        </div>
      </Container>
    </div>
  );
};

export default NavBar;
