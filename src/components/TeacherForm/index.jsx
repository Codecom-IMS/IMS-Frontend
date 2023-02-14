import React, { useState } from "react";
import fetchApi from "../FetchApi";
import { BlueButton, InputField, Toast } from "../index";
import "./teacherForm.css";
import { toast } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
import {
  doesEmailExists,
  teacherFieldValidator,
} from "../../services/utils/Validator/fieldsValidator";

const TeacherForm = ({
  apiUrl,
  callMethod,
  defaultTeacherName = "",
  defaultTeacherEmail = "",
  defaultTeacherPassword = "",
  readOnly,
}) => {
  const [teacherName, setTeacherName] = useState(defaultTeacherName);
  const onChangeTeacherName = (newValue) => {
    setTeacherName(newValue.target.value);
  };
  const [teacherEmail, setTeacherEmail] = useState(defaultTeacherEmail);
  const onChangeTeacherEmail = (newValue) => {
    setTeacherEmail(newValue.target.value);
  };
  const [teacherPassword, setTeacherPassword] = useState(
    defaultTeacherPassword
  );
  const onChangeTeacherPassword = (newValue) => {
    setTeacherPassword(newValue.target.value);
  };
  const toastNotification = (message, messageType) => {
    toast(message, {
      type: messageType,
    });
  };
  const onSubmit = async () => {
    const url = apiUrl ? apiUrl : "http://localhost:5000/api/admin/addTeacher";
    const areFiledsValid = teacherFieldValidator(
      teacherName,
      teacherEmail,
      teacherPassword
    );
    if (areFiledsValid.status) {
      if (callMethod === "POST") {
        try {
          const teachers = await fetchApi(
            "http://localhost:5000/api/admin/getTeachers"
          );
          const totalTeachers = await teachers.json();
          const teacherId = parseInt(totalTeachers.body.length) + 1;
          const teacherAlreadyExists = await fetchApi(
            `http://localhost:5000/api/admin/getTeachers?email=${teacherEmail}`
          );
          const teacherIfExists = await teacherAlreadyExists.json();
          const doesEmailAlreadyExists = doesEmailExists(teacherIfExists);
          if (doesEmailAlreadyExists.status) {
            toastNotification(
              doesEmailAlreadyExists.message,
              doesEmailAlreadyExists.messageType
            );
          } else {
            const teacherData = {
              id: teacherId,
              name: teacherName,
              email: teacherEmail,
              password: teacherPassword,
              status: "serving",
            };
            await fetchApi(url, callMethod, teacherData);
            toastNotification(`Teacher Added: ID = ${teacherId}`, "success");
            setTimeout(() => {
              window.location.reload();
            }, 3000);
          }
        } catch (error) {
          toastNotification("Error Occure", "error");
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        }
      } else {
        try {
          const teacherAlreadyExists = await fetchApi(
            `http://localhost:5000/api/admin/getTeachers?email=${teacherEmail}`
          );
          const teacherIfExists = await teacherAlreadyExists.json();
          const doesEmailAlreadyExists = doesEmailExists(teacherIfExists);
          if (doesEmailAlreadyExists.status) {
            toastNotification(
              doesEmailAlreadyExists.message,
              doesEmailAlreadyExists.messageType
            );
          } else {
            const teacherData = {
              name: teacherName,
              email: teacherEmail,
              password: teacherPassword,
            };
            await fetchApi(url, callMethod, teacherData);
            toastNotification("Teacher Edited", "success");
            setTimeout(() => {
              window.location.reload();
            }, 3000);
          }
        } catch (error) {
          toastNotification("Error Occured", "error");
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        }
      }
    } else {
      toastNotification(areFiledsValid.message, areFiledsValid.messageType);
    }
  };
  return (
    <div className="add-teacher-form">
      <div className="add-teacher-fields">
        <InputField
          inputType={"text"}
          label={"Teacher Name:"}
          value={teacherName}
          onChangeFunction={onChangeTeacherName}
          placeholder={"Enter Name"}
          readOnly={readOnly}
        />
        <InputField
          inputType={"text"}
          label={"Enter Email:"}
          value={teacherEmail}
          onChangeFunction={onChangeTeacherEmail}
          placeholder={"Email"}
          readOnly={readOnly}
        />
      </div>
      <div className="add-teacher-fields">
        <InputField
          inputType={"password"}
          label={"Enter Password:"}
          value={teacherPassword}
          onChangeFunction={onChangeTeacherPassword}
          placeholder={"Password"}
          readOnly={readOnly}
        />
      </div>
      <BlueButton buttonText={"Submit"} onSubmitHandler={onSubmit} />
      <Toast />
    </div>
  );
};

export default TeacherForm;
