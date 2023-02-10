import React, { useState } from "react";
import fetchApi from "../FetchApi";
import { BlueButton, InputField, Toast} from "../index"
import "./TeacherForm.css"
import { toast } from "react-toastify";
import "react-toastify/ReactToastify.min.css";

const TeacherForm = ({apiUrl,callMethod, defaultTeacherName,defaultTeacherEmail,defaultTeacherPassword})=>{
    const [teacherName, setTeacherName] = useState(defaultTeacherName)
    const onChangeTeacherName = (newValue) => {
        setTeacherName(newValue.target.value)
    }
    const [teacherEmail, setTeacherEmail] = useState(defaultTeacherEmail)
    const onChangeTeacherEmail = (newValue) => {
        setTeacherEmail(newValue.target.value)
    }
    const [teacherPassword, setTeacherPassword] = useState(defaultTeacherPassword)
    const onChangeTeacherPassword = (newValue) => {
        setTeacherPassword(newValue.target.value)
    }
    const toastNotification = (message,messageType)=>{
        toast(message,{
            type:messageType,
        })
    }
    const onSubmit = async()=>{
        const url = apiUrl? apiUrl : "http://localhost:5000/api/admin/addTeacher";
        if(callMethod === "POST"){
            
            try{
                const teacherData = {
                    id: 13,
                    name: teacherName,
                    email: teacherEmail,
                    password: teacherPassword,
                    status: "serving"
                }
                await fetchApi(url,callMethod,teacherData)
                toastNotification("Teacher Added","success")
            } catch(error){
                toastNotification("Error Occure","error")
            }
        }else{
            try{
                const teacherData = {
                    name: teacherName,
                    email: teacherEmail,
                    password: teacherPassword
                }
                await fetchApi(url,callMethod,teacherData)
                toastNotification("Teacher Edited","success")
            } catch(error){
                toastNotification("Error Occured","error")
            }
        }
    }
    return(
        <div className="add-teacher-form">
                <div className="add-teacher-fields">
                <InputField inputType={"text"} label={"Teacher Name:"} value={teacherName} onChangeFunction={onChangeTeacherName} placeholder={"Enter Name"} />
                <InputField inputType={"text"} label={"Enter Email:"} value={teacherEmail} onChangeFunction={onChangeTeacherEmail} placeholder={"Email"} />
                </div>
                <div className="add-teacher-fields">
                <InputField inputType={"password"} label={"Enter Password:"} value={teacherPassword} onChangeFunction={onChangeTeacherPassword} placeholder={"Password"} />
                </div>
                <BlueButton buttonText={"Submit"} onSubmitHandler={onSubmit}/>
                <Toast/>
            </div>
    )
}

export default TeacherForm