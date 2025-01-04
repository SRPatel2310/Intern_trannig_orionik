// import React, { useEffect, useState } from "react";

// function AdvanceUseeffcet() {
//   const [time, setTime] = useState(0); 
//   const [isRunning, setIsRunning] = useState(false);

//   useEffect(() => {
//     let timerInterval;

//     if (isRunning) {
//       timerInterval = setInterval(() => {
//         setTime((prevTime) => prevTime + 1);
//       }, 1000);
//     } else {
//       clearInterval(timerInterval);
//     }

    
//     return () => clearInterval(timerInterval);
//   }, [isRunning]);

//   const toggleTimer = () => {
//     setIsRunning((prevRunning) => !prevRunning);
//   };

//   const resetTimer = () => {
//     setTime(0);
//     setIsRunning(false);
//   };

//   return { time, isRunning, toggleTimer, resetTimer };
// }

// export default AdvanceUseeffcet;
