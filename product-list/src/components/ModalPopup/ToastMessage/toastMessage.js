import React, { createContext, useState } from "react";

export const ToastContext = createContext();

export const ToastMessage = (props) => {
  const [showToast, setShowToast] = useState("");
  const [toastStyle, setToastStyle] = useState("");
  const [toastMessage, setToastMessage] = useState("");

  const handleToastVisibility = (style, duration, message) => {
    if (showToast === "") {
      setToastStyle(style);
      setToastMessage(message);
      setShowToast("show");
      setTimeout(() => {
        setShowToast("");
      }, duration * 1000);
    }
  };

  return (
    <>
        <div className="toast">
          <div className="toast-message">
            <p>{props.type}</p>
          </div>
          <div className="toast-body">
            <p>{props.info}</p>
          </div>
        </div>
    </>
  );
};
