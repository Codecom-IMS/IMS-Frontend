import React from "react";
import { ToastContainer } from "react-toastify";

const Toast = () => {
  return (
    <ToastContainer
      position="bottom-center"
      autoClose={3000}
      hideProgressBar={true}
      theme="light"
    />
  );
};

export default Toast;
