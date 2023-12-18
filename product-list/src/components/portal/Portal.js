import ReactDom from "react-dom";

const ModalPortal = ({ children }) => {
    const el = document.getElementById("modal")
    const toastMsg = document.getElementById("toastMsg")
    return ReactDom.createPortal(children, el, toastMsg)
}

export default ModalPortal