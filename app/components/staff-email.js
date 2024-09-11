
//  const EmailTemplate =  () => (

//     const form = localStorage.getItem("ans");
//     return (
//         <div>
//           <h2>Your Answers</h2>
//           {JSON.parse(form).map((item, index) => (
//             <div key={index}>
//               <p>{item.question}</p>
//               <p>{item.answer}</p>
//             </div>
//           ))}
//         </div>
//     )
// );

// export default EmailTemplate;

import React from "react";

const StaffEmailTemplate = ({
  job,
  duration,
  improvements,
  comments,
  enjoy,
  mentalHealth,
  healthImpact,
  balance,
  concerns,
  performance,
  supported,
  advancement,
  communication,
  training,
  time,
  quality,
  safe,
  autonomy,
  valued,
  satisfied,
  hours
}) => {

  return (
    <div>
      {/* <h2>Your Answers {firstName}</h2> */}
      <div>
        <p>Job Tittle*: {job[0]}</p>
         <p>Length of Employment*: {duration[0]}</p>
        <p>Contracted Hours of employment *: {hours}</p>
        <p>How satisfied are you with your current workload?: {satisfied}</p>
        <p>Do you feel that your work is valued by the organisation? *: {valued}</p>
        <p>How satisfied are you with the level of autonomy you have in your role : {autonomy}</p>
        <p>Do you feel safe in your wok environment? *: {safe }</p>
        <p>How would you rate the quality of the equipment and materials provided for your work? : {quality }</p>
        <p>Do you think you have enough time to complete your tasks during Client's visits?: {time }</p>
        <p>Do you feel that you have received adequate training in your role? *: {training }</p>
        <p>Do you feel that there are opportunities for career advancement within the organisation? *: {advancement }</p>
        <p>How would you rate the communication between you and your supervisors? *: {communication}</p>
        <p>Do you feel supported by your supervisors and management team?*: {supported }</p>
        <p>How often do you receive feedback on your performance?*: {performance }</p>
        <p>Are your concerns or issues addressed promptly by management? *: {concerns }</p>
        <p>How satisfied are you with your work-life balance? *: {balance }</p>
        <p>Do you feel that your job negatively impacts your mental health?*: {mentalHealth }</p>
        <p>What do you enjoy most about your job?: {enjoy }</p>
        <p>Any additional comments or concerns?: {comments }</p>
        <p>What improvement would you suggest for your role or the organisation?: {improvements }</p>
      </div>
    </div>
  );
};

export default StaffEmailTemplate;
