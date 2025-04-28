import { useState } from "react";
import { IoCheckmarkCircleSharp } from "react-icons/io5"
import { ConfirmationCard } from "./ConfirmationCard";
import { NavLink, redirect } from "react-router-dom";
export const Steppers = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };
  const prevStep = () => {
    if (step < 3) {
      setStep(step - 1);
    }
  };
  const handleSubmit = () => {
    alert("Form submitted successfully!");
    return redirect(nextStep);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-20">
      {/* Step Buttons */}
      <div className="flex items-center space-x-60 mb-4">
        {[1, 2, 3].map((num, index) => (
          <div key={num} className="flex flex-col items-center">
            <button
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold
                ${step === num ? "bg-green-500 text-black" : "bg-gray-300 text-gray-600"}
              `}
              onClick={() => setStep(num)}
            >
              {num}
            </button>
            <span
              className={`text-sm font-semibold ${step === num ? "text-[#000000]" : "text-[#E0E4E9]"}`}
            >
              {['personal information', 'political information', 'confirmation'][index]}
            </span>
          </div>
        ))}
      </div>

      {/* Line under buttons */}
      <div className="w-full h-1 bg-gray-300 mb-6 relative">
        <div
          className="absolute h-1 bg-[#0E874E]"
          style={{ width: `${(step - 1) * 50}%` }}
        ></div>
      </div>

      {/* Forms for each step */}
      <div className="w-[621px] h-[460px] bg-white p-6 mb-32 border rounded-lg font-inter">
        {step === 1 && (
          <div>
            <h2 className="text-3xl font-inter mb-4">Personal Information</h2>

            <div class="mb-1 flex gap-6">
              <div class="w-full max-w-sm min-w-[200px]">
                <label class="block mb-2 text-sm text-slate-600">
                  First Name
                </label>
                <input type="text" class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="First Name" />
              </div>
              <div class="w-full max-w-sm min-w-[200px]">
                <label class="block mb-2 text-sm text-slate-600">
                  Last Name
                </label>
                <input type="tex" class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Last Name" />
              </div>
            </div>
            <div class="mb-1 flex gap-6 mt-6">
              <div class="w-full max-w-sm min-w-[200px]">
                <label class="block mb-2 text-sm text-slate-600">
                  Email Address
                </label>
                <input type="email" class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Email Address" />
              </div>
              <div class="w-full max-w-sm min-w-[200px]">
                <label class="block mb-2 text-sm text-slate-600">
                  Phone Number
                </label>
                <input
                  id="contactNumber"
                  class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                  placeholder="e.g., +1 123-456-7890"
                  pattern="^\+\d{1,3}\s\d{1,4}-\d{1,4}-\d{4}$"
                  maxlength="16"
                  type="number"
                />
              </div>
            </div>
            <div class="mb-1 flex gap-6 mt-6">
              <div class="w-full max-w-sm min-w-[200px]">
                <label class="block mb-1 text-sm text-slate-800">
                  Gender
                </label>

                <div class="relative">
                  <select
                    class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer">
                    <option value="brazil">Select Gender</option>
                    <option value="brazil">Male</option>
                    <option value="bucharest">Female</option>
                    <option value="london">Others</option>
                  </select>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" class="h-5 w-5 ml-1 absolute top-2.5 right-2.5 text-slate-700">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                  </svg>
                </div>
              </div>
              <div class="w-full max-w-sm min-w-[200px]">
                <label class="block mb-2 text-sm text-slate-600">
                  Date of Birth
                </label>
                <input
                  id="contactNumber"
                  class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                  type="date"
                />
              </div>
            </div>
            <button
              className="bg-[#13A05E] float-right text-lg mt-8 text-white px-6 py-3 rounded-md"
              onClick={nextStep}
            >
              Continue
            </button>
          </div>
        )}

        {step === 2 && (
          <div>
            < h2 className="text-3xl font-inter mb-4">Political Information</h2>
            <div class="mb-1 flex gap-6 mt-6">
              <div class="w-full max-w-sm min-w-[200px]">
                <label class="block mb-1 text-sm text-slate-800">
                  State
                </label>

                <div class="relative">
                  <select
                    class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer">
                    <option value="brazil">Select your State</option>
                    <option value="brazil">Gombe</option>
                    <option value="bucharest">Kano</option>
                    <option value="london">Kaduna</option>
                    <option value="london">Abuja</option>
                  </select>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" class="h-5 w-5 ml-1 absolute top-2.5 right-2.5 text-slate-700">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                  </svg>
                </div>
              </div>
              <div class="w-full max-w-sm min-w-[200px]">
                <label class="block mb-1 text-sm text-slate-800">
                  Local Government Area
                </label>

                <div class="relative">
                  <select
                    class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer">
                    <option value="brazil">Select your LGA</option>
                    <option value="brazil">Akko</option>
                    <option value="bucharest">Kumo</option>
                    <option value="london">Kaduna</option>
                  </select>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" class="h-5 w-5 ml-1 absolute top-2.5 right-2.5 text-slate-700">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                  </svg>
                </div>
              </div>
            </div>
            <div class="mb-1 flex gap-6 mt-6">
              <div class="w-full max-w-sm min-w-[200px]">
                <label class="block mb-2 text-sm text-slate-600">
                  ward
                </label>
                <input type="text" class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Enter Your ward" />
              </div>
              <div class="w-full max-w-sm min-w-[200px]">
                <label class="block mb-2 text-sm text-slate-600">
                  Polling Unit
                </label>
                <input type="tex" class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Enter Your Polling Unit" />
              </div>
            </div>
            <div className="flex justify-between mt-8 ">
              <button
                className="border border-[#13A05E] text-lg mt-8 text-[#1BB86F] font-inter px-6 py-3 rounded-md"
                onClick={prevStep}
              >
                Back
              </button>
              <button
                className="bg-[#13A05E] text-lg mt-8 text-white px-6 py-3 rounded-md"
                onClick={handleSubmit}
              >
                Complete Registration
              </button>
            </div>

          </div>
        )}

        {step === 3 && (
          <div className="flex flex-col items-center justify-center">
            <div className="bg-[#C5FDE3] rounded-full p-3 mb-4">
              <IoCheckmarkCircleSharp className="text-4xl rounded-full] text-[#0E874E]" />
            </div>
            <h2 className="text-xl font-semibold mb-4">Registration Successfully</h2>
            <p className="text-gray-600">Thank you for joining SDP Arewa Youths Movement. Your digital </p>
            <p className="mb-4 text-gray-600">membership card will be sent to your email within 24 hours.l </p>
            <ConfirmationCard />
            <NavLink
              className="bg-[#13A05E] text-[#F5FFFA] font-inter font-bold px-4 py-2 rounded"
              to="/"
            >
              Back To Home Page
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};
