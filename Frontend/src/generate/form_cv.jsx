import { Icon, React, appStore } from "../import/all_import.jsx";

const FormCVPage = () => {
  const { cvData, setCvData } = appStore();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="relative ">
        {/* CV Display Section */}
        <div
          id="cv-template"
          className="bg-white rounded-lg shadow-xl w-[792px] h-[1122px] "
        >
          <div className="bg-customBlue-light relative h-10"></div>
          <div className="ml-10 absolute flex flex-col z-10 top-0 bg-customPink-light h-full w-64">
            <div className="flex justify-center">
              <div className="w-56 h-56 rounded-full mt-14 flex justify-center bg-gray-200 overflow-hidden border-2 border-white">
                {cvData.profilePicture ? (
                  <img
                    src={cvData.profilePicture}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-gray-500 flex items-center justify-center h-full text-sm">
                    Profile Picture
                  </span>
                )}
              </div>
            </div>

            {/* contact */}
            <div className="flex flex-col ml-4 mt-4 mb-4 justify-start">
              <div className="flex flex-row items-center ml-1  space-x-2 ">
                <div className="h-3 w-3 bg-customBlue-light"></div>
                <div>
                <h1 className="font-bold -mt-4">CONTACT</h1></div> 
              </div>
              <div className="mt-3 flex items-center space-x-2 ">
                <div className="h-5 w-5 bg-customBlue-light flex  items-center justify-center">
                  <Icon icon="solar:phone-bold" className="text-white " />
                </div>
                <h2 className="text-xs -mt-3 font-semibold text-gray-800 ">
                  {cvData.phone}
                </h2>
              </div>
              <div className="mt-3 flex items-center">
                <div className="h-5 w-5 bg-customBlue-light flex mr-2 items-center justify-center">
                  <Icon icon="ic:round-email" className="text-white w-3 " />
                </div>
                <h2 className="text-xs -mt-3 font-semibold text-gray-800 ">
                  {cvData.email}
                </h2>
              </div>
              <div className="mt-3 flex items-start space-x-2">
                <div className="h-5 w-5 bg-customBlue-light flex  items-center justify-center shrink-0">
                  <Icon icon="mdi:location" className="text-white w-3 " />
                </div>
                <h2 className="text-xs flex-1 -mt-3 font-semibold text-gray-800  break-words">
                  {cvData.currentAddress}
                </h2>
              </div>
            </div>

            {/* perspnality */}
            {/* <div className="flex flex-col ml-4 mt-2 justify-start ">
              <div className="flex items-center ml-1  space-x-2 justify-start">
                <div className="h-3 w-3 bg-customBlue-light"></div>
                <h1 className="font-bold -mt-4">PERSONALITY</h1>
              </div>
              <ul className=" text-sm font-semibold text-gray-800 ml-1">
                <li>
                  <pre>• Age        : {cvData.age} years old</pre>
                </li>
                <li>
                  <pre>• Gender     : {cvData.gender}</pre>
                </li>
                <li>
                  <pre>• Birthdate  : {cvData.dateOfBirth}</pre>
                </li>
                <li>
                  <pre className="break-words w-full whitespace-normal pr-4 flex">
                    <span className="mr-2 ">•</span>{" "}
                    <span className=" text-justify">
                      Birthplace : {cvData.placeOfBirth}
                    </span>
                  </pre>
                </li>
              </ul>
            </div> */}

            {/* hard skill */}
            <div className="flex flex-col ml-4 mt-5 justify-start ">
              <div className="flex items-center ml-1  space-x-2 justify-start">
                <div className="h-3 w-3 bg-customBlue-light"></div>
                <h1 className="font-bold -mt-4">HARD SKILLS</h1>
              </div>
              <div className="font-semibold ">
                {cvData.hardSkills && cvData.hardSkills.length > 0 ? (
                  <ul className="text-sm font-semibold text-gray-800 ">
                    {cvData.hardSkills.map((hardSkill, index) => (
                      <li key={index} className="flex  pr-6 pl-1 ">
                      {" "}
                      <span className="text-xl mr-2 -mt-1">•</span> 
                      <span className="inline-block text-justify break-words w-[205px]">{hardSkill}</span>
                    </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-700">Your Hard Skills</p>
                )}
              </div>
            </div>

            {/* soft skill */}
            <div className="flex flex-col ml-4 mt-5 justify-start ">
              <div className="flex items-center ml-1  space-x-2 justify-start">
                <div className="h-3 w-3 bg-customBlue-light"></div>
                <h1 className="font-bold -mt-4">SOFT SKILLS</h1>
              </div>
              <div className="font-semibold ">
                {cvData.softSkills && cvData.softSkills.length > 0 ? (
                  <ul className="text-sm font-semibold text-gray-800 ">
                    {cvData.softSkills.map((softSkill, index) => (
                      <li key={index} className="flex  pr-6 pl-1 ">
                        {" "}
                        <span className="text-xl mr-2 -mt-1">•</span> 
                        <span className="inline-block text-justify break-words w-[205px]">{softSkill}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-700">Your Soft Skill</p>
                )}
              </div>
            </div>

            {/* language */}
            <div className="flex flex-col ml-4 mt-5 justify-start ">
              <div className="flex items-center ml-1  space-x-2 justify-start">
                <div className="h-3 w-3 bg-customBlue-light"></div>
                <h1 className="font-bold -mt-4">Languages</h1>
              </div>
              <div className="font-semibold ml-1 ">
                {cvData.languages && cvData.languages.length > 0 ? (
                  <ul className="text-sm font-semibold text-gray-800 ">
                    {cvData.languages.map((language, index) => (
                      <li key={index}>
                        {" "}
                        <span className="text-xl mr-2 mt-1">•</span> {language}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-700">Your Languages</p>
                )}
              </div>
            </div>
          </div>
          <div className=" w-[496px] h-[1050px] absolute right-0 ">
            <div className="absolute top-28 left-6 space-y-6 ">
              <div className="space-y-3">
                <h1 className="text-3xl font-bold uppercase">{cvData.name}</h1>
                <h3
                  className="text-md font-bold uppercase"
                  style={{ letterSpacing: "8px" }}
                >
                  {cvData.position}
                </h3>
              </div>
              <div className="border z-10 border-b-1 w-[472px] border-black"></div>
              <div className="flex flex-col">
                <div className="bg-customPink-light p-3 space-x-3 items-center flex mr-6">
                  <div className="h-3 w-3 bg-customBlue-light "></div>
                  <h1 className="font-bold -mt-4">ABOUT ME</h1>
                </div>
                <p className="text-sm text-justify pr-9 pl-3 font-semibold w-[480px]">
                  {cvData.aboutMe}
                </p>
              </div>

              {/* Education Section */}
              <div className="flex flex-col mt-5 justify-start ">
                <div className="bg-customPink-light p-3 space-x-3 items-center flex mr-6">
                  <div className="h-3 w-3 bg-customBlue-light "></div>
                  <h1 className="font-bold -mt-4">EDUCATION</h1>
                </div>
                <div className="font-semibold ml-1 ">
                  {cvData.educations && cvData.educations.length > 0 ? (
                    <ul className="text-sm font-semibold text-gray-800 ">
                      {cvData.educations.map((education, index) => (
                        <li key={index} className="flex break-words pr-6 pl-3">
                          {" "}
                          <span className="text-xl mr-2 -mt-1">•</span>{" "}
                          <span className="inline-block text-justify w-[410px]">
                            {education}
                          </span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-700">Your Educations</p>
                  )}
                </div>
              </div>

              {/* Experience Section */}
              <div className="flex flex-col mt-5 justify-start ">
                <div className="bg-customPink-light p-3 space-x-3 items-center flex mr-6">
                  <div className="h-3 w-3 bg-customBlue-light "></div>
                  <h1 className="font-bold -mt-4">EXPERIENCE</h1>
                </div>
                <div className="font-semibold ml-1 ">
                  {cvData.experiences && cvData.experiences.length > 0 ? (
                    <ul className="text-sm font-semibold text-gray-800 break-words">
                      {cvData.experiences.map((experience, index) => (
                        <li key={index} className="flex break-words pr-6 pl-3">
                          {" "}
                          <span className="text-xl mr-2 -mt-1">•</span>{" "}
                          <span className="inline-block text-justify w-[410px]">
                            {experience}
                          </span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-700">Your Experiences</p>
                  )}
                </div>
              </div>
            </div>

            {/* References Section */}
            {/* <div className="mt-6">
              <h2 className="text-xl font-bold">References</h2>
              <ul className="text-sm mt-2 list-disc pl-5">
                {cvData.references?.map((ref, index) => (
                  <li key={index}>
                    {ref.name} - {ref.position} ({ref.contact})
                  </li>
                ))}
              </ul>
            </div> */}
          </div>
          <div>
            <h1 className="bg-customBlue-light h-10 absolute bottom-0 w-full z-1"></h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormCVPage;
