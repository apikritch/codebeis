import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   solid,
//   regular,
//   brands,
//   icon,
// } from "@fortawesome/fontawesome-svg-core/import.macro";
// import Icon from "@mdi/react";
// import { mdiArrowRight } from "@mdi/js";

const Header = (props) => {
  const { header, textColor, borderColor, borderSize } = props;

  return (
    <React.Fragment>
      <div className={`mb-[12px] flex items-end ${textColor}`}>
        <header className="header-font mr-1 text-[1.815rem] font-[600]">
          {header}
        </header>
        {header !== "CONTACT US" && (
          <i className="lni lni-arrow-top-right scale-y-[-1] !pt-[6.5px] !text-[1.45rem]" />
        )}

        {/* <FontAwesomeIcon
          icon={solid("arrow-right")}
          className="rotate-45 pb-[5px] text-[1.5rem]"
        />
        <Icon
          path={mdiArrowRight}
          size="2rem"
          rotate={45}
        /> */}
      </div>
      <hr className={`${borderSize} ${borderColor}`} />
    </React.Fragment>
  );
};

export default Header;
