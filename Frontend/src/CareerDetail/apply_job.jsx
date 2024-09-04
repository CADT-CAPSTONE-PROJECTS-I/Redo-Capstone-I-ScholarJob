import {
  Navbar,
  Footer,
  React,
  UploadImage,
  Icon,
  appStore,
  DoneFile,
  useEffect,
  useNavigate,
  applyJobApi,
} from "../import/all_import.jsx";

const ApplyJobPage = () => {
  const navigate = useNavigate();
  const { cvData, setCvData, setSelectedFile, selectedFile, jobId, setErrors, setMessage, errors, message } = appStore();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCvData({ [name]: value });
  };

  const handleUploadFile = (e) => {
    try {
      const file = e.target.files && e.target.files[0];
      if (file) {
        console.log("File selected:", file.name);
        setSelectedFile(file);
      } else {
        console.log("No file selected.");
      }
    } catch (error) {
      console.error("Error handling file upload:", error);
    }
  };

  useEffect(() => {
    if (selectedFile) {
      console.log(
        "State has been updated with the new file:",
        selectedFile.name
      );
    }
  }, [selectedFile]);

  const handleSubmitApplication = async (e) => {
    e.preventDefault();
    setMessage(null);
    setErrors(null);

    try {
      const response = await applyJobApi(cvData, selectedFile);
      setMessage("Application submitted successfully!");
      navigate("/");
    } catch (error) {
      setErrors(error.errors || { message: "Application failed. Please try again." });
    }
  };

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <div className="flex justify-center mt-24 mb-12 ">
        <form className="h-[80vh] px-4  flex bg-cover rounded-lg shadow-md flex-col bg-white space-y-6"
          onSubmit={handleSubmitApplication}
        >
          <div>
            <h1 className=" text-sm text-center font-bold">
              Thank you for applying! Please enter your details and upload any
              relevant files to complete your application.
            </h1>
          </div>
          <div className="flex flex-row space-x-4" 
          >
            <div className="input-group relative w-full ">
              <Icon
                icon={"fluent:person-32-regular"}
                className="absolute top-1 left-1 text-gray-400"
              />
              <input
                type="text"
                id="name"
                name="name"
                value={cvData.name}
                onChange={handleChange}
                className=" input-group__input w-full pl-7 border-b-2 border-gray-300 focus:outline-none focus:border-customTeal transition duration-200"
                required
              />
              <label
                htmlFor="Full Name"
                className="input-group__label block text-gray-400  text-sm"
              >
                Full Name
              </label>
            </div>
            <div className="input-group relative w-full  ">
              <Icon
                icon={"iconoir:position"}
                className="absolute top-1 left-1 text-gray-400"
              />
              <input
                type="text"
                id="position"
                name="position"
                value={cvData.position}
                onChange={handleChange}
                className="input-group__input w-full pl-7 border-b-2 border-gray-300 focus:outline-none focus:border-customTeal transition duration-200"
                required
              />
              <label
                htmlFor="position"
                className="input-group__label block text-gray-400  text-sm"
              >
                Position
              </label>
            </div>
          </div>

          <div className="flex flex-row space-x-4">
            <div className="input-group relative w-full ">
              <Icon
                icon={"mdi-light:email"}
                className="absolute top-1 left-1 text-gray-400"
              />
              <input
                type="email"
                id="email"
                name="email"
                value={cvData.email}
                onChange={handleChange}
                className="input-group__input w-full pl-7 border-b-2 border-gray-300 focus:outline-none focus:border-customTeal transition duration-200"
                required
              />
              <label
                htmlFor="email"
                className="input-group__label block text-gray-400  text-sm"
              >
                Email
              </label>
            </div>
            <div className="input-group relative w-full ">
              <Icon
                icon={"fluent-mdl2:work"}
                className="absolute top-1 left-1 text-gray-400"
              />
              <input
                type="text"
                id="major"
                name="major"
                value={cvData.major}
                onChange={handleChange}
                className="input-group__input w-full pl-7 border-b-2 border-gray-300 focus:outline-none focus:border-customTeal transition duration-200"
                required
              />
              <label
                htmlFor="major"
                className="input-group__label block text-gray-400  text-sm"
              >
                Major
              </label>
            </div>
          </div>
          <div>
            <div className="bg-white h-[40vh] w-[60vw] border-dashed rounded-md border-customTeal border-2 flex justify-center items-center">
              <form>
                <label htmlFor="fileInput" className=" crusor-pointer">
                  <div>
                    <div className="flex justify-center h-24 cursor-pointer">
                      {selectedFile ? (
                        <img src={DoneFile} alt="pdf" />
                      ) : (
                        <img src={UploadImage} alt="pdf" />
                      )}
                    </div>
                    <div className="text-BlueDarrk font-bold my-3 lg:text-xl md:text-base text-base ">
                      <h1 className="flex justify-center cursor-pointer ">
                        {selectedFile
                          ? "Your uploaded CV successfully!"
                          : "Drag or Drop your CV here!"}
                      </h1>
                      {selectedFile ? (
                        ""
                      ) : (
                        <div className="flex items-center ">
                          <div className="flex-grow border-t border-b w-1/2"></div>
                          <h1 className="lg:text-xl md:text-base text-base  mx-4">
                            Or
                          </h1>
                          <div className="flex-grow border-t border-b w-1/2"></div>
                        </div>
                      )}
                    </div>
                    <div className="flex justify-center">
                      {/* Hidden file input */}
                      <input
                        type="file"
                        id="fileInput"
                        accept=".pdf"
                        onChange={handleUploadFile}
                        className="hidden"
                      />
                      <label
                        htmlFor="fileInput"
                        className="p-3 px-7 rounded-md bg-customTeal hover:bg-customTeal-dark text-white cursor-pointer font-bold"
                      >
                        {selectedFile ? "Change File" : "Browse Files"}
                      </label>
                    </div>
                  </div>
                </label>
                <input
                  type="file"
                  id="fileInput"
                  accept=".pdf"
                  className="hidden"
                  onChange={handleUploadFile}
                />
              </form>
            </div>
          </div>
          <div className="flex justify-between ">
            <button className="p-3 px-7 rounded-md bg-customTeal hover:bg-customTeal-dark text-white cursor-pointer font-bold "
            onClick={() => navigate(`/career/${jobId}`)}
            >Back</button>
            <button className="p-3 px-7 rounded-md bg-customTeal hover:bg-customTeal-dark text-white cursor-pointer font-bold "
            type='submit'
            >Submit</button>
          </div>
        </form>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default ApplyJobPage;
