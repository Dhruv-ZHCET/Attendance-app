import React from "react";
import PercentageWheel from "./components/PercentageWheel";
import { DownOutlined } from "@ant-design/icons";
import Calendar from "./components/Calendar";
import { Sidebar } from "flowbite-react";
import Subject from "./components/Subject";
import Header from "./components/Header";
import SimpleFooter from "./components/SimpleFooter";
import { BrowserRouter,Route , Routes } from "react-router-dom";
const App = () => (
  <>
  <div>
    <Header/>
  </div>
    <div>
      <Subject/>
    </div>
    <div className="p-5 m-5">
      <SimpleFooter/>
    </div>
    <BrowserRouter>
    <Routes>
      <Route path="/Signal and System" Component={<Subject subjectName="Signal and System"/>}>
      </Route>
      <Route path="/Discrete Mathematics" Component={<Subject subjectName="Discrete Mathematics"/>}>
      </Route>
      <Route path="/Numerical Analysis and Probability" Component={<Subject subjectName="Numerical Analysis and Probability"/>}>
      </Route>
      <Route path="/Computer Architecture">
        <Subject subjectName="Architecture"/>
      </Route>
      <Route path="/Design and analysis of Algorithm">
        <Subject subjectName="Design and analysis of Algorithm"/>
      </Route>
      <Route path="/se">
        <Subject subjectName="Software Engineering"/>
      </Route>
    </Routes>
    </BrowserRouter>
  </>
);
export default App;
