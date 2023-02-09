import React from "react";
// import { FaArrowRight } from "react-icons/fa";
import { Waves, MainBox, HeaderChip, Form, Button, Navbar } from "../index";
import "../Waves/waves.css";

const Layout = ({ children }) => {
  return (
    <div className="App-header">
      <Navbar />
      <div
        class="inner-header flex"
        style={{
          height: "65vh",
          width: "100%",
          // margin: 0,
          // padding: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        
        <MainBox>
          <HeaderChip />
          <Form />
          <Button />

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
