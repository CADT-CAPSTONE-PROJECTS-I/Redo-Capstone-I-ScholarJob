import { Icon, React, appStore } from "../import/all_import.jsx";

const FormCVPage = () => {
  const { cvData, setCvData } = appStore();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="relative ">
        {/* CV Display Section */}
        <div
          id="cv-template"
          className="bg-white rounded-lg shadow-xl w-[70vw] h-[1122px] "
        >
          <div className="bg-customBlue-light relative h-10"></div>
          <div className="ml-10 absolute top-0 bg-customPink-light h-full w-64">
            <div className="flex flex-col ">
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
              <div className="flex flex-col ml-4 mt-4 mb-4 justify-start  ">
                <div className="flex items-center ml-1  space-x-2 justify-start">
                  <div className="h-3 w-3 bg-customBlue-light"></div>
                  <h1 className="font-bold -mt-4">CONTACT</h1>
                </div>
                <div className="mt-3 flex items-center space-x-2">
                  <div className="h-6 w-6 bg-customBlue-light flex  items-center justify-center">
                    <Icon icon="solar:phone-bold" className="text-white" />
                  </div>
                  <h2 className="text-xs -mt-3 font-semibold text-gray-800">
                    {cvData.phone}
                  </h2>
                </div>
                <div className="mt-3 flex items-center">
                  <div className="h-6 w-6 bg-customBlue-light flex mr-2 items-center justify-center">
                    <Icon icon="ic:round-email" className="text-white  " />
                  </div>
                  <h2 className="text-xs -mt-3 font-semibold text-gray-800">
                    {cvData.email}
                  </h2>
                </div>
                <div className="mt-3 flex items-start space-x-2">
                  <div className="h-6 w-6 bg-customBlue-light flex  items-center justify-center shrink-0">
                    <Icon icon="mdi:location" className="text-white  " />
                  </div>
                  <h2 className="text-xs flex-1 -mt-3 font-semibold text-gray-800 break-words">
                    {cvData.currentAddress}
                  </h2>
                </div>
              </div>

              {/* perspnality */}
              <div className="flex flex-col ml-4 mt-2 justify-start  ">
                <div className="flex items-center ml-1  space-x-2 justify-start">
                  <div className="h-3 w-3 bg-customBlue-light"></div>
                  <h1 className="font-bold -mt-4">PERSONALITY</h1>
                </div>
                <ul className=" text-sm font-semibold text-gray-800 ml-1">
                  <li>
                    <pre>• Age : {cvData.age} years old</pre>
                  </li>
                  <li>
                    <pre>• Gender : {cvData.gender}</pre>
                  </li>
                  <li>
                    <pre>• Date of Birth : {cvData.dateOfBirth}</pre>
                  </li>
                  <li>
                    <pre className="break-words w-full whitespace-normal">
                      • Place of Birth: {cvData.placeOfBirth}
                    </pre>
                  </li>
                </ul>
              </div>

              {/* hard skill */}
              <div className="flex flex-col ml-4 mt-5 justify-start ">
                <div className="flex items-center ml-1  space-x-2 justify-start">
                  <div className="h-3 w-3 bg-customBlue-light"></div>
                  <h1 className="font-bold -mt-4">HARD SKILLS</h1>
                </div>
                <div className="font-semibold ml-1 ">
                  {cvData.hardSkills && cvData.hardSkills.length > 0 ? (
                    <ul className="text-sm font-semibold text-gray-800 ">
                      {cvData.hardSkills.map((hardSkill, index) => (
                        <li key={index}>
                          <span className="text-xl mr-2 mt-1">•</span>
                          {hardSkill}
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
                <div className="font-semibold ml-1 " >
                {cvData.softSkills && cvData.softSkills.length > 0 ? (
                  <ul className="text-sm font-semibold text-gray-800 ">
                    {cvData.softSkills.map((softSkill, index) => (
                      <li key={index}> <span className="text-xl mr-2 mt-1">•</span> {softSkill}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-700">Your Soft Skill</p>
                )}
              </div>
              </div>
              
            </div>
          </div>

          {/* <div className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Educations
            </h3>
            {cvData.educations && cvData.educations.length > 0 ? (
              <ul className="list-disc pl-10 text-gray-700">
                {cvData.educations.map((education, index) => (
                  <li key={index}>{education}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-700">Your Education</p>
            )}
          </div>

          

          

          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Experiences
            </h3>
            {cvData.experiences && cvData.experiences.length > 0 ? (
              <ul className="list-disc pl-10 text-gray-700">
                {cvData.experiences.map((experience, index) => (
                  <li key={index}>{experience}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-700">Your Experiences</p>
            )}
          </div>

          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Language
            </h3>
            {cvData.languages && cvData.languages.length > 0 ? (
              <ul className="list-disc pl-10 text-gray-700">
                {cvData.languages.map((language, index) => (
                  <li key={index}>{language}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-700">Your Languages</p>
            )}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default FormCVPage;
