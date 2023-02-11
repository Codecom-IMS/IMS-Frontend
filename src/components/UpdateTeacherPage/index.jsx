import React, { useState } from "react";
import HeaderChip from "../ModuleTitle";
import { TeacherForm, InputField, BlueButton } from "../index";
import MainBox from "../UserManagementMainDiv";
import fetchApi from "../FetchApi";
import "./UpdateTeacherPage.css";
const UpadteTeacherPage = () => {
  const [teacherId, setTeacherId] = useState("");
  const onChangeTeacherId = (newValue) => {
    setTeacherId(newValue.target.value);
  };
  const [teacherData, setTeacherData] = useState("");
  const [teacherFound, setTeacherFound] = useState(false);
  const api = `http://localhost:5000/api/admin/updateTeacher/${teacherId}`;
  const onSubmit = async () => {
    try {
      const url = `http://localhost:5000/api/admin/getTeachers?id=${teacherId}`;
      const data = await fetchApi(url, "GET");
      const teacherData = await data.json();
      setTeacherData(teacherData);
      data.body ? setTeacherFound(true) : setTeacherFound(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <MainBox>
      <HeaderChip headerText={"Update Teacher"} />
      {teacherFound ? (
        teacherData.body ? (
          <TeacherForm
            apiUrl={api}
            callMethod={"PUT"}
            defaultTeacherName={teacherData?.body.name}
            defaultTeacherEmail={teacherData?.body.email}
            defaultTeacherPassword={teacherData?.body.password}
          />
        ) : (
          <div>Teacher not exists</div>
        )
      ) : (
        <>
          <div className="search-field">
            <InputField
              inputType={"number"}
              label={"Teacher ID:"}
              placeholder={"Enter ID"}
              value={teacherId}
              onChangeFunction={onChangeTeacherId}
            />
          </div>
          <BlueButton buttonText={"Search"} onSubmitHandler={onSubmit} />
        </>
      )}
    </MainBox>
  );
};

export default UpadteTeacherPage;
