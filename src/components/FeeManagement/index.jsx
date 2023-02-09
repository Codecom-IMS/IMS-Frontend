import React, { useEffect, useState } from "react";
import "./feemanagement.css";
import {
  MainBox,
  HeaderChip,
  Form,
  Button,
  Waves,
  Navbar,
  AddFeeDiv,
  Field
} from "../index";


function FeeManagement() {
  const [inputData, setInputData] = useState("");
  const [apiData, setapiData] = useState({
    studentDetails: [],
  });
  const handleChange = (newData) => {
    setInputData(newData);
  };

  const searchStudent = async () => {
    const method = "GET";
    const getStudentDetails = await fetch(
      `http://localhost:5000/api/admin/feeDetails?roll_number=${inputData}`,
      {
        method,
        headers: { "Content-type": "Application/json" },
      }
    );
    const result = await getStudentDetails.json();
    console.log(result);
    setapiData(result);
  };
  const addFee = async () => {
    const method = "post";
    const getStudentDetails = await fetch(
      `http://localhost:5000/api/admin/addFee?roll_number=${inputData}`,
      {
        method,
        headers: { "Content-type": "Application/json" },
      }
    );
    const result = await getStudentDetails.json();
    setapiData(result);
  };
  // useEffect(()=>{
  //   console.log('useEffectApi',apiData?.studentDetails)
  // },[apiData])

  return (
    <div className="App-header">
      <Navbar />
      <div className="inner-header flex">
        {apiData?.studentDetails.length === 0? (
          <MainBox>
            <HeaderChip />
            <Form
              text="Enter students roll number"
              type="number"
              placeholder="e.g F18-1138"
              handleChange={handleChange}
            />
            <Button buttonName="search" buttonChange={searchStudent} />

            
          </MainBox>
        ) : (
          <AddFeeDiv>
            <HeaderChip />
            <div className="feediv">
               <Field text="Student Name :" data={apiData.studentDetails[0]?.student_name} >student name :</Field>
            
               <br />{" "}
              basic fee : {apiData.studentDetails[0]?.basic_fee}
              <br /> others : {apiData.studentDetails[0]?.others}
              <br /> roll number : {apiData.studentDetails[0]?.roll_number}{" "}
              <br /> previous arrears :{" "}
              {apiData?.PrevArrears?.arrears == undefined
                ? 0
                : apiData?.PrevArrears?.arrears}
                 <Form
              text="Enter fee "
              type="number"
              placeholder="e.g 2800"
              handleChange={handleChange}
            />
            <Button buttonName="search" buttonChange={addFee} />
                
           
            </div >
          </AddFeeDiv>
        )}
      </div>
      <div className="wavesdiv">
        <Waves />
      </div>
    </div>
  );
}

export default FeeManagement;
