import {
  React,
  Navbar,
  Footer,
  ScholarJobLogoGreen,
  appStore,
  useEffect,
  Link,
  axios,
} from "../import/all_import.jsx";

const seeMoreJobPage = () => {
  const BASE_URL = "http://localhost:8000/api";
  const { topJobs, setTopJobs } = appStore(); // State for the top universities

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
        console.error("Error fetching topJobs:", error);
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
      <div className="justify-center text-center ">
        {" "}
        <p className=" text-5xl font-extrabold font-bebas bg-gradient-to-t from-customTeal/50 to-customTeal-dark/80 bg-clip-text text-transparent">
          Urgent Jobs, apply Now !
        </p>{" "}
      </div>

      <section className="py-6">
        {/* Grid container to display jobs in 5 columns */}
        <div className="shadow-2xl rounded-lg w-[1400px] m-auto bg-gray-200">
          <ul className="list-none" onClick={scrollToTop}>
            <div className="grid grid-cols-5 gap-6 mt-3 p-4">
              {topJobs.map((job) => (
                <li
                  key={job.id}
                  className="bg-gray-300 shadow-xl rounded-lg overflow-y-auto"
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
                        {job.title}
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

      <Footer />
    </div>
  );
};

export default seeMoreJobPage;
