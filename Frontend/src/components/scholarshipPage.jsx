import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Navbar,
  LoadingPage,
  Icon,
  appStore,
  Link,
  ScholarJobLogoGreen,
  Footer
} from "../import/all_import.jsx";

const ScholarshipPage = () => {
  const [scholarships, setScholarships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalRecords, setTotalRecords] = useState(0);
  const [searchTerm, setSearchTerm] = useState(''); 
  const [query, setQuery] = useState('')
  const itemsPerPage = 10;
  const { currentPage, setCurrentPage } = appStore(); 

  useEffect(() => {
    fetchScholarships();
  }, [currentPage, query]);

  const fetchScholarships = async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://dev-career.cammob.ovh/capstone/Backend/public/api/scholarship/list', {
        params: {
          page: currentPage,
          per_page: itemsPerPage,
          search: query,
        },
      });
      setScholarships(response.data.data);
      setTotalRecords(response.data.total);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value); 
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault(); 
    setQuery(searchTerm);
    setCurrentPage(1); 
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(totalRecords / itemsPerPage);

  if (loading) {
    return <LoadingPage/>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <header className="p-8">
        <Navbar />
      </header>
      <section className="relative flex items-center min-h-[300px] m-8 bg-gradient-to-tl from-customTeal-light/50 to-customTeal-dark/80 text-white justify-center">
        <div className="w-1/2 pl-8 text-4xl font-bold">
          <div className="flex flex-col">
            Start your flourishing journey with us, ScholarJob!
            <div className="mt-5">
              <form onSubmit={handleSearchSubmit}> 
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-900"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    value={searchTerm} 
                    onChange={handleSearchChange} 
                    className="block w-full p-4 ps-10 text-sm font-normal text-gray-600 rounded-lg bg-white focus:outline-none"
                    placeholder="Please input the scholarship you want to find...."
                    required
                  />
                  <button
                    type="submit"
                    className="text-white absolute end-2.5 bottom-2.5 bg-customTeal hover:bg-customTeal-dark focus:ring-2 focus:outline-none focus:ring-customTeal-dark font-sm rounded-lg text-sm px-4 py-2"
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="mt-6 flex flex-row justify-between"></div>
        </div>
        <Icon
          icon="fluent:hat-graduation-sparkle-20-regular"
          className="w-[200px] h-[200px] ml-20"
        />
      </section>

      <div className="px-8 text-center">
        <h1 className="text-5xl font-bold">Here are a some recommendations!</h1>
        <p className="text-lg font-regular text-black-900 opacity-60">
          Pick the one that suits you, and helps you flourish your bright future
        </p>
      </div>

      <div className="grid grid-cols-2 gap-10 mt-10 px-8">
        {scholarships.map((scholarship, index) => (
          <Link
            key={index}
            to={`/scholarship/detail/${scholarship.id}`}
            className="flex flex-col items-center bg-gray-200 border border-gray-200 rounded-lg shadow-xl md:flex-row md:max-w-3xl hover:bg-gray-100"
          >
            <div className="flex items-center justify-center p-2 md:w-48">
              <img
                src={scholarship.image_url || ScholarJobLogoGreen}
                className="w-32 h-32 object-cover rounded-lg mr-3"
                alt="ScholarJob Logo"
              />
            </div>
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="text-2xl font-bold tracking-tight text-gray-600 mb-1">
                {scholarship.major}
              </h5>
              
              <h6 className="text-lg font-bold text-gray-600 mb-2">
                {scholarship.degree}
              </h6>
              <p className="text-sm font-medium text-gray-500">
                Duration: {scholarship.program_duration} years
              </p>
              <p className="text-sm font-medium text-gray-500">
                Location: {scholarship.location}
              </p>
              <p className="text-sm font-medium text-gray-500">
                Available Positions: {scholarship.available_position}
              </p>
              <p className="text-sm font-medium text-gray-500">
                Deadline: {new Date(scholarship.deadline).toLocaleDateString()}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex justify-center my-6">
        <nav aria-label="Pagination">
          <div className="py-2 shadow-2xl rounded-full">
            <ul className="inline-flex items-center -space-x-px">
              <li>
                <button
                  onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
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
                    className={`px-3 py-1.5 mx-4 leading-tight rounded-full ${
                      currentPage === index + 1
                        ? "text-white bg-customTeal"
                        : "text-gray-500 bg-white"
                    } hover:bg-customTeal hover:text-white`}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() =>
                    paginate(currentPage < totalPages ? currentPage + 1 : totalPages)
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
