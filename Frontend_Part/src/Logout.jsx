import React, { useState } from "react";
import { Link } from 'react-router-dom';
const Logout = () => {

    const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

  const handleConfirmModalClose = () => {
    setIsConfirmModalOpen(false);
  };

  return (
    <div className="container1">
    <h1>Log Out</h1>
    <p>Are you sure you want to log out?</p>

    <div className="button-container">
    <Link to = "/home"><button className="button delete" onClick={handleConfirmModalClose}>
        Delete
      </button></Link>
      <Link to = "/"><button className="button confirm" onClick={() => setIsConfirmModalOpen(true)}>
        Confirm
      </button></Link>
    </div>
  </div>
  )
}

export default Logout