// ApplyModalJob.jsx
import {
  React,
  useState,
  PopUpGen,
  UploadImage,
  ImageDone,
  Icon,
  appStore,
  submitJobApplication,
} from "../import/all_import.jsx";

const ApplyModalJob = ({ isOpen, onClose, jobId }) => {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("pending");
  const [isLoading, setIsLoading] = useState(false);
  const { successModalOpen, setSuccessModalOpen, clientId } = appStore();

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!clientId) {
      alert("Client ID is missing. Please log in again.");
      return;
    }

    if (file) {
      const formData = new FormData();
      formData.append("client_id", clientId);
      formData.append("job_id", jobId);
      formData.append("status", status);
      formData.append("attach_file", file);

      setIsLoading(true);

      try {
        await submitJobApplication(formData);
        setSuccessModalOpen(true);
      } catch (error) {
        alert("There was an error submitting your application. Please try again.");
      } finally {
        setIsLoading(false);
      }
    } else {
      alert("Please select a file to upload.");
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
        <form className="bg-white p-4 rounded-lg" onSubmit={handleSubmit}>
          <div className="flex justify-between items-center relative">
            <button className="tooltip text-red-500 transition transform-transition duration-300 hover:scale-110 hover:text-red-600">
              <Icon
                icon={"ic:round-close"}
                onClick={onClose}
                className="size-6 cursor-pointer"
              />
              <div className="tooltiptext">Close</div>
            </button>
            <label className="text-lg font-bold absolute left-1/2 transform -translate-x-1/2">
              Select Attach File
            </label>
            <button
              type="submit"
              className="hover:bg-customTeal-dark bg-customTeal text-white py-1 px-4 rounded"
            >
              Submit
            </button>
          </div>
          {isLoading && (
            <div className="flex items-center justify-center mb-4">
              <div
                className="spinner-border animate-spin inline-block w-8 h-8 border-4 border-current border-t-transparent text-blue-600 rounded-full"
                role="status"
              >
                <span className="visually-hidden"></span>
              </div>
            </div>
          )}
          <div className="bg-white h-[40vh] w-[140vh] border-dashed rounded-md border-customTeal border-2 flex justify-center items-center mt-4">
            <form>
              <label className="cursor-pointer">
                <div>
                  <div className="flex justify-center h-24">
                    {file ? (
                      <img src={ImageDone} alt="Selected" />
                    ) : (
                      <img src={UploadImage} alt="uploadimage" />
                    )}
                  </div>
                  <div className="text-BlueDarrk font-bold my-3 text-base ">
                    <h1 className="flex justify-center ">
                      {file ? (
                        <div className="flex flex-col items-center">
                          <p>Your CV has been uploaded</p>
                          <p>" {file.name} "</p>
                        </div>
                      ) : (
                        "Drag and Drop your CV here"
                      )}
                    </h1>
                    {!file ? (
                      <div className="flex items-center ">
                        <div className="flex-grow border-t border-b w-1/2"></div>
                        <h1 className="text-sm mx-4">OR</h1>
                        <div className="flex-grow border-t border-b w-1/2"></div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="flex justify-center">
                    <label className="py-2 px-4 rounded-md text-white text-sm bg-customTeal cursor-pointer hover:bg-customTeal-dark ">
                      {file ? "Change CV" : "Browse files"}
                      <input
                        type="file"
                        accept="application/pdf"
                        className="hidden"
                        onChange={handleFileChange}
                      />
                    </label>
                    <div className="flex justify-end"></div>
                  </div>
                </div>
              </label>
            </form>
          </div>
        </form>
      </div>

      <PopUpGen
        iconColor="text-customTeal"
        color="text-customTeal"
        icon={"icon-park-outline:success"}
        title="Successful"
        isOpen={successModalOpen}
        message="Your application has been submitted successfully."
        onClose={() => {
          setSuccessModalOpen(false);
          onClose();
        }}
      />
    </>
  );
};

export default ApplyModalJob;
