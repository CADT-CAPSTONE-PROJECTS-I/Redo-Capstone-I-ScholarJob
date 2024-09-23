
import {
  Navbar,
  Footer,
  WorkImage,
  GraduateImage,
  ScholarJobLogoGreen,
  useEffect,
  useState,
  fetchAboutData,
  fetchTeamMembers,
  React,
  LoadingPage,
} from "../import/all_import.jsx";

const AboutUsPage = () => {
  const [aboutData, setAboutData] = useState(null);
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://dev-career.cammob.ovh/capstone/Backend/public/api/about-us')
      .then(response => response.json())
      .then(data => setAboutData(data))
      .catch(error => console.error('Error fetching About Us data:', error));
    
    fetch('https://dev-career.cammob.ovh/capstone/Backend/public/api/team-members')
      .then(response => response.json())
      .then(data => setTeamMembers(data))
      .catch(error => console.error('Error fetching Team Members data:', error));
  }, []);

  if (loading) return <LoadingPage/>;
  if (error) return <div>Error loading data: {error.message}</div>;

  return (
    <div>
      <header className="p-4 md:p-12">
        <Navbar />
      </header>

      {/* Mission Section */}
      <section className="relative items-center flex flex-col md:flex-row justify-center mx-4 md:mx-16 bg-gradient-to-tl from-customTeal-light/50 to-customTeal-dark/80 text-white rounded-lg p-6">
        <div className="mb-4 text-center md:text-left">
          {aboutData?.mission ? (
            <span dangerouslySetInnerHTML={{ __html: aboutData.mission }} />
          ) : (
            "Our Mission"
          )}
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="mt-12 flex flex-col md:flex-row justify-between items-center mx-4 md:mx-16">
        <div className="md:pl-16 w-full md:w-2/3 mb-6 md:mb-0">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="pr-0 md:pr-6">
            {aboutData?.mission ? (
              <span dangerouslySetInnerHTML={{ __html: aboutData.mission }} />
            ) : (
              "Loading mission..."
            )}
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-end pt-4 pr-0 md:pr-16">
          <img
            src={WorkImage}
            alt="Mission Image"
            className="w-full md:max-w-md rounded-lg"
          />
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="mt-12 flex flex-col md:flex-row justify-between items-center mx-4 md:mx-16">
        <div className="w-full md:w-1/2 flex justify-start pt-4 md:ml-16 mb-6 md:mb-0">
          <img
            src={GraduateImage}
            alt="Vision Image"
            className="w-full md:max-w-md rounded-lg"
          />
        </div>
        <div className="w-full md:w-2/3">
          <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
          <p className="pr-0 md:pr-16">
            {aboutData?.vision ? (
              <span dangerouslySetInnerHTML={{ __html: aboutData.vision }} />
            ) : (
              "Loading vision..."
            )}
          </p>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="mt-16 relative flex flex-col justify-center items-center px-4">
        <h2 className="text-4xl font-extrabold text-center text-gray-800">
          Our Team
        </h2>
        <div className="border-t border-4 w-12 mt-4 mb-8 border-customTeal rounded-full"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white shadow-md rounded-lg text-center w-full p-6 mb-10 hover:scale-105 hover:shadow-2xl transition-transform duration-300 transform ease-in-out"
            >
              <img
                src={member.image_url || ScholarJobLogoGreen}
                alt={member.name}
                className="rounded-full w-36 h-36 mx-auto mb-4 object-cover border-4 border-customTeal"
              />
              <h3 className="font-semibold text-xl text-gray-800 mb-2">
                {member.name}
              </h3>
              <p className="text-customTeal font-medium mb-1">
                {member.position}
              </p>
              <p className="text-gray-500 text-sm mb-3">{member.description}</p>
              <p className="text-gray-400 text-xs">{member.contact}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-12">
        <Footer />
      </footer>
    </div>
  );
};

export default AboutUsPage;
