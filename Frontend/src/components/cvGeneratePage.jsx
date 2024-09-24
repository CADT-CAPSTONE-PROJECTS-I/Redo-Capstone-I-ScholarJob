import { useEffect, useRef, useState } from "react";
import {
  React,
  Navbar,
  appStore,
  FillPersonal,
  FillSkill,
  Icon,
  Link,
  ScholarJobLogoGreen,
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

  const scrollToTop = () => {
    window.scrollTo(0, 0);
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
          {/* Switch between Personal and Skill sections */}
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

      <section className="mt-12 mx-16">
        <div className="w-full m-auto">
          <div className="flex justify-between mb-4">
            <div className="font-bebas tracking-widest mb-[-16px] bg-gradient-to-tl from-customTeal-light/50 to-customTeal-dark/80 h-[50px] rounded-t-lg flex px-8 justify-center items-center text-white font-medium text-xl">
              Job Recommendations
            </div>
            <div>
            </div>
          </div>
        </div>
        <div className="border-l h-[290px] border-gray-500 border-r overflow-x-scroll no-scrollbar w-full m-auto bg-gray-200">
          <ul className="list-none" onClick={scrollToTop}>
            <div className="flex">
              {recommendations.length > 0 ? (
                recommendations.map((job, index) => (
                  <li
                    key={index}
                    className="w-52 h-100 ml-4 my-4 border bg-white border-gray-300 shadow-xl rounded-lg overflow-y-auto flex-shrink-0 transition transform-transition hover:scale-105 hover:border-2 hover:border-customTeal"
                  >
                     <Link to={`/career/${job.id_job}`}>
                      <div className="flex items-center justify-center h-[200px] p-2">
                        <img
                          src={job.image_url || ScholarJobLogoGreen}
                          className="w-full h-full object-contain rounded-lg border border-gray-300"
                        />
                      </div>
                      <div className="bg-white flex justify-center">
                        <h2 className="h-[55px] text-lg font-semibold text-gray-600">
                          {job.title_job}
                        </h2>
                      </div>
                    </Link>
                  </li>
                ))
              ) : (
                <p className="text-center w-full">No recommendations available</p>
              )}
            </div>
          </ul>
        </div>
      </section>
      <div className="mt-12">
        <Footer />
      </div>
    </div>
  );
};

export default CVGeneratePage;  