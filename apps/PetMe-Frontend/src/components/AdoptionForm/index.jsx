import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AdoptionForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    livingConditions: '',
    previousPetExperience: '',
    reasonsForAdoption: '',
    agreementChecked: false,
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here (e.g., send data to backend)
    console.log('Form submitted with data:', formData);
    // Close the form after submission
    onClose();
  };

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex justify-center items-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white rounded-lg p-8 max-w-md w-full"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      >
        <h2 className="text-2xl font-bold mb-4">Adoption Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="livingConditions" className="block text-sm font-medium text-gray-700">
              Living Conditions:
            </label>
            <textarea
              id="livingConditions"
              name="livingConditions"
              value={formData.livingConditions}
              onChange={handleChange}
              rows="3"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="previousPetExperience" className="block text-sm font-medium text-gray-700">
              Previous Pet Experience:
            </label>
            <textarea
              id="previousPetExperience"
              name="previousPetExperience"
              value={formData.previousPetExperience}
              onChange={handleChange}
              rows="3"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="reasonsForAdoption" className="block text-sm font-medium text-gray-700">
              Reasons for Adoption:
            </label>
            <textarea
              id="reasonsForAdoption"
              name="reasonsForAdoption"
              value={formData.reasonsForAdoption}
              onChange={handleChange}
              rows="3"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>

          <div className="mb-4">
            <div className="flex items-center">
              <input
                id="agreementChecked"
                name="agreementChecked"
                type="checkbox"
                checked={formData.agreementChecked}
                onChange={handleChange}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                required
              />
              <label htmlFor="agreementChecked" className="ml-2 block text-sm text-gray-900">
                I agree to the adoption terms and conditions.
              </label>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md mr-2"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-indigo-600 text-white px-4 py-2 rounded-md"
              disabled={!formData.agreementChecked} // Disable submit button until agreement checked
            >
              Submit
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default AdoptionForm;
