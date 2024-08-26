import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Navbar } from "../import/all_import.jsx"; 
import { getJobDetail } from '../API/career_api';

const DetailedJobPage = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchJobDetail = async () => {
      const data = await getJobDetail(jobId);
      setJob(data);
    };

    fetchJobDetail();
  }, [jobId]);

  if (!job) {
    return <div>Loading...</div>;
  }

  return (
    <div>

      <header className="p-12 bg-white">
        <Navbar /> 
      </header>

      <div className="max-w-screen-lg mx-auto p-8">

        <div className="flex justify-between items-start mb-8">
          <div className="flex items-center">
            <img
              src={job.image_url}
              alt={job.title}
              className="w-32 h-32 object-cover mr-4 rounded"
            />
            <div>
              <h1 className="text-2xl font-bold">{job.title}</h1>
              <p>{job.organization.name}, {job.organization.location}</p>
              <p>Publish Date: {new Date(job.created_at).toLocaleDateString()}</p>
              <p>Closing Date: {new Date(job.deadline).toLocaleDateString()}</p>
            </div>
          </div>
        </div>


        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-teal-100 p-4 rounded">
            <h2 className="text-xl font-semibold mb-2">Job's Requirement</h2>
            <p>{job.qualification}</p>
            <p>Experience: {job.experience}</p>
            <p>Age Requirement: {job.age_require}</p>
            <p>{job.responsible}</p>
          </div>

          <div className="bg-teal-100 p-4 rounded">
            <h2 className="text-xl font-semibold mb-2">Job's Information</h2>
            <p>Category: {job.category.name}</p>
            <p>Type: {job.job_type}</p>
            <p>Salary: {job.salary}</p>
            <p>Location: {job.organization.location}</p>
            <p>Available Position: {job.available_position}</p>
          </div>
        </div>


        <div className="bg-teal-100 p-4 rounded mb-8">
          <h2 className="text-xl font-semibold mb-2">Job's Responsibilities</h2>
          <p>{job.description}</p>
        </div>
        <div className="bg-teal-100 p-4 rounded mb-8">
          <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
          <p>Phone: {job.contact.phone}</p>
          <p>Email: {job.contact.email}</p>
          <p>Location: {job.organization.location}</p>
        </div>

 
        <div className="text-center">
          <button className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600">
            Apply Now!
          </button>
        </div>
      </div>

 
      <footer className="bg-gray-200 p-4 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 ScholarJob. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default DetailedJobPage;
