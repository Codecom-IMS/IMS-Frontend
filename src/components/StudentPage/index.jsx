import React from "react";
import { MainBox, Card, HeaderChip,} from "../index";
import studentImage from "../../assets/student.png"

const StudentPage = () => {
    return (
        <MainBox>
            <HeaderChip headerText={"Student Management"} />
            <div className="card-container">
                <Card title={"Add Student"} image={studentImage} path={"./addStudentPage"} />
                <Card title={"Update Student"} image={studentImage} path={"./updateStudentPage"} />
                <Card title={"Delete Student"} image={studentImage} path={"./deleteStudentPage"} />
            </div>
        </MainBox>
    )
}

export default StudentPage