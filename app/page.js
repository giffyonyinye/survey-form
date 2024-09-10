// pages/index.js
"use client";
import { useState } from "react";

import { Resend } from 'resend';

const resend = new Resend("test123");

export default function Home() {
  const [status, setStatus] = useState('');
  const [formData, setFormData] = useState({
    ageGroup: "",
    gender: "",
    anonymous: [],
    duration: [],
    quality: [],
    other: "",
    respected: "",
    arrivalTime: "",
    satisfied: "",
    communicate: "",
    informed: "",
    comfortable: "",
    competence: "",
    trained: "",
    treated: "",
    service: "",
    recommend: "",
    supportPlan: "",
    safe: "",
    ppe: "",
    consent: "",
    improved: "",
    comments: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      const updatedValues = formData[name].includes(value)
        ? formData[name].filter((v) => v !== value)
        : [...formData[name], value];
      setFormData({ ...formData, [name]: updatedValues });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const sendEmail =  async (req, res) => {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['delivered@resend.dev'],
      subject: 'Hello world',
      // react: EmailTemplate({ firstName: 'John' }),
      data: formData
    });
  
    if (error) {
      return res.status(400).json(error);
    }
  
    res.status(200).json(data);
  };
  

  const handleSubmit =  async (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send to an API)
    console.log(formData);
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log(response)

      if (response.ok) {
        setStatus('Email sent successfully!');
      } else {
        setStatus('Failed to send email.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('Error occurred while sending email.');
    }
  };

  return (
    <div className=" bg-gray-200 ">
      {status}
      <div className="flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 mt-5 rounded-lg shadow-lg max-w-2xl w-full"
        >
          <h1 className="font-bold">CLIENT SURVEY FORM</h1>
          <p>
            {" "}
            This survey has been shared with you to help us analyse and improve
            the quality of care we provide. You do not have to declare your
            Identity if you choose not to, as this can be returned anonymously
          </p>
          {/* Age Group */}
          <div className="mb-4 mt-6">
            <label className="block text-sm font-medium text-gray-700">
              What is your age group? *
            </label>
            <select
              name="ageGroup"
              value={formData.ageGroup}
              onChange={handleChange}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Choose</option>
              <option value="18-25">18-25</option>
              <option value="26-35">26-35</option>
              <option value="36-45">36-45</option>
              <option value="45+">45+</option>
            </select>
          </div>

          {/* Gender */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Your gender? *
            </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Choose</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Anonymous */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Do you want to remain anonymous? *
            </label>
            <div className="mt-2">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="anonymous"
                  value="Yes"
                  checked={formData.anonymous.includes("Yes")}
                  onChange={handleChange}
                  className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                />
                <span className="ml-2">Yes</span>
              </label>
              <label className="inline-flex items-center ml-4">
                <input
                  type="checkbox"
                  name="anonymous"
                  value="No"
                  checked={formData.anonymous.includes("No")}
                  onChange={handleChange}
                  className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                />
                <span className="ml-2">No</span>
              </label>
            </div>
            {formData.anonymous.includes("No") && (
              <div className="mt-2">
                <label className="block text-sm font-medium text-gray-700">
                  Please provide your full name:
                </label>
                <input
                  type="text"
                  name="other"
                  value={formData.other}
                  onChange={handleChange}
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            )}
          </div>

          {/* Duration of care */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Duration of care *
            </label>
            <div className="mt-2">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="duration"
                  value="Less than 6 months"
                  checked={formData.duration.includes("Less than 6 months")}
                  onChange={handleChange}
                  className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                />
                <span className="ml-2">Less than 6 months</span>
              </label>{" "}
              <br />
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="duration"
                  value="6 months to 1 year"
                  checked={formData.duration.includes("6 months to 1 year")}
                  onChange={handleChange}
                  className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                />
                <span className="ml-2">6 months to 1 year</span>
              </label>{" "}
              <br />
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="duration"
                  value="1-2 years"
                  checked={formData.duration.includes("1-2 years")}
                  onChange={handleChange}
                  className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                />
                <span className="ml-2">1-2 years</span>
              </label>{" "}
              <br />
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="duration"
                  value="More than 2 years"
                  checked={formData.duration.includes("More than 2 years")}
                  onChange={handleChange}
                  className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                />
                <span className="ml-2">More than 2 years</span>
              </label>
            </div>
          </div>

          {/* quality of care */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              How would you rate the quality of care you receive? *
            </label>
            <div className="mt-2">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="quality"
                  value="Excellent"
                  checked={formData.quality.includes("Excellent")}
                  onChange={handleChange}
                  className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                />
                <span className="ml-2">Excellent</span>
              </label>{" "}
              <br />
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="quality"
                  value="Good"
                  checked={formData.quality.includes("Good")}
                  onChange={handleChange}
                  className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                />
                <span className="ml-2">Good</span>
              </label>{" "}
              <br />
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="quality"
                  value="Satisfactory"
                  checked={formData.quality.includes("Satisfactory")}
                  onChange={handleChange}
                  className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                />
                <span className="ml-2">Satisfactory</span>
              </label>{" "}
              <br />
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="quality"
                  value="Poor"
                  checked={formData.quality.includes("Poor")}
                  onChange={handleChange}
                  className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                />
                <span className="ml-2">Poor</span>
              </label>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Do the care workers arrive on time for your scheduled visit? *
            </label>
            <select
              name="arrivalTime"
              value={formData.arrivalTime}
              onChange={handleChange}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Choose</option>
              <option value="Always">Always</option>
              <option value="Usually">Usually</option>
              <option value="Sometimes">Sometimes</option>
              <option value="Rarely">Rarely</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Do the care workers arrive on time for your scheduled visit? *
            </label>
            <select
              name="respected"
              value={formData.respected}
              onChange={handleChange}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Choose</option>
              <option value="Always">Always</option>
              <option value="Most of the time">Most of the time</option>
              <option value="Sometimes">Sometimes</option>
              <option value="Rarely">Rarely</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              How satisfied are you with the level of personal care provided,
              (e.g., bathing, dressing, etc?)
            </label>
            <select
              name="satisfied"
              value={formData.satisfied}
              onChange={handleChange}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Choose</option>
              <option value="Very Satisfied">Very Satisfied</option>
              <option value="Satisfied">Satisfied</option>
              <option value="Neutral">Neutral</option>
              <option value="Dissatisfied">Dissatisfied</option>
              <option value="Very dissatisfied">Very dissatisfied</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              How well do care workers communicate with you? *
            </label>
            <select
              name="communicate"
              value={formData.communicate}
              onChange={handleChange}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Choose</option>
              <option value="Excellent">Excellent</option>
              <option value="Good">Good</option>
              <option value="Satisfactory">Satisfactory</option>
              <option value="Poor">Poor</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Are you informed in advance if there is a change in your care
              schedule? *
            </label>
            <select
              name="informed"
              value={formData.informed}
              onChange={handleChange}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Choose</option>
              <option value="Always">Always</option>
              <option value="Most of the time">Most of the time</option>
              <option value="Sometimes">Sometimes</option>
              <option value="Rarely">Rarely</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Do you feel comfortable discussing any concerns or issues with
              your care workers?
            </label>
            <select
              name="comfortable"
              value={formData.comfortable}
              onChange={handleChange}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Choose</option>
              <option value="Always">Always</option>
              <option value="Most of the time">Most of the time</option>
              <option value="Sometimes">Sometimes</option>
              <option value="Rarely">Rarely</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              How would you rate the competence of the care workers?*
            </label>
            <select
              name="competence"
              value={formData.competence}
              onChange={handleChange}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Choose</option>
              <option value="Excellent">Excellent</option>
              <option value="Good">Good</option>
              <option value="Satisfactory">Satisfactory</option>
              <option value="Poor">Poor</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Do you feel that the care workers are well-trained and
              knowledgeable? *
            </label>
            <select
              name="trained"
              value={formData.trained}
              onChange={handleChange}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Choose</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Unsure">Unsure</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Do care workers treat you with dignity and respect? *
            </label>
            <select
              name="treated"
              value={formData.treated}
              onChange={handleChange}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Choose</option>
              <option value="Always">Always</option>
              <option value="Most of the time">Most of the time</option>
              <option value="Sometimes">Sometimes</option>
              <option value="Rarely">Rarely</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Overall, how satisfied are you with the service you receive? *
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Choose</option>
              <option value="Very Satisfied">Very Satisfied</option>
              <option value="Satisfied">Satisfied</option>
              <option value="Neutral">Neutral</option>
              <option value="Dissatisfied">Dissatisfied</option>
              <option value="Very dissatisfied">Very dissatisfied</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Would you recommend our service to others? *
            </label>
            <select
              name="recommend"
              value={formData.recommend}
              onChange={handleChange}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Choose</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Unsure">Maybe</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Do you feel your support plan is tailored to meet your specific
              needs?*
            </label>
            <select
              name="supportPlan"
              value={formData.supportPlan}
              onChange={handleChange}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Choose</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Unsure">Maybe</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Do you feel safe and secure while receiving care in your home? *
            </label>
            <select
              name="safe"
              value={formData.safe}
              onChange={handleChange}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Choose</option>
              <option value="Always">Always</option>
              <option value="Most of the time">Most of the time</option>
              <option value="Sometimes">Sometimes</option>
              <option value="Rarely">Rarely</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Do the care workers use appropriate Personal Protective Equipment
              (PPE) during visits?
            </label>
            <select
              name="ppe"
              value={formData.ppe}
              onChange={handleChange}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Choose</option>
              <option value="Always">Always</option>
              <option value="Most of the time">Most of the time</option>
              <option value="Sometimes">Sometimes</option>
              <option value="Rarely">Rarely</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Do you feel that your consent is sought before any care procedures
              are carried out?
            </label>
            <select
              name="consent"
              value={formData.consent}
              onChange={handleChange}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Choose</option>
              <option value="Always">Always</option>
              <option value="Most of the time">Most of the time</option>
              <option value="Sometimes">Sometimes</option>
              <option value="Rarely">Rarely</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Are there any areas you feel could be improved?
            </label>
            <input
              type="text"
              name="improved"
              value={formData.improved}
              onChange={handleChange}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Do you have any additional comments or feedback?
            </label>
            <input
              type="text"
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* Submit Button */}
          <div className="mt-4">
            <button
              type="submit"
              className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
