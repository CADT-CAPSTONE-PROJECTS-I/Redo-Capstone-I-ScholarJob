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
  
  const seeMoreOrganizationPage = () => {

    const BASE_URL = "https://dev-career.cammob.ovh/capstone/Backend/public/api";
    // Fetch Top 10 Universities (Example using Axios)
    const { topOrgs, setTopOrgs } = appStore();
    useEffect(() => {
      const fetchTopOrgs = async () => {
        try {
          const response = await axios.get(`${BASE_URL}/organization/list`);
          console.log(response.data); // Debugging the API response structure
          // Extract the data array from the response
          const topOrgs = response.data.data;
          // Set top universities to the first 10 items
          setTopOrgs(topOrgs.slice(0, 10));
        } catch (error) {
          console.error("Error fetching topOrgs:", error);
        }
      };
  
      fetchTopOrgs();
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
            Urgent Scholarships, apply Now !
          </p>{" "}
        </div>
  
        <section className="mt-6">
        {/* Scrollable container */}
        <div className="shadow-2xl rounded-lg w-[1400px] m-auto bg-gray-200">
        <ul className="list-none" onClick={scrollToTop}>
          <div className="grid grid-cols-5 gap-6 mt-3 p-4">
              {topOrgs.map((organization) => (
                <li
                  key={organization.id}
                  className=" bg-gray-300 shadow-xl rounded-lg overflow-y-auto flex-shrink-0"
                >
                  <Link to={`/organization/detail/${organization.id}`}>
                    <div className="flex items-center justify-center h-[270px] p-2">
                      <img
                        src={organization.image_url || ScholarJobLogoGreen } // Adjust according to your API data structure
                        alt={organization.name}
                        className="w-full h-full object-contain rounded-lg border border-gray-300"
                      />
                    </div>
                    <div className="p-2 bg-gray-200">
                      <h2 className="text-center h-[55px] text-lg font-semibold text-gray-600">
                        {organization.name}{" "}
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
  
  export default seeMoreOrganizationPage;
  