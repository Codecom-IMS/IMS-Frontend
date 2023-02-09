import React from "react";

import { Card, MainBox, HeaderChip } from '../../components';
import teacherImage from '../../assets/teacher.png'
import studentImage from '../../assets/student.png'

const MainPage = () => <MainBox>
    <HeaderChip headerText={"User Management"} />
    <div className='card-container'>
        <Card image={studentImage} title={"Add Student"} path={"./studentPage"}/>
        <Card image={teacherImage} title={"Add Teacher"} path={"./teacherPage"}/>
    </div>
</MainBox>

export default MainPage




             