import {
  React,
  Navbar,
  Footer,
  ScholarJobLogoGreen,
  appStore,
  useEffect,
  Link,
  fetchTopOrganizations,
} from "../import/all_import.jsx";

const SeeMoreOrganizationPage = () => {
  const { topOrgs, setTopOrgs } = appStore();

  useEffect(() => {
    const getTopOrgs = async () => {
      try {
        const topOrganizations = await fetchTopOrganizations();
        setTopOrgs(topOrganizations.slice(0, 10));
      } catch (error) {
        console.error("Error fetching topOrgs:", error);
      }
    };

    getTopOrgs();
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
          Urgent Scholarships, apply Now!
        </p>
      </div>

      <section className="px-16">
        {/* Container with horizontal scroll for organizations */}
        <div className="border-l h-[300px] border-gray-500 border-r overflow-x-scroll no-scrollbar w-full m-auto bg-gray-200">
          <ul className="list-none" onClick={scrollToTop}>
            <div className="flex">
              {topOrgs.map((organization) => (
                <li
                  key={organization.id}
                  className="w-52 h-100 ml-4 my-4 border bg-white border-gray-300 shadow-xl rounded-lg overflow-y-auto flex-shrink-0 transform transition-transform hover:scale-105 hover:border-2 hover:border-customTeal"
                >
                  <Link to={`/organization/detail/${organization.id}`}>
                    <div className="flex items-center justify-center h-[200px] p-2">
                      <img
                        src={organization.image_url || ScholarJobLogoGreen}
                        alt={organization.name}
                        className="w-full h-full object-contain rounded-lg border border-gray-300"
                      />
                    </div>
                    <div className="bg-white flex justify-center">
                      <h2 className="h-[60px] text-lg font-semibold text-gray-600">
                        {organization.name}
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

export default SeeMoreOrganizationPage;
