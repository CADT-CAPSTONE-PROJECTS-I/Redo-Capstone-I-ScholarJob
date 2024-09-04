import React, { useState } from 'react';
import axios from 'axios';
import SuccessModal from './success_modal';

const ApplyModal = ({ isOpen, onClose, scholarshipId }) => {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState('pending');
  const [isLoading, setIsLoading] = useState(false);
  const [successModalOpen, setSuccessModalOpen] = useState(false);

  const clientId = localStorage.getItem('clientId');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!clientId) {
      alert('Client ID is missing. Please log in again.');
      return;
    }

    if (file) {
      const formData = new FormData();
      formData.append('client_id', clientId);
      formData.append('scholarship_id', scholarshipId);
      formData.append('status', status);
      formData.append('attach_file', file);

      setIsLoading(true);

      try {
        const response = await axios.post('http://localhost:8000/api/application/store', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        setIsLoading(false);
        setSuccessModalOpen(true);
      } catch (error) {
        setIsLoading(false);
        alert('There was an error submitting your application. Please try again.');
      }
    } else {
      alert('Please select a file to upload.');
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-bold mb-4">Select Attach File</h2>
          
          {isLoading && (
            <div className="flex items-center justify-center mb-4">
              <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 border-current border-t-transparent text-blue-600 rounded-full" role="status">
                <span className="visually-hidden"></span>
              </div>
            </div>
          )}
          
          <input
            type="file"
            onChange={handleFileChange}
            className="mb-4 w-full border border-gray-300 p-2 rounded"
          />
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="bg-red-500 text-white py-2 px-4 rounded mr-2"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="bg-customTeal-dark text-white py-2 px-4 rounded"
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      <SuccessModal
        isOpen={successModalOpen}
        message="Your application has been submitted successfully."
        onClose={() => {
          setSuccessModalOpen(false);
          onClose();
        }}
      />
    </>
  );
};

export default ApplyModal;
