import React from "react";
import Calendar from "./Calendar";
import Subjectlist from "./Subjectlist";
const Subject = ({subjectName}) => (
  <>
    <div className="flex justify-around items-center">
      <h2>{subjectName}</h2>
      <Subjectlist/>
      <Calendar />
    </div>
  </>
);
export default Subject;
