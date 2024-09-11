import {
  React,
  HarvardUniverity,
  CadtLogo,
  Link,
  appStore,
  Icon,
} from "../import/all_import.jsx";

const Offerings = () => {
  const scholarship = Array.from({ length: 30 }, (_, index) => ({
    url: "cadt",
    school_name: "Cambodia Academy & Digital Technology",
    image: index % 3 === 0 ? HarvardUniverity : CadtLogo,
    degree: "Master Degree",
    duration: 3.5,
    location: "Phnom Penh",
    available_position: 100,
    dateline: `15-January-${2025 + Math.floor(index / 10)}`,
  }));

  const itemsPerPage = 10;
  const { currentPage, setCurrentPage } = appStore();
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = scholarship.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(scholarship.length / itemsPerPage);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section className="flex  flex-col space-y-6">
      {/* Job Listings and Organization Stats */}
      <div className="flex flex-row justify-between">
        {/* Column 1: About Us and Contact Us */}
        <div className="flex  flex-col w-[650px]">
          <div className="space-y-6" >
            {currentItems.map((scholarship, index) => (
              <Link
                key={index}
                to={`/scholarship/detail/4`}
                className="flex  flex-col items-center bg-gray-200 border border-gray-200 rounded-lg shadow-xl md:flex-row md:max-w-3xl hover:bg-gray-100"
              >
                <div className="flex items-center  justify-center p-2 md:w-48">
                  <img
                    className="object-contain w-full h-48 md:h-auto md:w-48 rounded-md border border-gray-300"
                    src={scholarship.image}
                    alt={`${scholarship.school_name} Logo`}
                  />
                </div>
                <div className="flex flex-col justify-between p-1 leading-normal">
                  <h5 className=" text-2xl font-bold tracking-tight text-gray-600 mb-8">
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
            ))}
          </div>
        </div>

        {/* Column 2: Organization Stats */}
        <div className="w-[320px] max-h-[500px] rounded-xl bg-white shadow-lg">
          <div className="bg-gradient-to-tl from-customTeal-light/50 to-customTeal-dark/80 rounded-t-lg p-4">
            <h2 className="text-lg text-white font-bold">Organization Stats</h2>
          </div>
          <div className="p-4 max-h-[200px]">
            <ul className="list-none mb-4 space-y-2">
              <li className="flex items-center">
                <span className="font-bold">Location:</span> Phnom Penh
              </li>
              <hr className="my-2 border-gray-300" />

              <li className="flex items-center">
                <span className="font-bold">Number of Employees:</span> 150
              </li>
              <hr className="my-2 border-gray-300" />

              <li className="flex items-center">
                <span className="font-bold">Office Policy:</span> Flexible
              </li>
              <hr className="my-2 border-gray-300" />

              <li className="flex items-center">
                <span className="font-bold">Founded:</span> 2010
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center">
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
    </section>
  );
};

export default Offerings;
