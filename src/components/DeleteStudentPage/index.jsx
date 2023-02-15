import { React, useState, useEffect } from "react";
import {
  MainBox,
  ModuleTitle,
  InputField,
  BlueButton,
  RedButton,
  Toast,
  Navbar,
  PopUp,
} from "../index";
import fetchApi from "../FetchApi";
import { toast } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
import "./deleteStudentPage.css";
import {
  isDataFound,
  searchFieldValidator,
} from "../../services/utils/Validator/fieldsValidator";
import { adminValidator } from "../../services/utils/authorizer/userAuthorizer";
import { API_URL } from "../../constants/constants";

const DeleteStudentPage = () => {
  const [redButtonAction, setRedButtonAction] = useState("logout");
  const [showPopUp, setShowPopUp] = useState(false);
  const togglePopUp = () => {
    showPopUp ? setShowPopUp(false) : setShowPopUp(true);
    if (redButtonAction === "delete") {
      setRedButtonAction("logout");
    }
  };
  const [role, setRole] = useState("");
  useEffect(() => {
    const authrorize = async () => {
      const result = await adminValidator();
      setRole(result);
    };
    authrorize();
  }, []);
  const [rollNumber, setRollNumber] = useState("");
  const onChangeRollNumber = (newValue) => {
    setRollNumber(newValue.target.value);
  };
  const [student, setStudent] = useState("");
  const [studentFound, setStudentFound] = useState(false);
  const toastNotification = (message, messageType) => {
    toast(message, {
      type: messageType,
    });
  };
  const onSubmit = async () => {
    const isSearchFieldValid = searchFieldValidator(rollNumber);
    if (isSearchFieldValid.status) {
      try {
        const url = `${API_URL}admin/getStudents?roll_number=${rollNumber}`;
        const data = await fetchApi(url, "GET");
        const studentData = await data.json();
        const isRecordFound = isDataFound(studentData);
        if (isRecordFound.status) {
          setStudent(studentData);
          data.body ? setStudentFound(true) : setStudentFound(false);
          setRedButtonAction("delete");
          console.log(redButtonAction);
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

  const deleteStudent = async () => {
    try {
      const url = `${API_URL}admin/deleteStudent?roll_number=${rollNumber}`;
      await fetchApi(url, "DELETE");
      toastNotification("Student Deleted", "success");
      setShowPopUp(false);
      setStudentFound(false);
    } catch (error) {
      toastNotification("Error Occured", "error");
      setShowPopUp(false);
      setStudentFound(false);
    }
  };
  return (
    <>
      <Navbar role={role} onClickHandler={togglePopUp} />
      <MainBox>
        <ModuleTitle headerText={"Delete Student"} />
        {studentFound ? (
          <>
            <div className="delete-page-fields">
              <InputField
                inputType={"number"}
                label={"Roll Number:"}
                value={student?.body.roll_number}
                readOnly={true}
              />
              <InputField
                inputType={"text"}
                label={"Student Name:"}
                value={student?.body.student_name}
                readOnly={true}
              />
              <InputField
                inputType={"text"}
                label={"Father Name:"}
                value={student?.body.father_name}
                readOnly={true}
              />
            </div>
            <RedButton
              buttonText={"Delete"}
              onSubmitHandler={() => {
                setShowPopUp(true);
                setRedButtonAction("delete");
              }}
            />
          </>
        ) : (
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
        )}
        {showPopUp && (
          <PopUp
            messageText={"Are You Sure You Want To Logout?"}
            onClickBlueButton={togglePopUp}
            redButtonAction={redButtonAction}
            deleteUserFuntion={deleteStudent}
          />
        )}
        <Toast />
      </MainBox>
    </>
  );
};

export default DeleteStudentPage;
