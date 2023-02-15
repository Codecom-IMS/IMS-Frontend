import { React, useState, useEffect } from "react";
import fetchApi from "../FetchApi";
import { toast } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
import {
  BlueButton,
  ModuleTitle,
  InputField,
  MainBox,
  StudentForm,
  Toast,
  Navbar,
  PopUp,
} from "../index";
import {
  isDataFound,
  searchFieldValidator,
} from "../../services/utils/Validator/fieldsValidator";
import "./updateStudentPage.css";
import { adminValidator } from "../../services/utils/authorizer/userAuthorizer";
import { API_URL } from "../../constants/constants";

const UpdateStudentPage = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const togglePopUp = () => {
    showPopUp ? setShowPopUp(false) : setShowPopUp(true);
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
  const [studentFound, setStudentFound] = useState(false);
  const [student, setStudent] = useState("");
  const updateApiUrl = `${API_URL}admin/updateStudent/${rollNumber}`;
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
        const url = `${API_URL}admin/getStudents?roll_number=${rollNumber}`;
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
    <>
      <Navbar role={role} onClickHandler={togglePopUp} />
      <MainBox>
        <ModuleTitle headerText={"Update Student"} />
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
        {showPopUp && (
          <PopUp
            messageText={"Are You Sure You Want To Logout?"}
            onClickBlueButton={togglePopUp}
            redButtonAction={"logout"}
          />
        )}
        <Toast />
      </MainBox>
    </>
  );
};

export default UpdateStudentPage;
