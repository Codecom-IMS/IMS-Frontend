import React from "react";
import Card from "../Card/index";
import adminImage from "../../assets/images/admin.png";
import teacherImage from "../../assets/images/teacher.png";
import HeaderChip from "../LoginHeaderChip";
import MainBox from "../MainBox";
function LandingPage() {
  return (
    <>
      <div style={{ padding: "50px" }}>
        <MainBox>
          <HeaderChip headerText={"Welcome To IMS"} />
          <div className="card-container">
            <Card image={adminImage} title={"Admin Login"} path={"./admin"} />
            <Card
              image={teacherImage}
              title={"Teacher Login"}
              path={"./teacher"}
            />
          </div>
        </MainBox>
      </div>
    </>
  );
}

export default LandingPage;
