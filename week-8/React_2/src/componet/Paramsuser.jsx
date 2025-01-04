import React from "react";
import { useParams } from "react-router-dom";
function Paramsuser() {
  const { id } = useParams();
  return (
    <div>
      <h1>Student Detail:- {id}</h1>
    </div>
  );
}

export default Paramsuser;
