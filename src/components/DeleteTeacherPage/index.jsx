import React, { useState } from "react";
import {
  HeaderChip,
  MainBox,
  InputField,
  BlueButton,
  RedButton,
  Toast,
} from "../index";
import "react-toastify/ReactToastify.min.css";
import fetchApi from "../FetchApi";
import "./DeleteTeacherPage.css";
import { toast } from "react-toastify";
import { isDataFound, searchFieldValidator } from "../Validator/validator";
const DeleteTeacherPage = () => {
  const [teacherId, setTeacherId] = useState("");
  const onChangeTeacherId = (newValue) => {
    setTeacherId(newValue.target.value);
  };
  const [teacher, setTeacher] = useState("");
  const [teacherFound, setTeacherFound] = useState(false);
  const toastNotification = (message, messageType) => {
    toast(message, {
      type: messageType,
    });
  };
  const onSubmit = async () => {
    const isSearchFieldValid = searchFieldValidator(teacherId);
    if (isSearchFieldValid.status) {
      try {
        const url = `http://localhost:5000/api/admin/getTeachers?id=${teacherId}`;
        const data = await fetchApi(url, "GET");
        const teacherData = await data.json();
        const isRecordFound = isDataFound(teacherData);
        if (isRecordFound.status) {
          setTeacher(teacherData);
          data.body ? setTeacherFound(true) : setTeacherFound(false);
        } else {
          toastNotification(isRecordFound.message, isRecordFound.messageType);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      toastNotification(
        isSearchFieldValid.message,
        isSearchFieldValid.messageType
      );
    }
  };

  const deleteTeacher = async () => {
    try {
      const url = `http://localhost:5000/api/admin/deleteTeacher?id=${teacherId}`;
      await fetchApi(url, "DELETE");
      toastNotification("Teacher Deleted", "success");
      setTeacherFound(false);
    } catch (error) {
      toastNotification("Error Occured", "error");
      setTeacherFound(false);
    }
  };

  return (
    <MainBox>
      <HeaderChip headerText={"Delete Teacher"} />
      {teacherFound ? (
        <>
          <div className="delete-page-fields">
            <InputField
              inputType={"number"}
              label={"Teacher ID:"}
              value={teacher?.body.id}
              readOnly={true}
            />
            <InputField
              inputType={"text"}
              label={"Teacher Name:"}
              value={teacher?.body.name}
              readOnly={true}
            />
            <InputField
              inputType={"text"}
              label={"Email:"}
              value={teacher?.body.email}
              readOnly={true}
            />
          </div>
          <RedButton buttonText={"Delete"} onSubmitHandler={deleteTeacher} />
        </>
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
  );
};

export default DeleteTeacherPage;
