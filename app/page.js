// pages/index.js
"use client";

import SurveyForm from "./emails";
import StaffForm from "./emails/staffSuvey";

export default function Home() {


  return (
    <div className=" bg-gray-200 ">
      <StaffForm/>
    </div>
  );
}
