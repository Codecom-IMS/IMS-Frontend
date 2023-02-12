import React, { useState } from "react";
import fetchApi from "../FetchApi";
import { toast } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
import {
  BlueButton,
  HeaderChip,
  InputField,
  MainBox,
  StudentForm,
  Toast,
} from "../index";
import { isDataFound, searchFieldValidator } from "../../services/utils/Validator/validator";
import "./updateStudentPage.css";

const UpdateStudentPage = () => {
  const [rollNumber, setRollNumber] = useState("");
  const onChangeRollNumber = (newValue) => {
    setRollNumber(newValue.target.value);
  };
  const [studentFound, setStudentFound] = useState(false);
  const [student, setStudent] = useState("");
  const updateApiUrl = `http://localhost:5000/api/admin/updateStudent/${rollNumber}`;
  const [userGenderRadioChecked, setUserGenderRadioChecked] = useState(true);
  const toastNotification = (message, messageType) => {
    toast(message, {
      type: messageType,
    });
  };
  const onSubmit = async () => {
    const isRollNumberValid = searchFieldValidator(rollNumber);
    if (isRollNumberValid.status) {
      try {
        const url = `http://localhost:5000/api/admin/getStudents?roll_number=${rollNumber}`;
        const data = await fetchApi(url, "GET");
        const studentData = await data.json();
        const isRecordFound = isDataFound(studentData);
        if (isRecordFound.status) {
          setStudent(studentData);
          data.body ? setStudentFound(true) : setStudentFound(false);
          studentData?.body.gender === "male"
            ? setUserGenderRadioChecked(true)
            : setUserGenderRadioChecked(false);
        } else {
          toastNotification(isRecordFound.message, isRecordFound.messageType);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      toastNotification(
        isRollNumberValid.message,
        isRollNumberValid.messageType
      );
    }
  };
  return (
    <MainBox>
      <HeaderChip headerText={"Update Student"} />
      {!studentFound ? (
        <>
          <div className="search-field">
            <InputField
              inputType={"number"}
              label={"Roll Number:"}
              placeholder={"Enter Roll Number"}
              value={rollNumber}
              onChangeFunction={onChangeRollNumber}
            />
          </div>
          <BlueButton buttonText={"Search"} onSubmitHandler={onSubmit} />
        </>
      ) : (
        <StudentForm
          buttonTitle={"Update"}
          apiUrl={updateApiUrl}
          callMethod="PUT"
          defaultStudentName={student?.body.student_name}
          defaultFatherName={student?.body.father_name}
          defaultDateOfBirth={student?.body.date_of_birth}
          defaultFatherCNIC={student?.body.father_cnic}
          defaultBasicFee={student?.body.basic_fee}
          defaultOthers={student?.body.others}
          defaultGender={student?.body.gender}
          defaultRadioChecked={userGenderRadioChecked}
          defaultStudentClass={student?.body.class}
          studentFound={studentFound}
          readOnly={false}
        />
      )}
      <Toast />
    </MainBox>
  );
};

export default UpdateStudentPage;
