import React, { useEffect, useState } from "react";
import {
  Navbar,
  ScholarJobLogoGreen,
  Link,
  Icon,
  Footer,
  LoadingPage,
  getJobs,
  getOrganizationAddresses
} from "../import/all_import.jsx";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];
  const maxVisiblePages = 5;

  if (currentPage > 1) {
    pageNumbers.push(1);
  }
  if (currentPage > 3) {
    pageNumbers.push('...');
  }
  const startPage = Math.max(2, currentPage - 2);
  const endPage = Math.min(totalPages - 1, currentPage + 2);

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  if (currentPage < totalPages - 2) {
    pageNumbers.push('...');
  }

  if (currentPage < totalPages) {
    pageNumbers.push(totalPages);
  }

  return (
    <div className="pagination flex justify-center space-x-2 mt-8">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-4 py-2 border ${currentPage === 1 ? "bg-gray-200" : "bg-customTeal text-white"}`}
      >
        Previous
      </button>

      {pageNumbers.map((page, index) => (
        <button
          key={index}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 border ${page === currentPage ? "bg-customTeal-dark text-white" : "bg-white"}`}
          disabled={page === '...'}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 border ${currentPage === totalPages ? "bg-gray-200" : "bg-customTeal text-white"}`}
      >
        Next
      </button>
    </div>
  );
};

const CareerPage = () => {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState({
    title: "",
    job_type: "",
    salary_min: "",
    salary: "",
    experience: "",
    category_id: "",
    organization_address: "",
  });
  const [addresses, setAddresses] = useState([]);
  const [totalRecords, setTotalRecords] = useState(0);
  const itemsPerPage = 50;
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      const { jobs, total } = await getJobs(filters, currentPage, itemsPerPage);
      setJobs(jobs);
      setTotalRecords(total);
      setLoading(false);
    };

    fetchJobs();
  }, [filters, currentPage]);

  useEffect(() => {
    const fetchAddresses = async () => {
      setLoading(true);
      const response = await getOrganizationAddresses();
      setAddresses(response.data);
      setLoading(false);
    };

    fetchAddresses();
  }, []);

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const totalPages = Math.ceil(totalRecords / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <div>
      <header className="p-12 bg-white">
        <Navbar />
      </header>

      <section className="relative items-center flex min-h-[250px] mx-16 rounded-lg bg-gradient-to-tl from-customTeal-light/50 to-customTeal-dark/80 text-white">
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
              onClick={() => paginate(1)}
            >
              Search
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
            <select
              className="p-2 rounded-lg text-gray-700"
              name="job_type"
              onChange={handleFilterChange}
            >
              <option value="">Job Type</option>
              <option value="On-site">On-site</option>
              <option value="Remote">Remote</option>
              <option value="Hybrid">Hybrid</option>
            </select>
            <select
              className="p-2 rounded-lg text-gray-700"
              name="experience"
              onChange={handleFilterChange}
            >
              <option value="">Experience</option>
              <option value="1">1 Year</option>
              <option value="2">2 Years</option>
              <option value="3">3+ Years</option>
            </select>

            <select
              className="p-2 rounded-lg text-gray-700"
              name="salary"
              onChange={handleFilterChange}
            >
              <option value="">Salary</option>
              <option value="1000">&lt; 1000$</option>
              <option value="5000">1000$ - 5000$</option>
              <option value="5001">&gt; 5000$</option>
            </select>

            <select
              className="p-2 rounded-lg text-gray-700"
              name="category_id"
              onChange={handleFilterChange}
            >
              <option value="">Category</option>
              <option value="1">Accounting</option>
              <option value="2">Engineering</option>
              <option value="3">Software Development</option>
              <option value="4">Marketing</option>
            </select>
            <select
              className="p-2 rounded-lg text-gray-700"
              name="organization_address"
              onChange={handleFilterChange}
            >
              <option value="">Select Location</option>
              {addresses.map((address, idx) => (
                <option key={idx} value={address}>
                  {address}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>
      <br />


      <section className="relative items-center flex min-h-[250px] mx-16 rounded-lg bg-gray-100">
        <div className="container mx-auto px-4 py-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {jobs.map((job, idx) => (
              <Link to={`/career/${job.id}`} key={idx} className="no-underline">
                <div className="relative bg-white rounded-lg shadow-md p-4 flex transform transition-all duration-300 hover:scale-105 hover:bg-customTeal group hover:text-white">
                  <img
                    src={job.image_url || ScholarJobLogoGreen}
                    className="w-32 h-32 object-cover rounded-lg mr-5"
                    alt="ScholarJob Logo"
                  />
                  {job.urgent == 1 && (
                    <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-semibold py-1 px-3 rounded-bl-lg">
                      Urgent!
                    </span>
                  )}

                  <div className="flex flex-col justify-between">
                    <div className="ml-3">
                      <h3 className="text-lg font-bold">{job.title}</h3>
                      <p>{job.organization?.name}</p>
                    </div>
                    <div className="ml-3">
                      <p>
                        <strong>Job Type:</strong> {job.job_type}
                      </p>
                      <p>
                        <strong>Salary:</strong> {job.salary}
                      </p>
                      <p>
                        <strong>Available position:</strong>{" "}
                        {job.available_position} pax
                      </p>
                    </div>
                    <div className="ml-3 mt-2 group-hover:text-white relative transfrom transition-all duration-300">
                      <p>
                        <strong>Location:</strong> {job.organization.address}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={paginate}
      />
      <br />

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default CareerPage;
