import {
  Navbar,
  CadtLogo,
  Icon,
  appStore,
  HarvardUniverity,
  Link,
  Footer,
  getOrganizationAddresses,
  fetchScholarships
} from "../import/all_import.jsx";
import React, { useState, useEffect } from "react";

const ScholarshipPage = () => {
  const { currentPage, setCurrentPage, addresses, setAddresses } = appStore();
  const [filters, setFilters] = useState({
    title: "",
    job_type: "",
    salary_min: "",
    salary_max: "",
    experience: "",
    category_id: "",
    organization_address: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [Scholarships, setScholarships] = useState([]);

  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = Array.isArray(Scholarships)
    ? Scholarships.slice(indexOfFirstItem, indexOfLastItem)
    : [];

  const totalPages = Array.isArray(Scholarships)
    ? Math.ceil(Scholarships.length / itemsPerPage)
    : 1;

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    scrollToTop();
  };

  useEffect(() => {
    const getScholarships = async () => {
      setLoading(true);
      try {
        const data = await fetchScholarships();
        console.log("Fetched Scholarships Data:", data);
        setScholarships(data);
      } catch (error) {
        console.error("Error fetching scholarships:", error);
        setError("Error fetching scholarships");
      } finally {
        setLoading(false);
      }
    };
    getScholarships()
  }, [])

  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const response = await getOrganizationAddresses();
        setAddresses(response);
      } catch (error) {
        setError("Error fetching addresses");
      }
    };
    fetchAddresses();
  }, [setAddresses]);

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
    setCurrentPage(1); // Reset to first page when filters change
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <header className="p-8">
        <Navbar />
      </header>
      <section className="relative flex items-center min-h-[250px] mx-16 bg-gradient-to-tl from-customTeal-light/50 to-customTeal-dark/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Start your flourishing journey with us, ScholarJob!
          </h1>
          <div className="flex justify-center items-center mb-6">
            <input
              type="text"
              placeholder="Please input the position you want to find..."
              className="p-2 w-full max-w-md border rounded-lg text-gray-700"
              name="title"
              onChange={handleFilterChange}
              value={filters.title}
            />
            <button
              className="bg-white text-green-500 px-4 py-2 ml-2 rounded-lg"
              onClick={() => paginate(1)} // Triggers pagination to update filtered results
            >
              Search
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
            <select
              className="p-2 rounded-lg text-gray-700"
              name="job_type"
              onChange={handleFilterChange}
              value={filters.job_type}
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
              value={filters.experience}
            >
              <option value="">Experience</option>
              <option value="1">1 Year</option>
              <option value="2">2 Years</option>
              <option value="3">3+ Years</option>
            </select>
            <select
              className="p-2 rounded-lg text-gray-700"
              name="salary_min"
              onChange={handleFilterChange}
              value={filters.salary_min}
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
              value={filters.category_id}
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
              value={filters.organization_address}
            >
              <option value="">Select Organization Address</option>
              {addresses.map((address, idx) => (
                <option key={idx} value={address}>
                  {address}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      <div className="px-8 mt-4 text-center">
        <h1 className="text-4xl font-bold">Here are a few recommendations!</h1>
        <p className="text-lg font-regular text-black-900 opacity-60">
          Pick the one that suits you, and helps you flourish your bright future
        </p>
      </div>

      <div className="relative mx-10">
        <div className="relative mx-10">
          <ul>
            {Scholarships.map((scholarship, idx) => (
              <li key={idx}>
                <Link to={`/scholarship/${scholarship.id}`} onClick={scrollToTop}>
                  <div className="flex flex-wrap mt-10">
                    <div className="w-60 h-90 mx-auto bg-gray-200 shadow-xl rounded-lg overflow-y-auto">
                      <div className="flex items-center justify-center h-[270px] p-2">
                        <img
                          src={scholarship.image || HarvardUniverity}
                          alt={`${scholarship.school_name} Logo`}
                          className="w-full h-full object-contain rounded-lg border border-gray-300"
                        />
                      </div>
                      <div className="p-4 bg-gray-200">
                        <h2 className="text-center text-lg font-semibold text-gray-600">
                          {scholarship.school_name}
                        </h2>
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-12 mt-10 px-6">
          {Scholarships.map((scholarship, index) => (
            <li key={index} className="list-none" onClick={scrollToTop}>
              <Link
                to={`/scholarship/detail/${scholarship.id}`}
                className="flex flex-col items-center bg-gray-200 border border-gray-200 rounded-lg shadow-xl md:flex-row md:max-w-3xl hover:bg-gray-100"
              >
                <div className="flex items-center justify-center p-2 md:w-48">
                  <img
                    className="object-contain w-full h-48 md:h-auto md:w-48 rounded-md border border-gray-300"
                    src={scholarship.image_url || HarvardUniverity}
                    alt={`${scholarship.school_name} Logo`}
                  />
                </div>
                <div className="flex flex-col justify-between p-1 leading-normal">
                  <h5 className="text-2xl font-bold tracking-tight text-gray-600 mb-8">
                    {scholarship.school_name}
                  </h5>
                  <h6 className="text-lg font-bold text-gray-600 mb-2">
                    {scholarship.degree}
                  </h6>
                  <p className="text-sm font-medium text-gray-500">
                    Duration: {scholarship.duration} years
                  </p>
                  <p className="text-sm font-medium text-gray-500">
                    Location: {scholarship.location}
                  </p>
                  <p className="text-sm font-medium text-gray-500">
                    Available Positions: {scholarship.available_position}
                  </p>
                  <p className="text-sm font-medium text-gray-500">
                    Deadline: {scholarship.dateline}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </div>
      </div>

      <div className="flex justify-center my-6">
        <nav aria-label="Pagination">
          <div className="py-2 shadow-2xl rounded-full">
            <ul className="inline-flex items-center -space-x-px">
              <li>
                <button
                  onClick={() =>
                    paginate(currentPage > 1 ? currentPage - 1 : 1)
                  }
                  className="mx-3 text-customTeal p-1 rounded-full hover:bg-customTeal hover:text-white"
                >
                  <Icon
                    icon="ic:round-less-than"
                    className="w-[28px] h-[28px]"
                  />
                </button>
              </li>
              {Array.from({ length: totalPages }, (_, index) => (
                <li key={index + 1}>
                  <button
                    onClick={() => paginate(index + 1)}
                    className={`px-2 py-1 text-customTeal hover:bg-customTeal hover:text-white rounded-full ${
                      currentPage === index + 1 ? "bg-customTeal text-white" : ""
                    }`}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() =>
                    paginate(
                      currentPage < totalPages ? currentPage + 1 : totalPages
                    )
                  }
                  className="mx-3 text-customTeal p-1 rounded-full hover:bg-customTeal hover:text-white"
                >
                  <Icon
                    icon="ic:round-greater-than"
                    className="w-[28px] h-[28px]"
                  />
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default ScholarshipPage;
