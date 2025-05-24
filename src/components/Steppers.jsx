import { useState, useEffect } from "react";
import Select from 'react-select';
import { ConfirmationCard } from "./ConfirmationCard";
import { nigerianStates } from "../data/state";

export const Steppers = () => {
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [states, setStates] = useState([]);
  const [lgAs, setLgAs] = useState([]);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedLga, setSelectedLga] = useState(null);
  const [membershipId, setMembershipId] = useState('');

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    gender: '',
    dob: '',
    state: '',
    lga: '',
    ward: '',
    pollingUnit: ''
  });

  // Format states for react-select
  useEffect(() => {
    const formattedStates = nigerianStates.map(state => ({
      value: state.name,
      label: state.name,
      lgAs: state.lgAs
    }));
    setStates(formattedStates);
  }, []);

  // Update LGAs when state changes
  useEffect(() => {
    if (selectedState) {
      const stateData = nigerianStates.find(s => s.name === selectedState.value);
      const formattedLgAs = stateData.lgAs.map(lga => ({
        value: lga,
        label: lga
      }));
      setLgAs(formattedLgAs);
      setSelectedLga(null);
    }
  }, [selectedState]);

  const validateStep1 = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First Name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last Name is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email address';
    if (!/^(\+\d{1,3}\s\d{1,4}-\d{1,4}-\d{4}|0\d{9,11})$/.test(formData.phone)) newErrors.phone = 'Format: +[country code] [xxx-xxx-xxxx] or 0xxxxxxxxxx';
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (!formData.dob) newErrors.dob = 'Date of Birth is required';
    return newErrors;
  };

  const validateStep2 = () => {
    const newErrors = {};
    if (!formData.state) newErrors.state = 'State is required';
    if (!formData.lga) newErrors.lga = 'LGA is required';
    if (!formData.ward.trim()) newErrors.ward = 'Ward is required';
    if (!formData.pollingUnit.trim()) newErrors.pollingUnit = 'Polling Unit is required';
    return newErrors;
  };

  const handleNextStep = () => {
    const stepErrors = step === 1 ? validateStep1() : validateStep2();
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }
    setErrors({});
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setErrors({});
    setStep(step - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const generateMembershipId = () => {
    return `SDP-${Math.floor(10000 + Math.random() * 90000)}`;
  };

  const handleSubmit = async () => {
    try {
      const id = generateMembershipId();
      const response = await fetch('http://localhost:5000/api/members', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          membershipId: id,
          registrationDate: new Date().toISOString()
        }),
      });

      if (response.ok) {
        setMembershipId(id);
        setStep(3);
      } else {
        alert('Submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Submission failed');
    }
  };

  // Custom styles for react-select
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      minHeight: '44px',
      borderColor: errors.state || errors.lga ? '#ef4444' : '#e2e8f0',
      boxShadow: state.isFocused ? '0 0 0 1px #13A05E' : 'none',
      '&:hover': {
        borderColor: state.isFocused ? '#13A05E' : '#cbd5e1'
      }
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#13A05E' : state.isFocused ? '#e2f5ec' : 'white',
      color: state.isSelected ? 'white' : 'inherit'
    })
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      {/* Step indicators */}
      <div className="flex flex-wrap justify-between w-full max-w-3xl mb-8">
        {[1, 2, 3].map((num) => (
          <div key={num} className="flex flex-col items-center mx-2 mb-4">
            <button
              onClick={() => step >= num && setStep(num)}
              className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg
                ${step >= num ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-600'}
              `}
            >
              {step > num ? '✓' : num}
            </button>
            <span className={`text-sm font-medium mt-2 ${step >= num ? 'text-gray-900' : 'text-gray-400'}`}>
              {['Personal Info', 'Political Info', 'Confirmation'][num - 1]}
            </span>
          </div>
        ))}
      </div>

      {/* Progress bar */}
      <div className="w-full max-w-3xl h-2 bg-gray-200 rounded-full mb-12">
        <div
          className="h-full bg-green-500 rounded-full transition-all duration-300"
          style={{ width: `${(step - 1) * 50}%` }}
        ></div>
      </div>

      {/* Form container */}
      <div className="w-full max-w-3xl bg-white p-8 rounded-lg shadow-md">
        {step === 1 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Personal Information</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-md border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent`}
                />
                {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-md border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent`}
                />
                {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-md border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent`}
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+234 123-456-7890 or 07012345678"
                  className={`w-full px-4 py-3 rounded-md border ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent`}
                />
                {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-md border ${errors.gender ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent`}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                {errors.gender && <p className="mt-1 text-sm text-red-600">{errors.gender}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  max={new Date().toISOString().split('T')[0]}
                  className={`w-full px-4 py-3 rounded-md border ${errors.dob ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent`}
                />
                {errors.dob && <p className="mt-1 text-sm text-red-600">{errors.dob}</p>}
              </div>
            </div>

            <div className="flex justify-end mt-8">
              <button
                onClick={handleNextStep}
                className="px-6 py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Political Information</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                <Select
                  options={states}
                  value={selectedState}
                  onChange={(option) => {
                    setSelectedState(option);
                    setFormData(prev => ({
                      ...prev,
                      state: option.value,
                      lga: ''
                    }));
                  }}
                  placeholder="Select State"
                  styles={customStyles}
                  classNamePrefix="react-select"
                />
                {errors.state && <p className="mt-1 text-sm text-red-600">{errors.state}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Local Government Area</label>
                <Select
                  options={lgAs}
                  value={selectedLga}
                  onChange={(option) => {
                    setSelectedLga(option);
                    setFormData(prev => ({
                      ...prev,
                      lga: option.value
                    }));
                  }}
                  isDisabled={!selectedState}
                  placeholder="Select LGA"
                  styles={customStyles}
                  classNamePrefix="react-select"
                />
                {errors.lga && <p className="mt-1 text-sm text-red-600">{errors.lga}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Ward</label>
                <input
                  name="ward"
                  value={formData.ward}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-md border ${errors.ward ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent`}
                />
                {errors.ward && <p className="mt-1 text-sm text-red-600">{errors.ward}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Polling Unit</label>
                <input
                  name="pollingUnit"
                  value={formData.pollingUnit}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-md border ${errors.pollingUnit ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent`}
                />
                {errors.pollingUnit && <p className="mt-1 text-sm text-red-600">{errors.pollingUnit}</p>}
              </div>
            </div>

            <div className="flex justify-between mt-8">
              <button
                onClick={handlePrevStep}
                className="px-6 py-3 border border-green-600 text-green-600 font-medium rounded-md hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors"
              >
                Previous
              </button>
              <button
                onClick={handleSubmit}
                className="px-6 py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors"
              >
                Submit
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <ConfirmationCard
            formData={{
              ...formData,
              membershipId,
              registrationDate: new Date().toLocaleDateString()
            }}
          />
        )}
      </div>
    </div>
  );
};