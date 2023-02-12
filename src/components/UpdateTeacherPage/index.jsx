import React, { useState } from "react";
import {
  TeacherForm,
  InputField,
  BlueButton,
  Toast,
  ModuleTitle,
  Navbar,
} from "../index";
import MainBox from "../UserManagementMainDiv";
import fetchApi from "../FetchApi";
import "./updateTeacherPage.css";
import { toast } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
import {
  isDataFound,
  searchFieldValidator,
} from "../../services/utils/Validator/validator";
const UpadteTeacherPage = () => {
  const [teacherId, setTeacherId] = useState("");
  const onChangeTeacherId = (newValue) => {
    setTeacherId(newValue.target.value);
  };
  const [teacherData, setTeacherData] = useState("");
  const [teacherFound, setTeacherFound] = useState(false);
  const api = `http://localhost:5000/api/admin/updateTeacher/${teacherId}`;
  const toastNotification = (message, messageType) => {
    toast(message, {
      type: messageType,
    });
  };
  const onSubmit = async () => {
    const isIdValid = searchFieldValidator(teacherId);
    if (isIdValid.status) {
      try {
        const url = `http://localhost:5000/api/admin/getTeachers?id=${teacherId}`;
        const data = await fetchApi(url, "GET");
        const teacherData = await data.json();
        const isRecordFound = isDataFound(teacherData);
        if (isRecordFound.status) {
          setTeacherData(teacherData);
          data.body ? setTeacherFound(true) : setTeacherFound(false);
        } else {
          toastNotification(isRecordFound.message, isRecordFound.messageType);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      toastNotification(isIdValid.message, isIdValid.messageType);
    }
  };
  return (
    <>
      <Navbar />
      <MainBox>
        <ModuleTitle headerText={"Update Teacher"} />
        {teacherFound ? (
          teacherData.body ? (
            <TeacherForm
              apiUrl={api}
              callMethod={"PUT"}
              defaultTeacherName={teacherData?.body.name}
              defaultTeacherEmail={teacherData?.body.email}
              defaultTeacherPassword={teacherData?.body.password}
              readOnly={false}
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
        <Toast />
      </MainBox>
    </>
  );
};

export default UpadteTeacherPage;
