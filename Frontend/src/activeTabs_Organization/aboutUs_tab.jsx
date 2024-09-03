import React from "react";

const AboutUsTab = () => {
  return (
    <section className="flex flex-row justify-between">
      {/* Column 1: About Us and Contact Us */}
      <div className="flex flex-col w-[650px] space-y-6">
        <div className="rounded-xl bg-white shadow-lg">
          <div className="bg-gradient-to-tl from-customTeal-light/50 to-customTeal-dark/80 rounded-t-lg p-4">
            <h2 className="text-lg text-white font-bold">About Us</h2>
          </div>
          <div className="p-4">
            <p className="text-gray-700 mb-4">
              CADT aims to be a national flagship research and education
              institution for Digital Technology and Innovation, nurturing digital
              talent and innovators to drive Cambodia toward a digital society.
            </p>
          </div>
        </div>

        <div className="rounded-xl bg-white shadow-lg">
          <div className="bg-gradient-to-tl from-customTeal-light/50 to-customTeal-dark/80 rounded-t-lg p-4">
            <h2 className="text-lg text-white font-bold">Contact Us At:</h2>
          </div>
          <div className="p-4">
            <ul className="list-none mb-4 space-y-2">
              <li className="flex items-center">
                <span className="font-bold">Academic level:</span> Master of
                Science in Machine Learning
              </li>
              <hr className="my-2 border-gray-300" />

              <li className="flex items-center">
                <span className="font-bold">Field of study: </span> Computer
                Science
              </li>
              <hr className="my-2 border-gray-300" />

              <li className="flex items-center">
                <span className="font-bold">English proficiency: </span> Advanced
              </li>
              <hr className="my-2 border-gray-300" />

              <li className="flex items-center">
                <span className="font-bold">Age:</span> 24 - 35
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Column 2: Organization Stats */}
      <div className="w-[320px] rounded-xl bg-white shadow-lg">
        <div className="bg-gradient-to-tl from-customTeal-light/50 to-customTeal-dark/80 rounded-t-lg p-4">
          <h2 className="text-lg text-white font-bold">Organization Stats</h2>
        </div>
        <div className="p-4">
          <ul className="list-none mb-4 space-y-2">
            <li className="flex items-center">
              <span className="font-bold">Location:</span> Phnom Penh
            </li>
            <hr className="my-2 border-gray-300" />

            <li className="flex items-center">
              <span className="font-bold">Number of Employees:</span> 150
            </li>
            <hr className="my-2 border-gray-300" />

            <li className="flex items-center">
              <span className="font-bold">Office Policy:</span> Flexible
            </li>
            <hr className="my-2 border-gray-300" />

            <li className="flex items-center">
              <span className="font-bold">Founded:</span> 2010
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUsTab;
