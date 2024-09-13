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
  const { clientId, setClientId, setIsPopupOpen, isPopupOpen, message, isModalOpen, setIsModalOpen  } = appStore();

  useEffect(() => {
    const fetchScholarshipDetail = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/scholarship/detail/${id}`
        );
        setScholarship(response.data.data);
        setLoading(false);

        const storedClientId = localStorage.getItem("clientId");
        console.log("Stored Client ID:", storedClientId);
        setClientId(storedClientId);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchScholarshipDetail();
  }, [id]);

  const handleApplyNowClick = () => {
    if (message !== "Login successful!") {
      setIsPopupOpen(true);
      setIsModalOpen(false);
    } else {
      setIsModalOpen(true);
    }

    // if (!clientId) {
    //   alert("Please log in to apply.");
    //   return;
    // }
    // setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  if (loading) {
    return <LoadingPage/>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!scholarship) {
    return <div>No scholarship details available.</div>;
  }

  return (
    <div>
      <header className="p-8">
        <Navbar />
      </header>

      <div className="m-auto w-[1200px]">
        <section className="bg-gradient-to-tl from-customTeal-light/50 to-customTeal-dark/80 text-white p-6 rounded mb-2 mt-5">
          <div className="flex items-center">
            <img
              src={scholarship.image_url || ScholarJobLogoWhite}
              alt={scholarship.title}
              className="w-32 h-32 object-cover mr-6 rounded"
            />
            <div className="text-white">
              <h1 className="text-2xl font-bold mb-2">{scholarship.title}</h1>
              <div className="">
                <h1 className="text-3xl font-bold">{scholarship.major}</h1>
                <h2 className="text-xl mt-4 font-semibold">
                  {scholarship.degree}
                </h2>
              </div>
              <div className="text-gray-200 mt-2 flex">
                <p className="mr-6">
                  Publish Date:{" "}
                  {new Date(scholarship.created_at).toLocaleDateString()}
                </p>
                <p>
                  Closing Date:{" "}
                  {new Date(scholarship.deadline).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-row">
          <div className="mt-8 rounded-xl w-[650px] bg-white shadow-lg mr-8">
            <div className="bg-gradient-to-tl from-customTeal-light/50 to-customTeal-dark/80 rounded-t-lg p-4">
              <h2 className="text-lg text-white font-bold">
                Scholarship Description
              </h2>
            </div>
            <div className="p-4">
              <p className="text-gray-700 mb-4">
                {scholarship.full_description}
              </p>
              <ul className="list-none mb-4 space-y-2">
                <li className="flex items-center">
                  <span className="font-bold">Degree Program: </span>
                  {scholarship.degree}
                </li>
                <hr className="my-2 border-gray-300" />
                <li className="flex items-center">
                  <span className="font-bold">Program Duration: </span>
                  {scholarship.program_duration} years
                </li>
                <hr className="my-2 border-gray-300" />
                <li className="flex items-center">
                  <span className="font-bold">Location: </span>
                  {scholarship.location}
                </li>
                <hr className="my-2 border-gray-300" />
                <li className="flex items-center">
                  <span className="font-bold">Eligible Number: </span>
                  {scholarship.available_position}
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 rounded-xl w-[560px] bg-white shadow-lg">
            <div className="bg-gradient-to-tl from-customTeal-light/50 to-customTeal-dark/80 rounded-t-lg p-4">
              <h2 className="text-lg text-white font-bold">
                Scholarship Requirements
              </h2>
            </div>
            <div className="p-4">
              <ul className="list-none mb-4 space-y-2">
                <li className="flex items-center">
                  <span className="font-bold">Award: </span>
                  {scholarship.award}
                </li>
                <hr className="my-2 border-gray-300" />
                <li className="flex items-center">
                  <span className="font-bold">English proficiency: </span>
                  {scholarship.english_proficiency}
                </li>
                <hr className="my-2 border-gray-300" />
                <li className="flex items-center">
                  <span className="font-bold">Age: </span>
                  {scholarship.age}
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <div>
            <h1 className="font-bold text-black text-xl">Eligibility: </h1>
            <div className="bg-white" dangerouslySetInnerHTML={{ __html: scholarship.eligibility }} />
          </div>
          <div>
            <h1 className="font-bold text-black text-xl">Benefits: </h1>
            <div className="bg-white" dangerouslySetInnerHTML={{ __html: scholarship.offer }} />
          </div>
        </section>
        {/* <h1 className="font-bold text-black text-xl flex justify-center items-center">How to Apply</h1> */}
        <div
          onClick={handleApplyNowClick}
          className="mt-8 flex justify-center items-center "
        >
          <button className="w-[200px] h-[50px] bg-customTeal text-white rounded-lg py-2 px-4 font-bold hover:bg-customTeal-dark transition-colors mb-5">
            Apply Now!
          </button>
        </div>
      </div>

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

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default ScholarshipDetailPage;
