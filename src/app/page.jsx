import React from "react";
import { config } from "@fortawesome/fontawesome-svg-core";

import SectionTwo from "./components/SectionTwo/SectionTwo";
import SectionThree from "./components/SectionThree/SectionThree";
import SectionFour from "./components/SectionFour/SectionFour";
import SectionFive from "./components/SectionFive/SectionFive";
import SectionOne from "./components/SectionOne/SectionOne";

import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

const HomePage = () => {
  return (
    <React.Fragment>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
    </React.Fragment>
  );
};

export default HomePage;
