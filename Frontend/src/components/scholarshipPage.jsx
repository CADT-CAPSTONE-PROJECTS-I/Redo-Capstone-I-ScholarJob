import {
  Navbar,
  CadtLogo,
  Icon,
  appStore,
  HarvardUniverity,
  Link,
} from "../import/all_import.jsx";

const ScholarshipPage = () => {
  const data = [
    {
      id: 1,
      school_name: "Cambodia Academy & Digital Technology",
      image: CadtLogo,
    },
    {
      id: 2,
      school_name: "Cambodia Academy & Digital Technology",
      image: CadtLogo,
    },
    {
      id: 3,
      school_name: "Cambodia Academy & Digital Technology",
      image: HarvardUniverity,
    },
    {
      id: 4,
      school_name: "Cambodia Academy & Digital Technology",
      image: CadtLogo,
    },
    {
      id: 5,
      school_name: "Cambodia Academy & Digital Technology",
      image: HarvardUniverity,
    },
  ];

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
    <div>
      <header className="p-8">
        <Navbar />
      </header>
      <section className="relative flex items-center min-h-[300px] m-8 bg-gradient-to-tl from-customTeal-light/50 to-customTeal-dark/80 text-white justify-center">
        <div className="w-1/2 pl-8 text-4xl font-bold">
          <div className="flex flex-col">
            Start your flourishing journey with us, ScholarJob!
            <div className="mt-5">
              <form>
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
          <div className="mt-6 flex flex-row justify-between">
            <form className="w-[160px] font-normal">
              <select
                id="countries"
                className="mr-10 text-gray-600 text-sm rounded-lg block w-full p-3 hover:cursor-pointer focus:ring-customTeal focus:border-customTeal-darker"
              >
                <option selected className="hover:focus:bg-customTeal">
                  Choose a country
                </option>
                <option value="US" className="hover:focus:bg-customTeal ">
                  United States
                </option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>{" "}
            </form>
            <form className="w-[160px] font-normal">
              <select
                id="countries"
                className="mr-10 text-gray-600 text-sm rounded-lg block w-full p-3 hover:cursor-pointer focus:ring-customTeal focus:border-customTeal-darker"
              >
                <option selected className="hover:focus:bg-customTeal">
                  Choose a country
                </option>
                <option value="US" className="hover:focus:bg-customTeal ">
                  United States
                </option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>{" "}
            </form>
            <form className="w-[160px] font-normal">
              <select
                id="countries"
                className="text-gray-600 text-sm rounded-lg block w-full p-3 hover:cursor-pointer focus:ring-customTeal focus:border-customTeal-darker"
              >
                <option selected className="hover:focus:bg-customTeal">
                  Choose a country
                </option>
                <option value="US" className="hover:focus:bg-customTeal ">
                  United States
                </option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>{" "}
            </form>
            <form className="w-[160px] font-normal">
              <select
                id="countries"
                className="text-gray-600 text-sm rounded-lg block w-full p-3 hover:cursor-pointer focus:ring-customTeal focus:border-customTeal-darker"
              >
                <option selected className="hover:focus:bg-customTeal">
                  Choose a country
                </option>
                <option value="US" className="hover:focus:bg-customTeal ">
                  United States
                </option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>{" "}
            </form>
          </div>
        </div>
        <Icon
          icon="fluent:hat-graduation-sparkle-20-regular"
          className="w-[200px] h-[200px] ml-20"
        />
      </section>

      <div className="px-8 text-center">
        <h1 className="text-5xl font-bold">Here are a few recommendations!</h1>
        <p className="text-lg font-regular text-black-900 opacity-60">
          Pick the one that suits you, and helps you flourish your bright future
        </p>
      </div>

      <Link to={`/scholarship/detail`}>
        <div className="flex flex-wrap mt-10">
          {data.map((school) => (
            <div
              key={school.id}
              className="w-60 h-90 mx-auto bg-gray-200 shadow-xl rounded-lg overflow-y-auto"
            >
              <div className="flex items-center justify-center h-[270px] p-2">
                <img
                  src={school.image}
                  alt={`${school.school_name} Logo`}
                  className="w-full h-full object-contain rounded-lg border border-gray-300"
                />
              </div>
              <div className="p-4 bg-gray-200">
                <h2 className="text-center text-lg font-semibold text-gray-600">
                  {school.school_name}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </Link>

      <div className="grid grid-cols-2 gap-10 mt-10 px-8">
        {currentItems.map((scholarship, index) => (
          <Link
            key={index}
            to={`/scholarship/detail`}
            className="flex flex-col items-center bg-gray-200 border border-gray-200 rounded-lg shadow-xl md:flex-row md:max-w-3xl hover:bg-gray-100"
          >
            <div className="flex items-center justify-center p-2 md:w-48">
              <img
                className="object-contain w-full h-48 md:h-auto md:w-48 rounded-md border border-gray-300"
                src={scholarship.image}
                alt={`${scholarship.school_name} Logo`}
              />
            </div>
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="text-2xl font-bold tracking-tight text-gray-600 mb-10">
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
    </div>
  );
};

export default ScholarshipPage;
