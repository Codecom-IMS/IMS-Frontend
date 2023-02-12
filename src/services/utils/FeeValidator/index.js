const rollNumberValidator = (rollNumber) => {
  if (!rollNumber) {
    return {
      status: false,
      message: "Enter Roll Number",
      messageType: "error",
    };
  } else {
    return {
      status: true,
      message: "",
      messageType: "info",
    };
  }
};
function dataValidator(apiData) {
  if (apiData.studentDetails.length === 0) {
    return {
      status: false,
      message: "no Data found",
      messageType: "error",
    };
  } else {
    return {
      status: true,
      message: "",
      messageType: "succes",
    };
  }
}
module.exports = { rollNumberValidator, dataValidator };
