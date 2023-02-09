import React from "react";
import { useState } from 'react';
import "./AddStudentPage.css"
import { MainBox, HeaderChip, InputField, BlueButton, RadioButton } from "../index";

const AddStudentPage = () => {
    const [studentName, setStudentName] = useState("");
    const onChnageStudentName = (newValue) => {
        setStudentName(newValue.target.value)
    }
    const [fatherName, setFatherName] = useState("");
    const onChangeFatherName = (newValue) => {
        setFatherName(newValue.target.value)
    }
    const [dateOfBirth, setDateOfBirth] = useState("");
    const onChangeDateOfBirth = (newValue) => {
        setDateOfBirth(newValue.target.value)
    }
    const [fatherCNIC, setFatherCNIC] = useState("");
    const onChangeFatherCNIC = (newValue) => {
        setFatherCNIC(newValue.target.value)
    }
    const [basicFee, setBasicFee] = useState("")
    const onChangeBasicFee = (newValue) => {
        setBasicFee(newValue.target.value)
    }
    const [others, setOthers] = useState("")
    const onChangeOthers = (newValue) => {
        setOthers(newValue.target.value)
    }
    const [studentClass, setStudentClass] = useState("")
    const onChangeStudentClass = (newValue) => {
        setStudentClass(newValue.target.value)
    }
    const [gender,setGender] = useState("male")
    const onChangeStudentGender = (newValue)=>{
        setGender(newValue.target.value)
    }
    const onSubmit=()=>{
        const currentDate = new Date()
        let day = '01'
        let month = currentDate.getMonth();
        let year = currentDate.getFullYear();
        
        (currentDate.getDate() <= 9)? day = `0${currentDate.getDate()}`: day = `${currentDate.getDate()}`;
        (currentDate.getMonth() <= 9)? month = `0${currentDate.getMonth()+1}`: month = `${currentDate.getMonth()+1}`;
        let dateString = `${year}-${month}-${day}`
        console.log(dateString)
        fetch(`http://localhost:5000/api/admin/addStudent?roll_number=11&student_name=${studentName}&father_name=${fatherName}&father_cnic=${fatherCNIC}&others=${others}&date_of_admission=${dateString}&date_of_birth=${dateOfBirth}&class=${studentClass}&basic_fee=${basicFee}&gender=${gender}&fee_status=unpaid&status=active`,{
            method:'POST',
            headers:{"Content-type": "Application/json"}
        }).then(res=>{console.log(res.data)})
    }
    return (
        <MainBox>
            <HeaderChip headerText={"Add Student"} />
            <div className='form'>
                <div className="fields-div">
                    <InputField inputType={"text"} label={"Student Name:"} placeholder={"Enter Student Name"} value={studentName} onChangeFunction={onChnageStudentName} />
                    <InputField inputType={"text"} label={"Father Name:"} placeholder={"Enter Father Name"} value={fatherName} onChangeFunction={onChangeFatherName} />
                </div>
                <div className='fields-div'>
                    <InputField inputType={"text"} label={"Father CNIC:"} labelId={"CNIC"} placeholder={"Enter CNIC"} value={fatherCNIC} onChangeFunction={onChangeFatherCNIC} />
                    <InputField inputType={"number"} label={"Basic Fee:"} labelId={"Fee"} placeholder={"Enter Fee"} value={basicFee} onChangeFunction={onChangeBasicFee} />
                </div>
                <div className='fields-div'>
                    <InputField inputType={"number"} label={"Others:"} placeholder={"Other"} value={others} onChangeFunction={onChangeOthers} />
                    <InputField inputType={"date"} label={"Date Of Birth:"} placeholder={"yyyy-mm-dd"} value={dateOfBirth} onChangeFunction={onChangeDateOfBirth} />
                </div>
                <div className="radio-div">
                    <InputField inputType={"text"} label={"Class:"} placeholder={"Class"} value={studentClass} onChangeFunction={onChangeStudentClass} />
                    <div className='radio-container'>
                        <RadioButton label={"Male"} className={"radio__1"} id={"radio-1"} value={"male"} onChangeGender={onChangeStudentGender} defaultChecked={true}/>
                        <RadioButton label={"Female"} className={"radio__2"} id={"radio-2"} value={"female"} onChangeGender={onChangeStudentGender} />
                    </div>
                </div>

                <BlueButton buttonText={"Submit"} onSubmitHandler={onSubmit}/>
            </div>

        </MainBox>
    )
}

export default AddStudentPage;