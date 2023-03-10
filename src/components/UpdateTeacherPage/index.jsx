import { React, useState, useEffect } from "react";
import {
  TeacherForm,
  InputField,
  BlueButton,
  Toast,
  ModuleTitle,
  Navbar,
  PopUp,
} from "../index";
import MainBox from "../UserManagementMainDiv";
import fetchApi from "../FetchApi";
import "./updateTeacherPage.css";
import { toast } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
import {
  isDataFound,
  searchFieldValidator,
} from "../../services/utils/Validator/fieldsValidator";
import { adminValidator } from "../../services/utils/authorizer/userAuthorizer";
import { API_URL } from "../../constants/constants";

const UpadteTeacherPage = () => {
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
  const [teacherId, setTeacherId] = useState("");
  const onChangeTeacherId = (newValue) => {
    setTeacherId(newValue.target.value);
  };
  const [teacherData, setTeacherData] = useState("");
  const [teacherFound, setTeacherFound] = useState(false);
  const api = `${API_URL}admin/updateTeacher/${teacherId}`;
  const toastNotification = (message, messageType) => {
    toast(message, {
      type: messageType,
    });
  };
  const onSubmit = async () => {
    const isIdValid = searchFieldValidator(teacherId);
    if (isIdValid.status) {
      try {
        const url = `${API_URL}admin/getTeachers?id=${teacherId}`;
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
      <Navbar role={role} onClickHandler={togglePopUp} />
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

export default UpadteTeacherPage;
