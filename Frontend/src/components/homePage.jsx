import {
  React,
  Navbar,
  Register,
  Link,
  CadtLogo,
  HarvardUniverity,
  FindYourNeed,
  FlourishYourFuture,
  ApplyIt,
  Footer,
  axios,
  appStore,
  useEffect,
  ScholarJobLogoGreen,
} from "../import/all_import.jsx";

const HomePage = () => {
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
    {
      id: 6,
      school_name: "Cambodia Academy & Digital Technology",
      image: HarvardUniverity,
    },
    {
      id: 7,
      school_name: "Cambodia Academy & Digital Technology",
      image: HarvardUniverity,
    },
    {
      id: 8,
      school_name: "Cambodia Academy & Digital Technology",
      image: HarvardUniverity,
    },
    {
      id: 9,
      school_name: "Cambodia Academy & Digital Technology",
      image: HarvardUniverity,
    },
    {
      id: 10,
      school_name: "Cambodia Academy & Digital Technology",
      image: HarvardUniverity,
    },
  ];

  const {topUniversities, setTopUniversities} = appStore();
  
const BASE_URL = 'http://localhost:8000/api';
  // Fetch Top 10 Universities (Example using Axios)
  useEffect(() => {
    const fetchTopUniversities = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/scholarship/list`);
        console.log(response.data); // Debugging the API response structure
  
        // Extract the data array from the response
        const universities = response.data.data;
        // Set top universities to the first 10 items
        setTopUniversities(universities.slice(0, 10));
      } catch (error) {
        console.error("Error fetching universities:", error);
      }
    };
  
    fetchTopUniversities();
  }, []);
  
  const {topJobs, setTopJobs} = appStore(); // State for the top universities
  useEffect(() => {
    const fetchTopJobs = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/job/list`);
        console.log(response.data); // Debugging the API response structure
  
        // Extract the data array from the response
        const topJobs = response.data.data;
        // Set top universities to the first 10 items
        setTopJobs(topJobs.slice(0, 10));
      } catch (error) {
        console.error("Error fetching topUniversities:", error);
      }
    };
  
    fetchTopJobs();
  }, []);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <header className="p-12">
        <Navbar />
      </header>
      <section className="relative items-center flex min-h-[200px] mx-16 bg-gradient-to-tl from-customTeal-light/50 to-customTeal-dark/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Your Future, Your Path Get ahead with ScholarJob!
          </h1>
          <div className="flex justify-center items-center mt-8">
            <input
              type="text"
              placeholder="Please input the position you want to find..."
              className="p-2 w-full max-w-lg border rounded-lg text-gray-700"
              name="title"
              // onChange={handleFilterChange}
            />
            <button
              className="bg-white text-customTeal-light px-4 py-2 ml-2 rounded-lg"
              onClick={() => fetchJobs()}
            >
              Search
            </button>
          </div>
        </div>
      </section>

      <section className="mt-8  ">
        <div className="px-8 mt-4 text-center">
          <h1 className="text-4xl font-bold">
            Find your perfect job or scholarship opportunity
          </h1>
          <p className="mt-4 text-lg font-regular text-black-900 opacity-60">
            Start your search today and take the next step in your career or
            education, and find opportunities that align with your passions and
            goals.
          </p>
        </div>
      </section>

      {/* Top 10 for Jobs  */}
      <section className="mt-6">
        <div className="w-[1400px] m-auto mb-[-40px]">
          <div className="bg-gradient-to-tl from-customTeal-light/50 to-customTeal-dark/80 h-[50px] rounded-t-lg w-[230px] flex justify-center items-center text-white font-bold text-lg">
            Top 10 jobs
          </div>
        </div>
        {/* Scrollable container */}
        <div className="shadow-2xl rounded-b-lg mt-10 h-[370px] overflow-x-scroll no-scrollbar w-[1400px] m-auto bg-gray-200">
        <ul className="list-none" onClick={scrollToTop}>
            <div className="flex mt-3">
              {topJobs.map((job) => (
                <li
                  key={job.id}
                  className="w-60 h-100 mx-3 bg-gray-300 shadow-xl rounded-lg overflow-y-auto flex-shrink-0"
                >
                  <Link to={`/career/${job.id}`}>
                    <div className="flex items-center justify-center h-[270px] p-2">
                      <img
                        src={job.image_url || ScholarJobLogoGreen} // Adjust according to your API data structure
                        
                        className="w-full h-full object-contain rounded-lg border border-gray-300"
                      />
                    </div>
                    <div className="p-2 bg-gray-200">
                      <h2 className="text-center h-[55px] text-lg font-semibold text-gray-600">
                        {job.title}{" "}
                        {/* Adjust according to your API data structure */}
                      </h2>
                    </div>
                  </Link>
                </li>
              ))}
            </div>
          </ul>
        </div>
      </section>

      {/* Top 10 Universities Section */}
      <section className="mt-6">
        <div className="w-[1400px] m-auto mb-[-40px]">
          <div className="bg-gradient-to-tl from-customTeal-light/50 to-customTeal-dark/80 h-[50px] rounded-t-lg w-[230px] flex justify-center items-center text-white font-semibold text-lg">
            Top 10 Scholarships!
          </div>
        </div>

        {/* Scrollable container */}
        <div className="shadow-2xl rounded-b-lg mt-10 h-[370px] overflow-x-scroll no-scrollbar w-[1400px] m-auto bg-gray-200">
          <ul className="list-none" onClick={scrollToTop}>
            <div className="flex mt-3">
              {topUniversities.map((university) => (
                <li
                  key={university.id}
                  className="w-60 h-100 mx-3 bg-gray-300 shadow-xl rounded-lg overflow-y-auto flex-shrink-0"
                >
                  <Link to={`/scholarship/detail/${university.id}`}>
                    <div className="flex items-center justify-center h-[270px] p-2">
                      <img
                        src={university.image_url} // Adjust according to your API data structure
                        alt={university.title}
                        className="w-full h-full object-contain rounded-lg border border-gray-300"
                      />
                    </div>
                    <div className="p-2 bg-gray-200">
                      <h2 className="text-center h-[55px] text-lg font-semibold text-gray-600">
                        {university.major}{" "}
                        {/* Adjust according to your API data structure */}
                      </h2>
                    </div>
                  </Link>
                </li>
              ))}
            </div>
          </ul>
        </div>
      </section>

      {/* Jobs Organization */}
      <section className="mt-6">
        <div className="w-[1400px] m-auto mb-[-40px]">
          <div className="bg-gradient-to-tl from-customTeal-light/50 to-customTeal-dark/80 h-[50px] rounded-t-lg w-[230px] flex justify-center items-center text-white font-semibold text-lg">
            Jobs Organizations
          </div>
        </div>

        {/* Scrollable container */}
        <div className="shadow-2xl rounded-b-lg mt-10 h-[370px] overflow-x-scroll no-scrollbar w-[1400px] m-auto bg-gray-200">
          <li className="list-none" onClick={scrollToTop}>
            <Link to={`/scholarship/organization`}>
              <div className="flex mt-3">
                {data.slice(0, 10).map((school) => (
                  <div
                    key={school.id}
                    className="w-60 h-90 mx-3 bg-gray-300 shadow-xl  rounded-lg overflow-y-auto flex-shrink-0"
                  >
                    <div className="flex items-center justify-center h-[270px] p-2">
                      <img
                        src={school.image}
                        alt={`${school.school_name} Logo`}
                        className="w-full h-full object-contain rounded-lg border border-gray-300"
                      />
                    </div>
                    <div className="p-2 bg-gray-200">
                      <h2 className="text-center text-lg font-semibold text-gray-600">
                        {school.school_name}
                      </h2>
                    </div>
                  </div>
                ))}
              </div>
            </Link>
          </li>
        </div>
      </section>

      {/* Scholarship Organization */}
      <section className="mt-6">
        <div className="w-[1400px] m-auto mb-[-40px]">
          <div className="bg-gradient-to-tl from-customTeal-light/50 to-customTeal-dark/80 h-[50px] rounded-t-lg w-[300px] flex justify-center items-center text-white font-bold text-lg">
            Universities Organizations
          </div>
        </div>

        {/* Scrollable container */}
        <div className="shadow-2xl rounded-b-lg mt-10 h-[370px] overflow-x-scroll no-scrollbar w-[1400px] m-auto bg-gray-200">
          <li className="list-none" onClick={scrollToTop}>
            <Link to={`/scholarship/organization`}>
              <div className="flex mt-3">
                {data.slice(0, 10).map((school) => (
                  <div
                    key={school.id}
                    className="w-60 h-90 mx-3 bg-gray-300 shadow-xl  rounded-lg overflow-y-auto flex-shrink-0"
                  >
                    <div className="flex items-center justify-center h-[270px] p-2">
                      <img
                        src={school.image}
                        alt={`${school.school_name} Logo`}
                        className="w-full h-full object-contain rounded-lg border border-gray-300"
                      />
                    </div>
                    <div className="p-2 bg-gray-200">
                      <h2 className="text-center text-lg font-semibold text-gray-600">
                        {school.school_name}
                      </h2>
                    </div>
                  </div>
                ))}
              </div>
            </Link>
          </li>
        </div>
      </section>

      <div className="px-8 mt-8 text-center ">
        <h1 className="text-4xl font-bold">
          Get Access to hundreds of jobs and scholarship opportunities
        </h1>
        <p className="mt-4 text-lg font-regular text-black-900 opacity-60">
          With SchorlarJob, You can do just that!
        </p>
      </div>

      <section className="w-[1400px] m-auto mt-8 flex justify-evenly">
        <div>
          <div className="w-80 h-48 overflow-hidden rounded-lg">
            <img
              src={FindYourNeed}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-2">
            <h1 className="text-center font-semibold text-2xl">
              Find your needs
            </h1>
            <p className="w-80 text-center">
              Explore our site to find your desire jobs or scholarship
              opportunities
            </p>
          </div>
        </div>
        <div>
          <div className="w-80 h-48 overflow-hidden rounded-lg">
            <img src={ApplyIt} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="mt-2">
            <h1 className="text-center font-semibold text-2xl">
              Apply for it !
            </h1>
            <p className="w-80 text-center">
              Fill in all the information, and then wait for the repsonse
            </p>
          </div>
        </div>
        <div>
          <div className="w-80 h-48 overflow-hidden rounded-lg">
            <img
              src={FlourishYourFuture}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-2">
            <h1 className="text-center font-semibold text-2xl">
              Filourish your life
            </h1>
            <p className=" w-80 text-center">
              From a hopeless person to someone who is experienced and has
              bright future
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;