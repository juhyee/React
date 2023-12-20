import { useEffect, useState } from "react";
import './ToastMessage.scss'

function ToastMessage({ setToast, text, name }) {

  const [animation, setAnimation] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setToast(false);
      setAnimation(true);
    }, 2000);
    return () => {
      clearTimeout(timer);
      setAnimation(true);
    };
  }, [setToast]);

  return (
    <div className={`toast ${name} ${animation ? 'on' : 'hide'}`}>
      <p className="toast__text">{text}</p>
    </div>

  );
}

export default ToastMessage;