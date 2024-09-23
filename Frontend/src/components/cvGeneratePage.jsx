import { useEffect, useRef, useState } from "react";
import {
  React,
  Navbar,
  appStore,
  FillPersonal,
  FillSkill,
  Icon,
  Footer,
  FormCVPage,
  LoginImage,
  MessagePopup,
  PopUpGen,
} from "../import/all_import.jsx";
import html2pdf from "html2pdf.js";
import { getRecommendationsApi } from "../API/cv_api.jsx";

const CVGeneratePage = () => {
  const {
    cvData,
    setCurrentComponent,
    currentComponent,
    isPopupOpen,
    setIsPopupOpen,
    successModalOpen,
    setSuccessModalOpen,
    token,
  } = appStore();

  const formRef = useRef(null);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    if (cvData) {
      fetchRecommendations();
    }
  }, [cvData]);

  const fetchRecommendations = async () => {
    try {
      const data = await getRecommendationsApi(cvData);
      setRecommendations(data);
    } catch (error) {
      console.error("Error fetching recommendations:", error);
    }
  };

  const handleClickSkill = () => {
    setCurrentComponent("skill");
  };

  const handleClickPersonal = () => {
    setCurrentComponent("personal");
  };

  const handleDownloadButtonClick = () => {
    if (token !== null) {
      if (formRef.current) {
        formRef.current.requestSubmit();
      }
      handleDownloadPdf();
    } else {
      setIsPopupOpen(true);
    }
  };

  const handleDownloadPdf = () => {
    const element = document.getElementById("cv-template");
    if (cvData.profilePicture === null) {
      setSuccessModalOpen(true);
    } else {
      try {
        const options = {
          margin: 0,
          filename: `${cvData.name || "cv"}_CV.pdf`,
          image: { type: "jpeg", quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
        };
        html2pdf()
          .from(element)
          .set(options)
          .save()
          .then(() => {
            setSuccessModalOpen(true);
          });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <header className="p-10">
          <Navbar />
        </header>
        <div className="bg-gradient-to-tl absolute top-1 from-customTeal-light/50 to-customTeal-dark/80 max-w-6xl w-full h-60 rounded-lg z-0"></div>
        <div className="relative mt-6">
          {currentComponent === "personal" ? <FillPersonal /> : <FillSkill />}
          <div className="flex space-x-2 justify-end my-8">
            {currentComponent !== "personal" && (
              <div className="flex space-x-2">
                <button
                  className="flex justify-center items-center px-4 py-2 bg-customTeal hover:bg-customTeal-dark text-white rounded-md"
                  onClick={handleClickPersonal}
                >
                  <Icon
                    icon={"ic:outline-arrow-back-ios"}
                    className="text-white mr-2"
                  />
                  <span>Back</span>
                </button>

                <button
                  className="flex justify-center items-center px-4 py-2 bg-customTeal hover:bg-customTeal-dark text-white rounded-md"
                  type="button"
                  onClick={handleDownloadButtonClick}
                >
                  <span className="mr-2">Save CV</span>
                </button>
              </div>
            )}
            {currentComponent === "personal" && (
              <button
                className="flex justify-center items-center px-4 py-2 bg-customTeal hover:bg-customTeal-dark text-white rounded-md"
                onClick={handleClickSkill}
              >
                <span className="mr-2">Next</span>
                <Icon icon={"ic:round-navigate-next"} className="text-white " />
              </button>
            )}
          </div>

          {/* CV Display Section */}
          <div>
            <FormCVPage ref={formRef} />
          </div>

          {/* Recommendations Section */}
          <div className="mt-12">
            <h3 className="text-xl font-bold">Job Recommendations</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
              {recommendations.length > 0 ? (
                recommendations.map((job, index) => (
                  <div key={index} className="p-4 border rounded shadow">
                    <h4 className="font-semibold">{job.title}</h4>
                    <p>{job.company}</p>
                    <p>{job.location}</p>
                    <p className="text-sm">{job.skills}</p>
                  </div>
                ))
              ) : (
                <p>No recommendations available</p>
              )}
            </div>
          </div>
        </div>
        {isPopupOpen && (
          <MessagePopup
            MessagePopUp="Log in to gain access to download your CV"
            ImagePopup={LoginImage}
          />
        )}
        {successModalOpen && (
          <PopUpGen
            isOpen={successModalOpen}
            iconColor={cvData.profilePicture ? "text-customTeal" : "text-red-500"}
            color={cvData.profilePicture ? "text-customTeal" : "text-red-500"}
            icon={cvData.profilePicture ? "solar:check-circle-broken" : "radix-icons:image"}
            title={cvData.profilePicture ? "Generated Successfully!" : "The image is required!"}
            onClose={() => setSuccessModalOpen(false)}
          />
        )}
      </div>
      <div className="mt-12">
        <Footer />
      </div>
    </div>
  );
};

export default CVGeneratePage;
