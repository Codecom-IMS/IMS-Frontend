const studentFieldsValidator = (
  studentName,
  fatherName,
  fatherCNIC,
  basicFee,
  others,
  dateOfBirth,
  className
) => {
  if (!studentName) {
    return {
      status: false,
      message: "Student Name Empty",
      messageType: "error",
    };
  } else if (!fatherName) {
    return {
      status: false,
      message: "Father Name Empty",
      messageType: "error",
    };
  } else if (!fatherCNIC) {
    return {
      status: false,
      message: "Father CNIC Empty",
      messageType: "error",
    };
  } else if (basicFee === undefined || basicFee === "") {
    return {
      status: false,
      message: "Basic Fee Empty",
      messageType: "error",
    };
  } else if (others === undefined || others === "") {
    return {
      status: false,
      message: "Others Empty",
      messageType: "error",
    };
  } else if (!dateOfBirth) {
    return {
      status: false,
      message: "Date Of Birth Empty",
      messageType: "error",
    };
  } else if (!className) {
    return {
      status: false,
      message: "Class Name Empty",
      messageType: "error",
    };
  } else {
    return {
      status: true,
      message: "",
      messageType: "success",
    };
  }
};

const teacherFieldValidator = (teacherName, teacherEmail, teacherPassword) => {
  if (!teacherName) {
    return {
      status: false,
      message: "Teacher Name Empty",
      messageType: "error",
    };
  } else if (!teacherEmail) {
    return {
      status: false,
      message: "Teacher Email Empty",
      messageType: "error",
    };
  } else if (!teacherPassword) {
    return {
      status: false,
      message: "Teacher Password Empty",
      messageType: "error",
    };
  } else {
    return {
      status: true,
      message: "",
      messageType: "success",
    };
  }
};

const searchFieldValidator = (fieldValue) => {
  if (!fieldValue) {
    return {
      status: false,
      message: "Search Field Empty",
      messageType: "error",
    };
  } else {
    return {
      status: true,
      message: "",
      messageType: "success",
    };
  }
};

const isDataFound = (apiData) => {
  if (apiData.body === null) {
    return {
      status: false,
      message: "Data Not Found",
      messageType: "error",
    };
  }else if(apiData.body.status === "inactive" || apiData.body.status === "not serving"){
    return(
      {
        status: false,
        message: "User Already Deleted",
        messageType: "error"
      }
    )
 } else {
    return {
      status: true,
      message: "",
      messageType: "success",
    };
  }
};

module.exports = {
  studentFieldsValidator,
  teacherFieldValidator,
  searchFieldValidator,
  isDataFound,
};
