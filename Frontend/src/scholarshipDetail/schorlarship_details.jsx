import {
  React,
  useState,
  useEffect,
  axios,
  useParams,
  Navbar,
  Footer,
  ScholarJobLogoWhite,
  appStore,
  MessagePopup,
  ApplyModalScholarship,
  LoginImage,
  LoadingPage,
} from "../import/all_import.jsx";

const ScholarshipDetailPage = () => {
  const { id } = useParams();
  const [scholarship, setScholarship] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const {setIsPopupOpen, isPopupOpen, message, isModalOpen, setIsModalOpen, token, clientId  } = appStore();
 

  useEffect(() => {
    const fetchScholarshipDetail = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/scholarship/detail/${id}`
        );
        setScholarship(response.data.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchScholarshipDetail();
  }, [id]);

  const handleApplyNowClick = () => {
    if (token !== null) {
      setIsModalOpen(true);
    } else {
      setIsModalOpen(false);
    }
    if(token === null){
      setIsPopupOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  if (loading) {
    return <LoadingPage />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!scholarship) {
    return <div>No scholarship details available.</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="p-6 bg-white shadow-md">
        <Navbar />
      </header>

      <div className="max-w-screen-lg mx-auto p-8 bg-white shadow-lg rounded-lg mt-12">
        <div className="bg-gradient-to-tl from-customTeal-light/50 to-customTeal-dark/80 text-white p-6 rounded mb-8">
          <div className="flex items-center">
            <img
              src={scholarship.image_url || ScholarJobLogoWhite}
              alt={scholarship.title}
              className="w-32 h-32 object-cover mr-6 rounded"
            />
            <div className="text-white">
              <h1 className="text-2xl font-bold mb-2">{scholarship.title}</h1>
              <h2 className="text-3xl font-bold">{scholarship.major}</h2>
              <div className="text-gray-200 mt-2 flex">
                <p className="mr-6">
                  Publish Date: {new Date(scholarship.created_at).toLocaleDateString()}
                </p>
                <p>
                  Closing Date: {new Date(scholarship.deadline).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="border border-gray-300 rounded">
            <div className="bg-gradient-to-tl from-customTeal-light/50 to-customTeal-dark/80 text-white p-4 rounded-t">
              <h2 className="text-lg font-semibold text-white">
                Scholarship Description
              </h2>
            </div>
            <div className="bg-white p-4 space-y-2">
              <p className="text-gray-700 mb-4">{scholarship.full_description}</p>
              <ul className="list-none mb-4 space-y-2">
                <li className="flex items-center">
                  <span className="font-bold">Degree Program: </span>{scholarship.degree}
                </li>
                <li className="flex items-center">
                  <span className="font-bold">Program Duration: </span>{scholarship.program_duration} years
                </li>
                <li className="flex items-center">
                  <span className="font-bold">Location: </span>{scholarship.location}
                </li>
                <li className="flex items-center">
                  <span className="font-bold">Eligible Number: </span>{scholarship.available_position}
                </li>
              </ul>
            </div>
          </div>

          <div className="border border-gray-300 rounded">
            <div className="bg-gradient-to-tl from-customTeal-light/50 to-customTeal-dark/80 text-white p-4 rounded-t">
              <h2 className="text-lg font-semibold text-white">
                Scholarship Requirements
              </h2>
            </div>
            <div className="bg-white p-4 space-y-2">
              <ul className="list-none mb-4 space-y-2">
                <li className="flex items-center">
                  <span className="font-bold">Award: </span>{scholarship.award}
                </li>
                <li className="flex items-center">
                  <span className="font-bold">English proficiency: </span>{scholarship.english_proficiency}
                </li>
                <li className="flex items-center">
                  <span className="font-bold">Age: </span>{scholarship.age}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border border-gray-300 rounded mb-8">
          <div className="bg-gradient-to-tl from-customTeal-light/50 to-customTeal-dark/80 text-white p-4 rounded-t">
            <h2 className="text-lg font-semibold text-white">Eligibility</h2>
          </div>
          <div className="bg-white p-4" dangerouslySetInnerHTML={{ __html: scholarship.eligibility }} />
        </div>

        <div className="border border-gray-300 rounded mb-8">
          <div className="bg-gradient-to-tl from-customTeal-light/50 to-customTeal-dark/80 text-white p-4 rounded-t">
            <h2 className="text-lg font-semibold text-white">Benefits</h2>
          </div>
          <div className="bg-white p-4" dangerouslySetInnerHTML={{ __html: scholarship.offer }} />
        </div>

        <div className="text-center">
          <button
            onClick={handleApplyNowClick}
            className="bg-customTeal text-white px-10 py-3 rounded-lg hover:bg-customTeal-dark text-lg shadow-md"
          >
            Apply Now!
          </button>
        </div>
      </div>
      <br />
      <footer>
        <Footer />
      </footer>

      <ApplyModalScholarship
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        clientId={clientId}
        scholarshipId={scholarship.id}
      />

      {isPopupOpen && (
        <MessagePopup
          MessagePopUp="Log in to gain access to download your CV"
          ImagePopup={LoginImage}
        />
      )}
    </div>
  );
};

export default ScholarshipDetailPage;
