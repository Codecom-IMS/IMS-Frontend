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
const DeleteTeacherPage = () => {
  const [teacherId, setTeacherId] = useState("");
  const onChangeTeacherId = (newValue) => {
    setTeacherId(newValue.target.value);
  };
  const [teacher, setTeacher] = useState("");
  const [teacherFound, setTeacherFound] = useState(false);
  const onSubmit = async () => {
    try {
      const url = `http://localhost:5000/api/admin/getTeachers?id=${teacherId}`;
      const data = await fetchApi(url, "GET");
      const teacherData = await data.json();
      setTeacher(teacherData);
      data.body ? setTeacherFound(true) : setTeacherFound(false);
    } catch (error) {
      console.log(error);
    }
  };
  const toastNotification = (message, messageType) => {
    toast(message, {
      type: messageType,
    });
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
              editable={true}
            />
            <InputField
              inputType={"text"}
              label={"Teacher Name:"}
              value={teacher?.body.name}
              editable={true}
            />
            <InputField
              inputType={"text"}
              label={"Email:"}
              value={teacher?.body.email}
              editable={true}
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
