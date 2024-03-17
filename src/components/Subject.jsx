import React from "react";
import Calendar from "./Calendar";
import Subjectlist from "./Subjectlist";
const Subject = () => (
  <>
    <div className="flex justify-around h-screen items-center">
      <div className="border p-6 m-6">
        <h2>Subjects</h2>
        <br />
        <Subjectlist />
      </div>
      <Calendar />
    </div>
  </>
);
export default Subject;
