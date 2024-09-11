// pages/index.js
"use client";
import { useState } from "react";

import { Resend } from "resend";

const resend = new Resend("test123");

export default function StaffForm() {
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({
    job: [],
    duration: [],
    improvements: "",
    comments: "",
    enjoy: "",
    mentalHealth: "",
    healthImpact: "",
    balance: "",
    concerns: "",
    performance: "",
    supported: "",
    advancement: "",
    communication: "",
    training: "",
    time: "",
    quality: "",
    safe: "",
    autonomy: "",
    valued: "",
    satisfied: "",
    hours: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send to an API)
    console.log(formData);
    try {
      const response = await fetch("/api/staff-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Email sent successfully!");
      } else {
        setStatus("Failed to send email.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Error occurred while sending email.");
    }
  };

  return (
    <div className=" bg-gray-200 ">
      <div className="flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 mt-5 rounded-lg shadow-lg max-w-2xl w-full"
        >
          <h1 className="font-bold">STAFF SURVEY FORM</h1>
          <p>
            {" "}
            Please answer ALL questions as honestly as possible. Your responses
            will be kept confidential and used to improve the work environment
            and support provided to staff. The questionnaire is designed to
            gather comprehensive feedback from staff. It focuses on areas
            critical to your job satisfaction and well-being.
          </p>
          <h2>
            Thank you for taking your time to participate in this important
            exercise!
          </h2>
          <div className="mb-4 mt-10">
            <label className="block text-sm font-medium text-gray-700">
              Job Title *
            </label>
            <div className="mt-2">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="job"
                  value="Care Worker"
                  checked={formData.job.includes("Care Worker")}
                  onChange={handleChange}
                  className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                />
                <span className="ml-2">Care Worker</span>
              </label>{" "}
              <br />
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="job"
                  value="Senior Care Worker"
                  checked={formData.job.includes("Senior Care Worker")}
                  onChange={handleChange}
                  className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                />
                <span className="ml-2">Senior Care Worker</span>
              </label>{" "}
              <br />
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="job"
                  value="Team Leader"
                  checked={formData.job.includes("Team Leader")}
                  onChange={handleChange}
                  className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                />
                <span className="ml-2">Team Leader</span>
              </label>{" "}
              <br />
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="job"
                  value="Other"
                  checked={formData.job.includes("Other")}
                  onChange={handleChange}
                  className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                />
                <span className="ml-2">Other</span>
              </label> <br/>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="job"
                  value="I choose to remain anonymous"
                  checked={formData.job.includes(
                    "I choose to remain anonymous"
                  )}
                  onChange={handleChange}
                  className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                />
                <span className="ml-2">I choose to remain anonymous</span>
              </label>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Length of Employment*
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

          {/* Age Group */}
          <div className="mb-4 mt-6">
            <label className="block text-sm font-medium text-gray-700">
              Contracted Hours of employment *
            </label>
            <select
              name="hours"
              value={formData.hours}
              onChange={handleChange}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Choose</option>
              <option value="39hrs">39hrs</option>
              <option value="36hrs">36hrs</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              How satisfied are you with your current workload? *
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
              Do you feel that your work is valued by the organisation? *
            </label>
            <select
              name="valued"
              value={formData.valued}
              onChange={handleChange}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Choose</option>
              <option value="Always">Always</option>
              <option value="Often">Often</option>
              <option value="Sometimes">Sometimes</option>
              <option value="Rarely">Rarely</option>
              <option value="Never">Never</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              How satisfied are you with the level of autonomy you have in your
              role? *
            </label>
            <select
              name="autonomy"
              value={formData.autonomy}
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
              Do you feel safe in your wok environment? *
            </label>
            <select
              name="safe"
              value={formData.safe}
              onChange={handleChange}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Choose</option>
              <option value="Always">Always</option>
              <option value="Often">Often</option>
              <option value="Sometimes">Sometimes</option>
              <option value="Rarely">Rarely</option>
              <option value="Never">Never</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              How would you rate the quality of the equipment and materials
              provided for your work?
            </label>
            <select
              name="quality"
              value={formData.quality}
              onChange={handleChange}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Choose</option>
              <option value="Excellent">Excellent</option>
              <option value="Good">Good</option>
              <option value="Fair">Fair</option>
              <option value="Good">Good</option>
              <option value="Poor">Poor</option>
              <option value="Very Poor">Very Poor</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Do you think you have enough time to complete your tasks during
              Client's visits?
            </label>
            <select
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Choose</option>
              <option value="Always">Always</option>
              <option value="Often">Often</option>
              <option value="Sometimes">Sometimes</option>
              <option value="Rarely">Rarely</option>
              <option value="Never">Never</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Do you feel that you have received adequate training in your role?
              *
            </label>
            <select
              name="training"
              value={formData.training}
              onChange={handleChange}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Choose</option>
              <option value="Yes, and it was adequate">
                Yes, and it was adequate
              </option>
              <option value="Yes, but not adequate">
                Yes, but not adequate
              </option>
              <option value="No, I am yet to receive">
                No, I am yet to receive
              </option>
              <option value="No, I have not received">
                No, I have not received
              </option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              How would you rate the communication between you and your
              supervisors? *
            </label>
            <select
              name="communication"
              value={formData.communication}
              onChange={handleChange}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Choose</option>
              <option value="Excellent">Excellent</option>
              <option value="Good">Good</option>
              <option value="Fair">Fair</option>
              <option value="Good">Good</option>
              <option value="Poor">Poor</option>
              <option value="Very Poor">Very Poor</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Do you feel that there are opportunities for career advancement
              within the organisation?
            </label>
            <select
              name="advancement"
              value={formData.advancement}
              onChange={handleChange}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Choose</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Maybe">Maybe</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Do you feel supported by your supervisors and management team? *
            </label>
            <select
              name="supported"
              value={formData.supported}
              onChange={handleChange}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Choose</option>
              <option value="Always">Always</option>
              <option value="Often">Often</option>
              <option value="Sometimes">Sometimes</option>
              <option value="Rarely">Rarely</option>
              <option value="Never">Never</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              How often do you receive feedback on your performance? *
            </label>
            <select
              name="performance"
              value={formData.performance}
              onChange={handleChange}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Choose</option>
              <option value="Regularly">Regularly</option>
              <option value="Occassionally">Occassionally</option>
              <option value="Rarely">Rarely</option>
              <option value="Never">Never</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Are your concerns or issues addressed promptly by management? *
            </label>
            <select
              name="concerns"
              value={formData.concerns}
              onChange={handleChange}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Choose</option>
              <option value="Always">Always</option>
              <option value="Often">Often</option>
              <option value="Sometimes">Sometimes</option>
              <option value="Rarely">Rarely</option>
              <option value="Never">Never</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              How satisfied are you with your work-life balance? *
            </label>
            <select
              name="balance"
              value={formData.balance}
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
              Do you feel that your job negatively impacts your physical health?
              *
            </label>
            <select
              name="healthImpact"
              value={formData.healthImpact}
              onChange={handleChange}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Choose</option>
              <option value="Always">Always</option>
              <option value="Often">Often</option>
              <option value="Sometimes">Sometimes</option>
              <option value="Rarely">Rarely</option>
              <option value="Never">Never</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Do you feel that your job negatively impacts your physical health?
              *
            </label>
            <select
              name="mentalHealth"
              value={formData.mentalHealth}
              onChange={handleChange}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Choose</option>
              <option value="Always">Always</option>
              <option value="Often">Often</option>
              <option value="Sometimes">Sometimes</option>
              <option value="Rarely">Rarely</option>
              <option value="Never">Never</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              What do you enjoy most about your job?
            </label>
            <input
              type="text"
              name="enjoy"
              value={formData.enjoy}
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

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              What improvement would you suggest for your role or the
              organisation?
            </label>
            <input
              type="text"
              name="improvements"
              value={formData.improvements}
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
