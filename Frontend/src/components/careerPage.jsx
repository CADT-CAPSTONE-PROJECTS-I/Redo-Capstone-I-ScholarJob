import React, { useEffect, useState } from 'react';
import {
  Navbar,
  ScholarJobLogoGreen,
} from "../import/all_import.jsx";
import { getJobs } from '../API/career_api.jsx';

const CareerPage = () => {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState({
    title: '',
    job_type: '',
    salary_min: '',
    salary_max: '',
    experience: '',
    category_id: ''
  });

  useEffect(() => {
    const fetchJobs = async () => {
      const data = await getJobs(filters);
      setJobs(data);
    };

    fetchJobs();
  }, [filters]);

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <header className="p-12 bg-white">
        <Navbar />
      </header>

      <section className="relative items-center flex min-h-[250px] mx-16 bg-gradient-to-tl from-customTeal-light/50 to-customTeal-dark/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">
            Start your flourishing journey with us, ScholarJob!
          </h1>
          <div className="flex justify-center items-center mb-6">
            <input
              type="text"
              placeholder="Please input the position you want to find..."
              className="p-2 w-full max-w-md border rounded-lg text-gray-700"
              name="title"
              onChange={handleFilterChange}
            />
            <button
              className="bg-white text-green-500 px-4 py-2 ml-2 rounded-lg"
              onClick={() => getJobs(filters)}
            >
              Search
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
        
            <select className="p-2 rounded-lg text-gray-700" name="job_type" onChange={handleFilterChange}>
              <option value="">Job Type</option>
              <option value="On-site">On-site</option>
              <option value="Remote">Remote</option>
              <option value="Hybrid">Hybrid</option>
            </select>
            <select className="p-2 rounded-lg text-gray-700" name="experience" onChange={handleFilterChange}>
              <option value="">Experience</option>
              <option value="1">1 Year</option>
              <option value="2">2 Years</option>
              <option value="3">3+ Years</option>
            </select>
            <select className="p-2 rounded-lg text-gray-700" name="salary_min" onChange={handleFilterChange}>
              <option value="">Salary Min</option>
              <option value="1000">&lt; 1000$</option>
              <option value="5000">1000$ - 5000$</option>
              <option value="5001">&gt; 5000$</option>
            </select>
            <select className="p-2 rounded-lg text-gray-700" name="category_id" onChange={handleFilterChange}>
              <option value="">Category</option>
              <option value="1">Accounting</option>
              <option value="2">Engineering</option>
              <option value="3">Software Development</option>
              <option value="4">Marketing</option>
            </select>
          </div>
        </div>
      </section>
      <br />

      <div className="flex justify-center mb-6">
        <button className="px-4 py-2 bg-gradient-to-tl from-customTeal-light/50 to-customTeal-dark/80 text-white rounded-lg">Recommended</button>
        <button className="px-4 py-2 bg-white text-green-500 rounded-lg mx-2">Tops</button>
        <button className="px-4 py-2 bg-white text-green-500 rounded-lg">News</button>
      </div>

      <section className="relative items-center flex min-h-[250px] mx-16 bg-gray-100">
        <div className="container mx-auto px-4 py-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {jobs.map((job, idx) => (
              <div key={idx} className="bg-white rounded-lg p-4 shadow-md">
                <div className="flex items-center mb-4">
                <img
                  src={job.image_url ?? ScholarJobLogoGreen}
                  className="h-10"
                  alt="ScholarJob Logo"
                />
                  <div className="ml-4">
                    <h3 className="text-lg font-bold">{job.title}</h3>
                    <p>{job.organization?.name}</p>
                  </div>
                </div>
                <div>
                  <p><strong>Experience:</strong> {job.experience} year(s)</p>
                  <p><strong>Job Type:</strong> {job.job_type}</p>
                  <p><strong>Salary:</strong> {job.salary}</p>
                  <p><strong>Available position:</strong> {job.available_position} pax</p>
                  <p><strong>Location:</strong> {job.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerPage;
