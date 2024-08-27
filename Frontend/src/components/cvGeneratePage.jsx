import {
  React,
  Navbar,
  appStore,
  FillPersonal,
  FillSkill,
  Icon,
  Footer,
  FormCVPage
} from "../import/all_import.jsx";
import html2pdf from "html2pdf.js";

const CVGeneratePage = () => {
  const { cvData, setCvData, setCurrentComponent, currentComponent } =
    appStore();

  const handleClickSkill = () => {
    setCurrentComponent("skill");
  };

  const handleClickPersonal = () => {
    setCurrentComponent("personal");
  };

  const handleDownloadPdf = () => {
    const element = document.getElementById("cv-template");
    const options = {
      margin: 0,
      filename: `${cvData.name || "cv"}_CV.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: 'a4', orientation: "portrait" },
    };
    html2pdf().from(element).set(options).save();
  };

  return (
    <div>
      <div className="min-h-screen flex flex-col justify-center items-center">
      <header className="p-10">
        <Navbar />
      </header>
      <div className="bg-gradient-to-tl  absolute top-1 from-customTeal-light/50 to-customTeal-dark/80 max-w-6xl w-full h-52 z-0 "></div>
      <div className="relative mt-6">
        {currentComponent === "personal" ? <FillPersonal /> : <FillSkill />}
        <div className="flex space-x-2 justify-end my-8">
          {currentComponent !== "personal" && (
            <div className="flex space-x-2">
              <button
              className="flex justify-center items-center px-4 py-2 bg-customTeal hover:bg-customTeal-dark text-white rounded-md"
              onClick={handleClickPersonal}
            >
              <Icon icon={"ic:outline-arrow-back-ios"} className="text-white mr-2" />
              <span >Back</span>
            </button>
            <button
            className="flex justify-center items-center px-4 py-2 bg-customTeal hover:bg-customTeal-dark text-white rounded-md"
            onClick={handleDownloadPdf}
          >
            <span className="mr-2">Download as PDF</span>
            <Icon icon={"carbon:generate-pdf"} className="text-white " />
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
          <FormCVPage/>
        </div>
      </div>
      
    </div>
    <div>
        <Footer/>
      </div>
    </div>
  );
};

export default CVGeneratePage;
