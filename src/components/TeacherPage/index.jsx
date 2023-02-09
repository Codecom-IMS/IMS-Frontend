import React from "react";
import { MainBox, Card ,HeaderChip} from "../index"
import teacherImage from "../../assets/teacher.png"
const TeacherPage = () => {
    return (
        <MainBox>
            <HeaderChip headerText={"Teacher Management"} />
            <div className="card-container">
                <Card title={"Add Teacher"} image={teacherImage} path={"./addTeacherPage"} />
                <Card title={"Update Teacher"} image={teacherImage} path={"./updateTeacherPage"} />
                <Card title={"Delete Teacher"} image={teacherImage} path={"./deleteTeacherPage"} />
            </div>
        </MainBox>
    )
}

export default TeacherPage