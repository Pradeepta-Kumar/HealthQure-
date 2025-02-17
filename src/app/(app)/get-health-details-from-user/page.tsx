"use client";
import React, { useState } from "react";
import axios from "axios";

interface HealthFormData {
  email: string;
  gender: string;
  age: number;
  pulseRate: number;
  bloodPressure: string;
  respirationRate: number;
  bodyTemp: number;
  oxygenRate: number;
  bloodGlucose: number;
  weight: number;
  cholesterol: string;
  location: string;
  description: string;
}

const HealthDetailsForm: React.FC = () => {
  const [formData, setFormData] = useState<HealthFormData>({
    email: "",
    gender: "",
    age: 0,
    pulseRate: 0,
    bloodPressure: "",
    respirationRate: 0,
    bodyTemp: 0,
    oxygenRate: 0,
    bloodGlucose: 0,
    weight: 0,
    cholesterol: "",
    location: "",
    description: "",
  });

  const [responseMessage, setResponseMessage] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]:
        name === "age" ||
        name === "pulseRate" ||
        name === "respirationRate" ||
        name === "bodyTemp" ||
        name === "oxygenRate" ||
        name === "bloodGlucose" ||
        name === "weight"
          ? Number(value)
          : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "/api/getHealthDetailsFromUser",
        formData
      );
      setResponseMessage(response.data.message);
    } catch (error) {
      setResponseMessage("Error processing request.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row bg-black justify-center items-center min-h-screen px-4 lg:px-8 py-8">
      {/* Image Section */}
      <div className="flex justify-center items-center w-full lg:w-1/2 mb-8 lg:mb-0">
        <img
          src="https://c8.alamy.com/comp/2M8HTYH/briefing-with-a-client-isolated-cartoon-vector-illustrations-marketing-agency-worker-talking-with-client-discussing-brand-promotion-professional-ad-2M8HTYH.jpg"
          className="w-[300px] sm:w-[400px] md:w-[500px] h-auto rounded-lg shadow-lg"
          alt="Health-Form-Image"
        />
      </div>

      {/* Form Section */}
      <div className="bg-gray-900 text-white w-full lg:w-1/2 border border-gray-800 shadow-lg p-6 lg:p-12 rounded-lg">
        <h1 className="font-semibold text-xl lg:text-2xl bg-white text-black py-2 px-3 mb-8 text-center rounded">
          Enter Your Health Details Here!
        </h1>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
          <div>
            <label htmlFor="email" className="font-bold text-lg">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              required
              className="w-full border border-gray-700 bg-transparent py-2 px-4 mt-2 rounded"
            />
          </div>

          <div>
            <label htmlFor="gender" className="font-bold text-lg">
              Gender
            </label>
            <input
              type="text"
              name="gender"
              placeholder="Gender"
              onChange={handleChange}
              required
              className="w-full border border-gray-700 bg-transparent py-2 px-4 mt-2 rounded"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="age" className="font-bold text-lg">
                Age
              </label>
              <input
                type="number"
                name="age"
                placeholder="Age"
                onChange={handleChange}
                required
                className="w-full border border-gray-700 bg-transparent py-2 px-4 mt-2 rounded"
              />
            </div>
            <div>
              <label htmlFor="pulseRate" className="font-bold text-lg">
                Pulse Rate
              </label>
              <input
                type="number"
                name="pulseRate"
                placeholder="Pulse Rate"
                onChange={handleChange}
                required
                className="w-full border border-gray-700 bg-transparent py-2 px-4 mt-2 rounded"
              />
            </div>
          </div>

          <div>
            <label htmlFor="bloodPressure" className="font-bold text-lg">
              Blood Pressure
            </label>
            <input
              type="text"
              name="bloodPressure"
              placeholder="Blood Pressure"
              onChange={handleChange}
              required
              className="w-full border border-gray-700 bg-transparent py-2 px-4 mt-2 rounded"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="respirationRate" className="font-bold text-lg">
                Respiration Rate
              </label>
              <input
                type="number"
                name="respirationRate"
                placeholder="Respiration Rate"
                onChange={handleChange}
                required
                className="w-full border border-gray-700 bg-transparent py-2 px-4 mt-2 rounded"
              />
            </div>
            <div>
              <label htmlFor="bodyTemp" className="font-bold text-lg">
                Body Temperature
              </label>
              <input
                type="number"
                name="bodyTemp"
                placeholder="Body Temperature"
                onChange={handleChange}
                required
                className="w-full border border-gray-700 bg-transparent py-2 px-4 mt-2 rounded"
              />
            </div>
          </div>

          <div>
            <label htmlFor="oxygenRate" className="font-bold text-lg">
              Oxygen Rate
            </label>
            <input
              type="number"
              name="oxygenRate"
              placeholder="Oxygen Rate"
              onChange={handleChange}
              required
              className="w-full border border-gray-700 bg-transparent py-2 px-4 mt-2 rounded"
            />
          </div>

          <div>
            <label htmlFor="bloodGlucose" className="font-bold text-lg">
              Blood Glucose
            </label>
            <input
              type="number"
              name="bloodGlucose"
              placeholder="Blood Glucose"
              onChange={handleChange}
              required
              className="w-full border border-gray-700 bg-transparent py-2 px-4 mt-2 rounded"
            />
          </div>

          <div>
            <label htmlFor="weight" className="font-bold text-lg">
              Weight
            </label>
            <input
              type="number"
              name="weight"
              placeholder="Weight"
              onChange={handleChange}
              required
              className="w-full border border-gray-700 bg-transparent py-2 px-4 mt-2 rounded"
            />
          </div>

          <div>
            <label htmlFor="cholesterol" className="font-bold text-lg">
              Cholesterol
            </label>
            <input
              type="text"
              name="cholesterol"
              placeholder="Cholesterol"
              onChange={handleChange}
              required
              className="w-full border border-gray-700 bg-transparent py-2 px-4 mt-2 rounded"
            />
          </div>

          <div>
            <label htmlFor="location" className="font-bold text-lg">
              Location
            </label>
            <input
              type="text"
              name="location"
              placeholder="Location"
              onChange={handleChange}
              required
              className="w-full border border-gray-700 bg-transparent py-2 px-4 mt-2 rounded"
            />
          </div>

          <div>
            <label htmlFor="description" className="font-bold text-lg">
              Description
            </label>
            <input
              type="text"
              name="description"
              placeholder="Enter what you feel?"
              onChange={handleChange}
              required
              className="w-full border border-gray-700 bg-transparent py-2 px-4 mt-2 rounded"
            />
          </div>

          <button
            type="submit"
            className="bg-white text-black font-semibold px-4 py-2 rounded hover:bg-gray-300 transition-all duration-200"
          >
            Submit
          </button>
        </form>
        {responseMessage && (
          <p className="text-center mt-4 text-green-400">{responseMessage}</p>
        )}
      </div>
    </div>
  );
};

export default HealthDetailsForm;
