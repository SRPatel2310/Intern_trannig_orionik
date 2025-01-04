import React from "react";
import { useState } from "react";
function LiftingStateUp() {
  const [Inputvalue, setInputvalue] = useState("");
  return (
    <>
      <InputContent Inputvalue={Inputvalue} setInputvalue={setInputvalue} />
      <DisplayContect Inputvalue={Inputvalue} />
    </>
  );
}

const InputContent = ({ Inputvalue, setInputvalue }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Enter the Contect !"
        value={Inputvalue}
        onChange={(e) => setInputvalue(e.target.value)}
      ></input>
    </>
  );
};

const DisplayContect = ({ Inputvalue }) => {
  return (
    <>
      <p>this is contect of current text {Inputvalue}</p>
    </>
  );
};

export default LiftingStateUp;
