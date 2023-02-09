import React from "react";
import {Waves, MainBox, HeaderChip} from "../index";

const Layout = ({children,headerText}) => {
  return (
    <div>
      <div className="inner-header flex">
        <MainBox>
            <HeaderChip headerText={headerText} className="chip"/>
            {children}
        </MainBox>
      </div>
      <div className="wavesdiv">
        <Waves />
      </div>
    </div>
  );
};

export default Layout;
