import { React, appStore, Navbar, Footer, } from "../import/all_import.jsx";

const UnderlineTabs = ({ aboutContent, jobsContent }) => {
  const { activeTab, setActiveTab } = appStore();

  return (
    <div className="w-full">

      <div className="flex border-b border-gray-300">
        <button
          className={`px-4 py-2 focus:outline-none ${
            activeTab === "about"
              ? "border-b-2 border-customTeal-light text-customTeal-light"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("about")}
        >
          About Us
        </button>
        <button
          className={`px-4 py-2 focus:outline-none ${
            activeTab === "jobs"
              ? "border-b-2 border-customTeal-light text-customTeal-light"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("jobs")}
        >
          Job Offerings
        </button>
      </div>
      <div className="p-4">
        {activeTab === "about" && <div>{aboutContent}</div>}
        {activeTab === "jobs" && <div>{jobsContent}</div>}
      </div>
    </div>
  );
};

export default UnderlineTabs;
