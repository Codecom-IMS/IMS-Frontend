import React from 'react'
// import TableContainer from "@material-ui/core/TableContainer";
// import Table from "@material-ui/core/Table";
// import tbody from "@material-ui/core/tbody";
// import tr from "@material-ui/core/tr";
// import Paper from "@material-ui/core/Paper";
// import thead from "@material-ui/core/thead";
// import td from "@material-ui/core/td";
import "./table.css"

export default function Resulttable({apiData}) {
    console.log(apiData)
    if(apiData.length===0){
        return(
            <div class="table-wrapper">
                    <table class="fl-table">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Student Name</th>
                                <th>Father Name</th>
                                <th>Class</th>
                                <th>Attendance</th>
                            </tr>
                        </thead>
                        <tbody>
                                <tr>
                                    <td >No Data</td>
                                    <td >No Data</td>
                                    <td >No Data</td>
                                    <td >No Data</td>
                                    <td >No Data</td>
                                </tr>
                        </tbody>
                    </table>
            </div>
        )
    }
    else{
        return(
            <div class="table-wrapper">
                    <table class="fl-table">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Student Name</th>
                                <th>Father Name</th>
                                <th>Class</th>
                                <th>Attendance</th>
                            </tr>
                        </thead>
                        <tbody>
                            {apiData.map((row)=>{
                                return(
                                <tr>
                                    <td >{row.date}</td>
                                    <td >{row.student_name}</td>
                                    <td >{row.father_name}</td>
                                    <td >{row.class}</td>
                                    <td >{row.attendance}</td>
                                </tr>
                                )
                            })}
                        </tbody>
                    </table>
            </div>
        )
    }
}
