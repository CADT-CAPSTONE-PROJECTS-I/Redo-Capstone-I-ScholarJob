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
      <section className="relative flex items-center min-h-[300px] my-8 mx-16 rounded-lg bg-gradient-to-tl from-customTeal-light/50 to-customTeal-dark/80 text-white justify-center">
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

      <section className="relative items-center flex min-h-[250px] mx-16 rounded-lg bg-gray-100">
  <div className="container mx-auto px-4 py-2 ">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {scholarships.map((scholarship, index) => (
        <Link
          key={index}
          to={`/scholarship/detail/${scholarship.id}`}
          className="no-underline"
        >
          <div className="relative bg-white rounded-lg shadow-md p-4 flex transform transition-all duration-300 hover:scale-105 hover:bg-customTeal group hover:text-white">
            <img
              src={scholarship.image_url || ScholarJobLogoGreen}
              className="w-32 h-32 object-cover rounded-lg mr-5"
              alt="ScholarJob Logo"
            />
            {scholarship.urgent && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-semibold py-1 px-3 rounded-bl-lg">
                Urgent!
              </span>
            )}

            <div className="flex flex-col justify-between">
              <div className="ml-3">
                <h3 className="text-lg font-bold">{scholarship.major}</h3>
                <p>{scholarship.degree}</p>
              </div>
              <div className="ml-3">
                <p>
                  <strong>Duration:</strong> {scholarship.program_duration} years
                </p>
                <p>
                  <strong>Location:</strong> {scholarship.location}
                </p>
                <p>
                  <strong>Available Positions:</strong>{" "}
                  {scholarship.available_position}
                </p>
              </div>
              <div className="ml-3 mt-2 group-hover:text-white">
                <p>
                  <strong>Deadline:</strong> {new Date(scholarship.deadline).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
</section>


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
