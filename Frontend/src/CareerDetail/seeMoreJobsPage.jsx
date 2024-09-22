// seeMoreJobPage.jsx
import {
  React,
  Navbar,
  Footer,
  ScholarJobLogoGreen,
  appStore,
  useEffect,
  Link,
  fetchTopJobsCareer,
} from "../import/all_import.jsx";

const SeeMoreJobPage = () => {
  const { topJobs, setTopJobs } = appStore();

  useEffect(() => {
    const getTopJobs = async () => {
      try {
        const jobs = await fetchTopJobsCareer();
        setTopJobs(jobs.slice(0, 10));
      } catch (error) {
        console.error("Error fetching top jobs:", error);
      }
    };

    getTopJobs();
  }, []);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <header className="p-12">
        <Navbar />
      </header>
      <div className="justify-center text-center mb-6">
        <p className="text-5xl font-extrabold font-bebas bg-gradient-to-t from-customTeal/50 to-customTeal-dark/80 bg-clip-text text-transparent">
          Urgent Jobs, apply Now!
        </p>
      </div>

      <section className="px-16">
        {/* Container with horizontal scroll for jobs */}
        <div className="border-l h-[290px] border-gray-500 border-r overflow-x-scroll no-scrollbar w-full m-auto bg-gray-200">
          <ul className="list-none" onClick={scrollToTop}>
            <div className="flex">
              {topJobs.map((job) => (
                <li
                  key={job.id}
                  className="w-52 h-100 ml-4 my-4 border bg-white border-gray-300 shadow-xl rounded-lg overflow-y-auto flex-shrink-0 transform transition-transform hover:scale-105 hover:border-2 hover:border-customTeal"
                >
                  <Link to={`/career/${job.id}`}>
                    <div className="flex items-center justify-center h-[200px] p-2">
                      <img
                        src={job.image_url || ScholarJobLogoGreen}
                        className="w-full h-full object-contain rounded-lg border border-gray-300"
                        alt={job.title} // Add alt text for accessibility
                      />
                    </div>
                    <div className="bg-white flex justify-center">
                      <h2 className="h-[55px] text-lg font-semibold text-gray-600">
                        {job.title}
                      </h2>
                    </div>
                  </Link>
                </li>
              ))}
            </div>
          </ul>
        </div>
      </section>
      <footer className="mt-12">
        <Footer />
      </footer>
    </div>
  );
};

export default SeeMoreJobPage;
