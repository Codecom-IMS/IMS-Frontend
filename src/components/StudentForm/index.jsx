import React from "react";
import { InputField, RadioButton, BlueButton, Toast, DropDown } from "../index";
import { toast } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
import "./studentForm.css";
import { useState } from "react";
import fetchApi from "../FetchApi";
import { studentFieldsValidator } from "../../services/utils/Validator/fieldsValidator";
import { API_URL } from "../../constants/constants";

const StudentForm = ({
  apiUrl,
  callMethod,
  buttonTitle,
  defaultStudentName = "",
  defaultFatherName = "",
  defaultFatherCNIC = "",
  defaultDateOfBirth = "",
  defaultBasicFee = "",
  defaultOthers = "",
  defaultStudentClass = "PG",
  defaultGender = "male",
  defaultRadioChecked = true,
  readOnly,
}) => {
  const availableClasses = [
    "PG",
    "Nursery",
    "KG",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
  ];
  let rollNumber;
  const [studentName, setStudentName] = useState(defaultStudentName);
  const onChnageStudentName = (newValue) => {
    setStudentName(newValue.target.value);
  };
  const [fatherName, setFatherName] = useState(defaultFatherName);
  const onChangeFatherName = (newValue) => {
    setFatherName(newValue.target.value);
  };
  const [dateOfBirth, setDateOfBirth] = useState(defaultDateOfBirth);
  const onChangeDateOfBirth = (newValue) => {
    setDateOfBirth(newValue.target.value);
  };
  const [fatherCNIC, setFatherCNIC] = useState(defaultFatherCNIC);
  const onChangeFatherCNIC = (newValue) => {
    setFatherCNIC(newValue.target.value);
  };
  const [basicFee, setBasicFee] = useState(defaultBasicFee);
  const onChangeBasicFee = (newValue) => {
    setBasicFee(newValue.target.value);
  };
  const [others, setOthers] = useState(defaultOthers);
  const onChangeOthers = (newValue) => {
    setOthers(newValue.target.value);
  };
  const [studentClass, setStudentClass] = useState(defaultStudentClass);
  const onChangeStudentClass = (newValue) => {
    setStudentClass(newValue.target.value);
  };
  const [gender, setGender] = useState(defaultGender);
  const onChangeStudentGender = (newValue) => {
    setGender(newValue.target.value);
  };
  const toastNotification = (message, messageType) => {
    toast(message, {
      type: messageType,
    });
  };
  const onSubmit = async () => {
    const valid = studentFieldsValidator(
      studentName,
      fatherName,
      fatherCNIC,
      basicFee,
      others,
      dateOfBirth
    );
    if (valid.status) {
      const currentDate = new Date();
      let day = currentDate.getDate();
      let month = currentDate.getMonth();
      let year = currentDate.getFullYear();
      currentDate.getDate() <= 9
        ? (day = `0${currentDate.getDate()}`)
        : (day = `${currentDate.getDate()}`);
      currentDate.getMonth() <= 9
        ? (month = `0${currentDate.getMonth() + 1}`)
        : (month = `${currentDate.getMonth() + 1}`);
      let dateString = `${year}-${month}-${day}`;
      let url;
      apiUrl ? (url = apiUrl) : (url = `${API_URL}api/admin/addStudent`);
      if (callMethod === "POST") {
        try {
          const students = await fetchApi(`${API_URL}api/admin/getStudents`);
          const totalStudents = await students.json();
          rollNumber = parseInt(totalStudents.body.length) + 1;
          const studentData = {
            roll_number: rollNumber,
            student_name: studentName,
            father_name: fatherName,
            father_cnic: fatherCNIC,
            others: others,
            date_of_admission: dateString,
            date_of_birth: dateOfBirth,
            class: studentClass,
            basic_fee: basicFee,
            gender: gender,
            fee_status: "unpaid",
            status: "active",
          };

          await fetchApi(url, callMethod, studentData);
          toastNotification(
            `Student Added Successfully Roll Number = ${rollNumber}`,
            "success"
          );
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        } catch (error) {
          toastNotification("Error Occured", "error");
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        }
      } else {
        try {
          const studentData = {
            student_name: studentName,
            father_name: fatherName,
            father_cnic: fatherCNIC,
            others: others,
            date_of_admission: dateString,
            date_of_birth: dateOfBirth,
            class: studentClass,
            basic_fee: basicFee,
            gender: gender,
            fee_status: "unpaid",
            status: "active",
          };
          await fetchApi(url, callMethod, studentData);
          toastNotification("Student Edited Successfully", "success");
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        } catch (error) {
          toastNotification("Error Occured", "error");
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        }
      }
    } else {
      toastNotification(valid.message, valid.messageType);
    }
  };
  return (
    <div className="form">
      <div className="fields-div">
        <InputField
          inputType={"text"}
          label={"Student Name:"}
          placeholder={"Enter Student Name"}
          value={studentName}
          onChangeFunction={onChnageStudentName}
          readOnly={readOnly}
        />
        <InputField
          inputType={"text"}
          label={"Father Name:"}
          placeholder={"Enter Father Name"}
          value={fatherName}
          onChangeFunction={onChangeFatherName}
          readOnly={readOnly}
        />
      </div>
      <div className="fields-div">
        <InputField
          inputType={"text"}
          label={"Father CNIC:"}
          labelId={"CNIC"}
          placeholder={"Enter CNIC"}
          value={fatherCNIC}
          onChangeFunction={onChangeFatherCNIC}
          readOnly={readOnly}
        />
        <InputField
          inputType={"number"}
          label={"Basic Fee:"}
          labelId={"Fee"}
          placeholder={"Enter Fee"}
          value={basicFee}
          onChangeFunction={onChangeBasicFee}
          readOnly={readOnly}
        />
      </div>
      <div className="fields-div">
        <InputField
          inputType={"number"}
          label={"Others:"}
          placeholder={"Other"}
          value={others}
          onChangeFunction={onChangeOthers}
          readOnly={readOnly}
        />
        <InputField
          inputType={"date"}
          label={"Date Of Birth:"}
          placeholder={"yyyy-mm-dd"}
          value={dateOfBirth}
          onChangeFunction={onChangeDateOfBirth}
          readOnly={readOnly}
        />
      </div>
      <div className="radio-div">
        <DropDown
          handleChange={onChangeStudentClass}
          defaultSelected={defaultStudentClass}
          arrayOfOptions={availableClasses}
          readOnly={readOnly}
        />
        <div className="radio-container">
          <RadioButton
            label={"Male"}
            className={"radio__1"}
            id={"radio-1"}
            value={"male"}
            onChangeGender={onChangeStudentGender}
            defaultChecked={defaultRadioChecked}
          />
          <RadioButton
            label={"Female"}
            className={"radio__2"}
            id={"radio-2"}
            value={"female"}
            onChangeGender={onChangeStudentGender}
            defaultChecked={!defaultRadioChecked}
          />
        </div>
      </div>
      <BlueButton buttonText={buttonTitle} onSubmitHandler={onSubmit} />
      <Toast />
    </div>
  );
};

export default StudentForm;
