import React from "react";
// import { motion } from "framer-motion";

const Modal = ({ setSelectedImg, selectedImg }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null);
    }
  };

  return (
    <div className="backdrop" onClick={handleClick}>
      <img src={selectedImg} alt="enlarged pic" />
      <button class="btn">
        <i class="fa fa-download"></i> Download
      </button>
    </div>
  );
};
export default Modal;
