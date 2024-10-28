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
    <div className="flex bg-black justify-center items-center">
      <div>
        <img
          src="https://c8.alamy.com/comp/2M8HTYH/briefing-with-a-client-isolated-cartoon-vector-illustrations-marketing-agency-worker-talking-with-client-discussing-brand-promotion-professional-ad-2M8HTYH.jpg"
          className="w-[500px] h-[500px] rounded"
          alt="Health-Form-Image"
        />
      </div>
      <div className="bg-black text-white w-[50%] border-gray-700 shadow-lg py-12 flex justify-center items-center">
        <div>
          <h1 className="font-semibold text-xl bg-white text-black py-2 px-3 mb-12">
            Enter Your Health Details Here!
          </h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email" className="font-bold text-lg">
              Email
            </label>{" "}
            <br />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              required
              className="w-full border border-gray-700 bg-transparent mb-6 py-2 px-4 mt-2"
            />
            <br />
            <label htmlFor="gender" className="font-bold text-lg">
              Gender
            </label>{" "}
            <br />
            <input
              type="text"
              name="gender"
              placeholder="Gender"
              onChange={handleChange}
              required
              className="w-full border border-gray-700 bg-transparent  mb-6 py-2 px-4 mt-2"
            />{" "}
            <br />
            <label htmlFor="age" className="font-bold text-lg">
              Age
            </label>{" "}
            <br />
            <input
              type="number"
              name="age"
              placeholder="Age"
              onChange={handleChange}
              required
              className="w-full border border-gray-700 bg-transparent  mb-6 py-2 px-4 mt-2"
            />{" "}
            <br />
            <label htmlFor="pulseRate" className="font-bold text-lg">
              Pulse Rate
            </label>{" "}
            <br />
            <input
              type="number"
              name="pulseRate"
              placeholder="Pulse Rate"
              onChange={handleChange}
              required
              className="w-full border border-gray-700 bg-transparent  mb-6 py-2 px-4 mt-2"
            />{" "}
            <br />
            <label htmlFor="bloodPressure" className="font-bold text-lg">
              Blood Pressure
            </label>{" "}
            <br />
            <input
              type="text"
              name="bloodPressure"
              placeholder="Blood Pressure"
              onChange={handleChange}
              required
              className="w-full border border-gray-700 bg-transparent  mb-6 py-2 px-4 mt-2"
            />{" "}
            <br />
            <label htmlFor="respirationRate" className="font-bold text-lg">
              Respiration Rate
            </label>{" "}
            <br />
            <input
              type="number"
              name="respirationRate"
              placeholder="Respiration Rate"
              onChange={handleChange}
              required
              className="w-full border border-gray-700 bg-transparent  mb-6 py-2 px-4 mt-2"
            />{" "}
            <br />
            <label htmlFor="bodyTemp" className="font-bold text-lg">
              Body Temprature
            </label>{" "}
            <br />
            <input
              type="number"
              name="bodyTemp"
              placeholder="Body Temperature"
              onChange={handleChange}
              required
              className="w-full border border-gray-700 bg-transparent  mb-6 py-2 px-4 mt-2"
            />{" "}
            <br />
            <label htmlFor="oxygenRate" className="font-bold text-lg">
              Oxygen Rate
            </label>{" "}
            <br />
            <input
              type="number"
              name="oxygenRate"
              placeholder="Oxygen Rate"
              onChange={handleChange}
              required
              className="w-full border border-gray-700 bg-transparent  mb-6 py-2 px-4 mt-2"
            />{" "}
            <br />
            <label htmlFor=" bloodGlucose" className="font-bold text-lg">
              Blood Glucose Rate
            </label>{" "}
            <br />
            <input
              type="number"
              name="bloodGlucose"
              placeholder="Blood Glucose"
              onChange={handleChange}
              required
              className="w-full border border-gray-700 bg-transparent  mb-6 py-2 px-4 mt-2"
            />{" "}
            <br />
            <label htmlFor="weight" className="font-bold text-lg">
              Weight
            </label>{" "}
            <br />
            <input
              type="number"
              name="weight"
              placeholder="Weight"
              onChange={handleChange}
              required
              className="w-full border border-gray-700 bg-transparent  mb-6 py-2 px-4 mt-2"
            />{" "}
            <br />
            <label htmlFor="cholestrol" className="font-bold text-lg">
              Cholesterol
            </label>{" "}
            <br />
            <input
              type="text"
              name="cholesterol"
              placeholder="Cholesterol"
              onChange={handleChange}
              required
              className="w-full border border-gray-700 bg-transparent  mb-6 py-2 px-4 mt-2"
            />{" "}
            <br />
            <label htmlFor="cholestrol" className="font-bold text-lg">
              Location
            </label>{" "}
            <br />
            <input
              type="text"
              name="location"
              placeholder="location"
              onChange={handleChange}
              required
              className="w-full border border-gray-700 bg-transparent  mb-6 py-2 px-4 mt-2"
            />{" "}
            <br />
            <button
              type="submit"
              className="bg-white text-black font-semibold px-2 py-1"
            >
              Submit
            </button>
          </form>
        </div>
        {responseMessage && <p>{responseMessage}</p>}
      </div>
    </div>
  );
};

export default HealthDetailsForm;
