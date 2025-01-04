import React from "react";
import { useState } from "react";

const Evnet = () => {
  // State to track ON/OFF
  const [isOn, setIsOn] = useState(false);

  // Function to toggle state
  const handleToggle = () => {
    setIsOn((prevState) => !prevState);
  };

  return (
    <div className="toggle-container">
      <button
        className={`toggle-button ${isOn ? "on" : "off"}`}
        onClick={handleToggle}
      >
        {isOn ? "ON" : "OFF"}
      </button>
    </div>
  );
};

export default Evnet;
