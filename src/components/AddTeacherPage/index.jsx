import React from "react";
import {HeaderChip, MainBox, TeacherForm } from "../index"

const AddTeacherPage = () => {
    const api = "http://localhost:5000/api/admin/addTeacher"
    return (
        <MainBox>
            <HeaderChip headerText={"Add Teacher"} />
            <TeacherForm apiUrl={api} callMethod={"POST"}/>
        </MainBox>
    )
}

export default AddTeacherPage;