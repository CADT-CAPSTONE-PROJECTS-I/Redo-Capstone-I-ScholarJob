import { Button } from "@material-tailwind/react";
import {
  React,
  Navbar,
  Link,
  FindYourNeed,
  FlourishYourFuture,
  ApplyIt,
  Footer,
  appStore,
  useEffect,
  ScholarJobLogoGreen,
  homepageVector,
  LoadingPage,
  fetchTopUniversities,
  fetchTopJobsHomepage,
  fetchTopOrgs,
} from "../import/all_import.jsx";

const HomePage = () => {
  const { topUniversities, setTopUniversities, loading, setLoading, topJobs, setTopJobs, topOrgs, setTopOrgs  } = appStore();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [universities, jobs, orgs] = await Promise.all([
          fetchTopUniversities(),
          fetchTopJobsHomepage(),
          fetchTopOrgs(),
        ]);

        setTopUniversities(universities.slice(0, 10));
        setTopJobs(jobs.slice(0, 10));
        setTopOrgs(orgs.slice(0, 10));
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const scrollToTop10 = () => {
    window.scrollTo({ top: "520", behavior: "smooth" });
  };
  return (
    <div>
      <header className="p-12">
        <Navbar />
      </header>
      <section className="relative items-center flex min-h-[200px] mx-16 bg-gradient-to-tl from-customTeal-light/50 to-customTeal-dark/80 rounded-lg text-white">
        <div className="flex container mx-auto">
          <div className="mt-10">
            <div className="ml-16 text-5xl font-bold mb-10">
              <h1>
                <span className="font-bebas tracking-wider">ScholarJob</span>
              </h1>
            </div>

            <h1 className="ml-16 text-3xl font-medium">
              Your Future, Your Path. Get ahead with ScholarJob!
            </h1>

            {/* Move the button below the text */}
            <div className="ml-16 mt-10">
              <Button
                onClick={scrollToTop10}
                className="text-customTeal font-semibold shadow-lg bg-white focus:outline-none font-sm rounded-lg text-lg px-5 py-3 border hover:border hover:border-white hover:text-white hover:bg-gradient-to-tl hover:from-customTeal-light/50 hover:to-customTeal-dark/80"
              >
                Explore Now!
              </Button>
            </div>
          </div>

          <div className="flex justify-end">
            <img
              src={homepageVector}
              alt=""
              className="w-[650px] mr-16 mt-28 mb-10"
            />
          </div>
        </div>
      </section>

      <section className="mt-8 ">
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
      <section className="mt-6 mx-16">
        <div className="w-full m-auto ">
          <div className="flex justify-between mb-4">
            <div className="font-bebas tracking-widest  mb-[-16px] bg-gradient-to-tl from-customTeal-light/50 to-customTeal-dark/80 h-[50px] rounded-t-lg flex px-8 justify-center items-center text-white font-medium text-xl">
              Top 10 jobs
            </div>
            <div>
              <Link to={`/morejobs`} onClick={scrollToTop}>
                <button className="font-bebas tracking-widest translate-y-5 bg-gradient-to-tl from-customTeal-light/50 to-customTeal-dark/80 h-[30px] rounded-t-lg w-[130px] flex justify-center items-center text-white font-medium text-md cursor-pointer hover:bg-gradient-to-br">
                  See more
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scrollable container */}
        <div className="border-l h-[290px] border-gray-500 border-r overflow-x-scroll no-scrollbar w-full m-auto bg-gray-200">
          <ul className="list-none" onClick={scrollToTop}>
            <div className="flex">
              {topJobs.map((job) => (
                <li
                  key={job.id}
                  className="w-52 h-100 ml-4 my-4 border bg-white border-gray-300 shadow-xl rounded-lg overflow-y-auto flex-shrink-0 transition transfom-transition hover:scale-105 hover:border-2 hover:border-customTeal"
                >
                  <Link to={`/career/${job.id}`}>
                    <div className="flex items-center justify-center h-[200px] p-2">
                      <img
                        src={job.image_url || ScholarJobLogoGreen}
                        className="w-full h-full object-contain rounded-lg border border-gray-300"
                      />
                    </div>
                    <div className=" bg-white flex justify-center ">
                      <h2 className="h-[55px] text-lg font-semibold text-gray-600">
                        {job.title}{" "}
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
      <section className="mt-6 mx-16">
        <div className="w-full m-auto ">
          <div className="flex justify-between mb-4">
            <div className="font-bebas tracking-widest  mb-[-16px] bg-gradient-to-tl from-customTeal-light/50 to-customTeal-dark/80 h-[50px] rounded-t-lg flex px-8 justify-center items-center text-white font-medium text-xl">
              Top 10 scholarships
            </div>
            <div>
              <Link to={`/morescholarships`} onClick={scrollToTop}>
                <button className="font-bebas tracking-widest translate-y-5 bg-gradient-to-tl from-customTeal-light/50 to-customTeal-dark/80 h-[30px] rounded-t-lg w-[130px] flex justify-center items-center text-white font-medium text-md cursor-pointer hover:bg-gradient-to-br">
                  See more
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scrollable container */}
        <div className="border-l h-[290px] border-gray-500 border-r overflow-x-scroll no-scrollbar w-full m-auto bg-gray-200">
          <ul className="list-none" onClick={scrollToTop}>
            <div className="flex">
              {topUniversities.map((university) => (
                <li
                    key={university.id}
                  className="w-52 h-100 ml-4 my-4 border bg-white border-gray-300 shadow-xl rounded-lg overflow-y-auto flex-shrink-0 transition transfom-transition hover:scale-105 hover:border-2 hover:border-customTeal"
                >
                  <Link to={`/scholarship/detail/${university.id}`}>
                    <div className="flex items-center justify-center h-[200px] p-2">
                      <img
                        src={university.image_url} // Adjust according to your API data structure
                        alt={university.title}
                        className="w-full h-full object-contain rounded-lg border border-gray-300"
                      />
                    </div>
                    <div className=" bg-white flex justify-center ">
                      <h2 className="h-[55px] text-lg font-semibold text-gray-600">
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
      <section className="mt-6 mx-16">
        <div className="w-full m-auto ">
          <div className="flex justify-between mb-4">
            <div className="font-bebas tracking-widest  mb-[-16px] bg-gradient-to-tl from-customTeal-light/50 to-customTeal-dark/80 h-[50px] rounded-t-lg flex px-8 justify-center items-center text-white font-medium text-xl">
              Our Partners
            </div>
            <div>
              <Link to={`/moresorganizations`} onClick={scrollToTop}>
                <button className="font-bebas tracking-widest translate-y-5 bg-gradient-to-tl from-customTeal-light/50 to-customTeal-dark/80 h-[30px] rounded-t-lg w-[130px] flex justify-center items-center text-white font-medium text-md cursor-pointer hover:bg-gradient-to-br">
                  See more
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scrollable container */}
        <div className="border-l h-[305px] border-gray-500 border-r overflow-x-scroll no-scrollbar w-full m-auto bg-gray-200">
          <ul className="list-none" onClick={scrollToTop}>
            <div className="flex">
              {topOrgs.map((organization) => (
                <li
                  key={organization.id}
                  className="w-52 h-100 ml-4 my-4 border bg-white border-gray-300 shadow-xl rounded-lg overflow-y-auto flex-shrink-0 transition-transform transform duration-300 hover:scale-105 hover:border-2 hover:border-customTeal"
                >
                  <Link to={`/organization/detail/${organization.id}`}>
                    <div className="flex items-center justify-center h-[200px] p-2">
                      <img
                        src={organization.image_url || ScholarJobLogoGreen} // Adjust according to your API data structure
                        alt={organization.name}
                        className="w-full h-full object-contain rounded-lg border border-gray-300"
                      />
                    </div>
                    <div className="bg-white flex justify-center p-2">
                      <h2 className="h-[55px] text-lg font-semibold text-gray-600 text-center">
                        {organization.name}{" "}
                      </h2>
                    </div>
                  </Link>
                </li>
              ))}
            </div>
          </ul>
        </div>
      </section>

      {/* Scholarship Organization */}
      {/* <section className="mt-6">
        <div className="w-[1400px] m-auto mb-[-40px]">
          <div className="bg-gradient-to-tl from-customTeal-light/50 to-customTeal-dark/80 h-[50px] rounded-t-lg w-[300px] flex justify-center items-center text-white font-bold text-lg">
            Universities Organizations
          </div>
        </div> */}

      {/* Scrollable container */}
      {/* <div className="shadow-2xl rounded-b-lg mt-10 h-[370px] overflow-x-scroll no-scrollbar w-[1400px] m-auto bg-gray-200">
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
      </section> */}

      <div className="px-8 mt-8 text-center ">
        <h1 className="text-4xl font-bold">
          Get Access to hundreds of jobs and scholarship opportunities
        </h1>
        <p className="mt-4 text-lg font-regular text-black-900 opacity-60">
          With SchorlarJob, You can do just that!
        </p>
      </div>

      <section className="w-full m-auto mt-8 flex justify-evenly">
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
              Flourish your life
            </h1>
            <p className=" w-80 text-center">
              From a hopeless person to someone who is experienced and has
              bright future
            </p>
          </div>
        </div>
      </section>

      <footer className="mt-12">
        <Footer />
      </footer>
    </div>
  );
};

export default HomePage;
