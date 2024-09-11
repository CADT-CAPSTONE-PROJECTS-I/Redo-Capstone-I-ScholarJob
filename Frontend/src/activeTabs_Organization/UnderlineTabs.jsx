import { React, appStore } from "../import/all_import.jsx";

const UnderlineTabs = ({ aboutContent, offeringContent }) => {
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
            activeTab === "offerings"
              ? "border-b-2 border-customTeal-light text-customTeal-light"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("offerings")}
        >
          Offerings
        </button>
      </div>
      <div className="p-4">
        {activeTab === "about" && <div>{aboutContent}</div>}
        {activeTab === "offerings" && <div>{offeringContent}</div>}
      </div>
    </div>
  );
};

export default UnderlineTabs;
