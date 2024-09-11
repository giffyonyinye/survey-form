
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

const EmailTemplate = ({
    ageGroup,
      gender,
      anonymous,
      duration,
      quality,
      other,
      respected,
      arrivalTime,
      satisfied,
      communicate,
      informed,
      comfortable,
      competence,
      trained,
      treated,
      service,
      recommend,
      supportPlan,
      safe,
      ppe,
      consent,
      improved,
      comments,
}) => {

  return (
    <div>
      {/* <h2>Your Answers {firstName}</h2> */}
      <div>
        <p>What is your age group? *: {ageGroup}</p>
         <p>Your gender? *: {gender}</p>
        <p>Do you want to remain anonymous? *: {anonymous[0]}</p>
        <p>Duration of care *: {duration[0]}</p>
        <p>How would you rate the quality of care you receive? *: {quality[0]}</p>
        <p>other: {other}</p>
        <p>respected: {respected }</p>
        <p>Do the care workers arrive on time for your scheduled visit? : {arrivalTime }</p>
        <p>How satisfied are you with the level of personal care provided, (e.g., bathing, dressing, etc?): {satisfied }</p>
        <p>How well do care workers communicate with you? *: {communicate }</p>
        <p>Are you informed in advance if there is a change in your care schedule? *: {informed }</p>
        <p>Do you feel comfortable discussing any concerns or issues with your care workers?: {comfortable}</p>
        <p>How would you rate the competence of the care workers?*: {competence }</p>
        <p>Do you feel that the care workers are well-trained and knowledgeable? *: {trained }</p>
        <p>Do care workers treat you with dignity and respect? *: {treated }</p>
        <p>Overall, how satisfied are you with the service you receive? *: {service }</p>
        <p>Would you recommend our service to others? *: {recommend }</p>
        <p>Do you feel your support plan is tailored to meet your specific needs?*: {supportPlan }</p>
        <p>Do you feel safe and secure while receiving care in your home? *: {safe }</p>
        <p>Do the care workers use appropriate Personal Protective Equipment (PPE) during visits?: {ppe }</p>
        <p>Do you feel that your consent is sought before any care procedures are carried out?: {consent }</p>
        <p>Are there any areas you feel could be improved?: {improved }</p>
        <p>Do you have any additional comments or feedback?: {comments }</p> 
      </div>
    </div>
  );
};

export default EmailTemplate;
