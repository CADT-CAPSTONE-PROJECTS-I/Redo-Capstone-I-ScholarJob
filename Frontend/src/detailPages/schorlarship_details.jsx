import {
  React,
  Navbar,
  HarvardUniverity,
  Footer,
} from "../import/all_import.jsx";

const scholarship_detailPage = () => {
  return (
    <div>
      <header className="p-8">
        <Navbar />
      </header>

      <div className="m-auto w-[1200px]">
        <section className="flex justify-center items-center min-h-[200px] w-[1200px]  mt-8 bg-gradient-to-tl from-customTeal-light/50 to-customTeal-dark/80 text-white">
          <div className="flex  p-8">
            <div className="flex-shrink-0">
              <img
                src={HarvardUniverity}
                alt="CADT Logo"
                className="w-40 h-40"
              />
            </div>
            <div className="ml-8 ">
              <h1 className="text-3xl font-bold">
                Master Degree in Machine Learning
              </h1>
              <h2 className="text-xl mt-4 font-semibold">
                Cambodia Academy & Digital Technology
              </h2>
              <p className="mt-2">
                A driving force of digital governance development in Cambodia to
                provide digital skill training for civil servants.
              </p>
            </div>
          </div>
          <div className="">
            <button className="bg-customTeal text-white rounded-lg py-2 px-4 font-bold hover:bg-customTeal-dark transition-colors">
              More info
            </button>
          </div>
        </section>

        <section className="flex flex-row ">
          <div className="mt-8 rounded-xl w-[650px] bg-white shadow-lg mr-8">
            <div className="bg-gradient-to-tl from-customTeal-light/50 to-customTeal-dark/80 rounded-t-lg p-4">
              <h2 className="text-lg text-white font-bold">
                Scholarship Description
              </h2>
            </div>
            <div className="p-4">
              <p className="text-gray-700 mb-4">
                CADT aims to be a national flagship research and education
                institution for Digital Technology and Innovation, nurturing
                digital talent and innovators to drive Cambodia toward a digital
                society.
              </p>

              <ul className="list-none mb-4 space-y-2">
                <li className="flex items-center">
                  <span className="font-bold">Degree Program: </span> Master of
                  Science in Machine Learning
                </li>
                <hr className="my-2 border-gray-300" />

                <li className="flex items-center">
                  <span className="font-bold">Program Duration: </span> 2 years
                </li>
                <hr className="my-2 border-gray-300" />

                <li className="flex items-center">
                  <span className="font-bold">Location: </span> Phnom Penh
                </li>
                <hr className="my-2 border-gray-300" />

                <li className="flex items-center">
                  <span className="font-bold">Eligible Number: </span> 100 - 150
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
                  <span className="font-bold">English proficiency: </span>{" "}
                  Advanced
                </li>
                <hr className="my-2 border-gray-300" />

                <li className="flex items-center">
                  <span className="font-bold">Age:</span>24 - 35
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="flex flex-row justify-between">
          <div className="mt-8 rounded-xl w-[650px] bg-white shadow-lg mr-8">
            <div className="bg-gradient-to-tl from-customTeal-light/50 to-customTeal-dark/80 rounded-t-lg p-4">
              <h2 className="text-lg text-white font-bold">
                Applicaiton Requirements
              </h2>
            </div>
            <div className="p-4">
              <ul className="list-none mb-4 space-y-2">
                <li className="flex items-center">
                  <span className="font-bold">Completed Application form</span>
                </li>
                <hr className="my-2 border-gray-300" />

                <li className="flex items-center">
                  <span className="font-bold">Official Transcipts</span>
                </li>
                <hr className="my-2 border-gray-300" />

                <li className="flex items-center">
                  <span className="font-bold">Letter Recommendation</span>
                </li>
                <hr className="my-2 border-gray-300" />

                <li className="flex items-center">
                  <span className="font-bold">Personal Statement</span>
                </li>
                <hr className="my-2 border-gray-300" />
                <li className="flex items-center">
                  <span className="font-bold">Ciriculum Vitae</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 rounded-xl w-[560px] bg-white shadow-lg">
            <div className="bg-gradient-to-tl from-customTeal-light/50 to-customTeal-dark/80 rounded-t-lg p-4">
              <h2 className="text-lg text-white font-bold">Contact Us !</h2>
            </div>
            <div className="p-4">
              <p className="font-bold mb-4">
                We have various ways to get in touch. As you can see below:{" "}
              </p>
              <div>
                <li className="flex items-center">
                  <span className="font-bold">Email Address: </span>{" "}
                </li>
                <hr className="my-2 border-gray-300" />

                <li className="flex items-center">
                  <span className="font-bold">Phone numbers: </span>
                </li>
                <hr className="my-2 border-gray-300" />

                <li className="flex items-center">
                  <span className="font-bold">Location: </span>
                </li>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-8">
          <div>
            <h1 className="font-bold text-black text-xl">Eligibility: </h1>
            <p>
              ​-This scholarship is open to need-based students only.
              <br />
              -This scholarship cannot be combined with any other scholarship
              scheme provided by CADT.
              <br />
              -This scholarship is openly awarded to international students
            </p>
          </div>
          <div>
            <h1 className="font-bold text-black text-xl">Benefits: </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
              blanditiis totam, nobis molestiae cupiditate amet eveniet
              similique minima eos aut, dolore id assumenda. Incidunt sint
              cumque cum. Voluptatem, autem necessitatibus.
            </p>
          </div>
        </section>

        <div className="mt-8 flex justify-center items-center ">
          <button className="w-[400px] h-[50px] bg-gradient-to-tl from-customTeal-light/50 to-customTeal-dark/80 text-white rounded-lg py-2 px-4 font-bold hover:bg-customTeal-dark transition-colors">
            Apply Now!
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default scholarship_detailPage;
