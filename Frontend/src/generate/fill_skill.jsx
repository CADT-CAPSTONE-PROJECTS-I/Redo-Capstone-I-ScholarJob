import {
  React,
  appStore,
  Icon,
  useEffect,
  useState,
} from "../import/all_import.jsx";

const FillSkill = () => {
  const { cvData, setCvData } = appStore();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCvData({ [name]: value });
  };

  const addFill = (cvData, setCvData, name) => {
    const newItems = [...(cvData[name] || []), ""];
    setCvData({ [name]: newItems });
  };

  const removeFill = (index, name, cvData, setCvData) => {
    const newItems = cvData[name].filter((_, i) => i !== index);
    setCvData({ [name]: newItems });
  };

  const handleFillChange = (index, value, name, cvData, setCvData) => {
    const newItems = [...(cvData[name] || [])];
    newItems[index] = value;
    setCvData({ [name]: newItems });
  };

  const mergeArrayToString = (array) => {
    return array.join(", ");
  };

  useEffect(() => {
    const handleMergeAndSave = () => {
      const mergedData = {
        educations: mergeArrayToString(cvData.educations || []),
        hardSkills: mergeArrayToString(cvData.hardSkills || []),
        softSkills: mergeArrayToString(cvData.softSkills || []),
        experiences: mergeArrayToString(cvData.experiences || []),
        languages: mergeArrayToString(cvData.languages || []),
      };
      if (
        cvData.education !== mergedData.educations ||
        cvData.hard_skill !== mergedData.hardSkills ||
        cvData.soft_skill !== mergedData.softSkills ||
        cvData.experience !== mergedData.experiences ||
        cvData.language !== mergedData.languages
      ) {
        setCvData({
          ...cvData,
          education: mergedData.educations,
          hard_skill: mergedData.hardSkills,
          soft_skill: mergedData.softSkills,
          experience: mergedData.experiences,
          language: mergedData.languages,
        });
      }
    };

    handleMergeAndSave();
  }, [cvData]);

  const stringToArray = (str) => {
    if (typeof str !== "string") {
      console.error("Input is not a string:", str);
      return [];
    }
    return str.split(", ").map((item) => item.trim());
  };

  const deepEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);

  const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    }, [value, delay]);

    return debouncedValue;
  };

  const debouncedEducation = useDebounce(cvData.education, 100000);
  const debouncedHardSkill = useDebounce(cvData.hard_skill, 100000);
  const debouncedSoftSkill = useDebounce(cvData.soft_skill, 100000);
  const debouncedExperience = useDebounce(cvData.experience, 100000);
  const debouncedLanguage = useDebounce(cvData.language, 100000);

  useEffect(() => {
    const handleStringAndSave = () => {
      const stringData = {
        education: stringToArray(debouncedEducation || ""),
        hard_skill: stringToArray(debouncedHardSkill || ""),
        soft_skill: stringToArray(debouncedSoftSkill || ""),
        experience: stringToArray(debouncedExperience || ""),
        language: stringToArray(debouncedLanguage || ""),
      };

      if (
        !deepEqual(cvData.educations, stringData.education) ||
        !deepEqual(cvData.hardSkills, stringData.hard_skill) ||
        !deepEqual(cvData.softSkills, stringData.soft_skill) ||
        !deepEqual(cvData.experiences, stringData.experience) ||
        !deepEqual(cvData.languages, stringData.language)
      ) {
        setCvData({
          ...cvData,
          educations: stringData.education,
          hardSkills: stringData.hard_skill,
          softSkills: stringData.soft_skill,
          experiences: stringData.experience,
          languages: stringData.language,
        });
      }
    };
    if (
      (debouncedEducation && cvData.educations !== undefined) ||
      (debouncedHardSkill && cvData.hardSkills !== undefined) ||
      (debouncedSoftSkill && cvData.softSkills !== undefined) ||
      (debouncedExperience && cvData.experiences !== undefined) ||
      (debouncedLanguage && cvData.languages !== undefined)
    ) {
      handleStringAndSave();
    }
  }, [
    debouncedEducation,
    debouncedHardSkill,
    debouncedSoftSkill,
    debouncedExperience,
    debouncedLanguage,
    setCvData,
  ]);

  useEffect(() => {
    console.log("this is cv data from fill_skill", cvData);
  }, [cvData]);

  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-xl shadow-gray-300 w-[70vw]  z-10">
      <form className="">
        <div className="flex flex-col">
          <h1 className="text-lg font-bold">Establisheed Fact that a reader</h1>
          <p className="w-96">
            Includes your skill and education at least one way for employers to
            reach you.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h2 className="font-bold text-md m-4">YOUR SKILL</h2>
        </div>

        <div className="mt-3  grid grid-cols-1 ">
          {/* education */}
          <div className="mb-4 text-sm font-bold">Your Education</div>
          {(cvData.educations || []).map((education, index) => (
            <div key={index} className="input-group relative w-full my-2 ">
              <Icon
                icon={"fluent-mdl2:education"}
                className="absolute top-1 left-1 text-gray-400"
              />
              <input
                type="text"
                value={education}
                onChange={(e) =>
                  handleFillChange(
                    index,
                    e.target.value,
                    "educations",
                    cvData,
                    setCvData
                  )
                }
                className="input-group__input w-full pl-7 border-b-2 border-gray-300 focus:outline-none focus:border-customTeal transition duration-200"
                style={{ whiteSpace: "normal" }}
              />
              <label
                htmlFor="education"
                className="input-group__label block text-gray-400  text-sm"
              >
                {`Education ${index + 1}`}
              </label>
              <div className="flex justify-end mt-1 space-x-1">
                {index !== 0 ? (
                  <button
                    type="button"
                    onClick={() =>
                      removeFill(index, "educations", cvData, setCvData)
                    }
                    className="p-3 bg-transperent tooltip border text-red-500 hover:text-white  border-red-500 rounded-full hover:bg-red-500 transition duration-200"
                  >
                    <Icon icon={"fluent:delete-24-regular"} />
                    <div class="tooltiptext">Delete line</div>
                  </button>
                ) : (
                  ""
                )}
                {index === 0 ? (
                  <button
                    type="button"
                    onClick={() => addFill(cvData, setCvData, "educations")}
                    className="p-3 bg-transperent tooltip border text-customTeal hover:text-white  border-customTeal rounded-full hover:bg-customTeal transition duration-200"
                  >
                    <Icon icon={"mingcute:add-line"} />
                    <div className="tooltiptext">Add more line</div>
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>
          ))}

          {/* hardSkill */}
          <div className="mb-4 text-sm font-bold">Your Hard Skills</div>
          {(cvData.hardSkills || []).map((hardSkill, index) => (
            <div key={index} className="input-group relative w-full my-2 ">
              <Icon
                icon={"fluent-mdl2:work"}
                className="absolute top-1 left-1 text-gray-400"
              />
              <input
                type="text"
                value={hardSkill}
                onChange={(e) =>
                  handleFillChange(
                    index,
                    e.target.value,
                    "hardSkills",
                    cvData,
                    setCvData
                  )
                }
                className="input-group__input w-full pl-7 border-b-2 border-gray-300 focus:outline-none focus:border-customTeal transition duration-200"
              />
              <label
                htmlFor="hardSkills"
                className="input-group__label block text-gray-400  text-sm"
              >
                {`Hard Skill ${index + 1}`}
              </label>
              <div className="flex justify-end mt-1 space-x-1">
                {index !== 0 ? (
                  <button
                    type="button"
                    onClick={() =>
                      removeFill(index, "hardSkills", cvData, setCvData)
                    }
                    className="p-3 bg-transperent tooltip border text-red-500 hover:text-white  border-red-500 rounded-full hover:bg-red-500 transition duration-200"
                  >
                    <Icon icon={"fluent:delete-24-regular"} />
                    <div class="tooltiptext">Delete line</div>
                  </button>
                ) : (
                  ""
                )}
                {index === 0 ? (
                  <button
                    type="button"
                    onClick={() => addFill(cvData, setCvData, "hardSkills")}
                    className="p-3 bg-transperent tooltip border text-customTeal hover:text-white  border-customTeal rounded-full hover:bg-customTeal transition duration-200"
                  >
                    <Icon icon={"mingcute:add-line"} />
                    <div class="tooltiptext">Add more line</div>
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>
          ))}

          {/* softSkill */}
          <div className="mb-4 text-sm font-bold">Your Soft Skills</div>
          {(cvData.softSkills || []).map((softSkill, index) => (
            <div key={index} className="input-group relative w-full my-2 ">
              <Icon
                icon={"material-symbols-light:mindfulness-outline-rounded"}
                className="absolute top-1 left-1 text-gray-400"
              />
              <input
                type="text"
                value={softSkill}
                onChange={(e) =>
                  handleFillChange(
                    index,
                    e.target.value,
                    "softSkills",
                    cvData,
                    setCvData
                  )
                }
                className="input-group__input w-full pl-7 border-b-2 border-gray-300 focus:outline-none focus:border-customTeal transition duration-200"
              />
              <label
                htmlFor="softSkill"
                className="input-group__label block text-gray-400  text-sm"
              >
                {`Soft Skills ${index + 1}`}
              </label>
              <div className="flex justify-end mt-1 space-x-1">
                {index !== 0 ? (
                  <button
                    type="button"
                    onClick={() =>
                      removeFill(index, "softSkills", cvData, setCvData)
                    }
                    className="p-3 bg-transperent tooltip border text-red-500 hover:text-white  border-red-500 rounded-full hover:bg-red-500 transition duration-200"
                  >
                    <Icon icon={"fluent:delete-24-regular"} />
                    <div class="tooltiptext">Delete line</div>
                  </button>
                ) : (
                  ""
                )}
                {index === 0 ? (
                  <button
                    type="button"
                    onClick={() => addFill(cvData, setCvData, "softSkills")}
                    className="p-3 bg-transperent tooltip border text-customTeal hover:text-white  border-customTeal rounded-full hover:bg-customTeal transition duration-200"
                  >
                    <Icon icon={"mingcute:add-line"} />
                    <div class="tooltiptext">Add more line</div>
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>
          ))}

          {/* experience */}
          <div className="mb-4 text-sm font-bold">Your Experiences</div>
          {(cvData.experiences || []).map((experience, index) => (
            <div key={index} className="input-group relative w-full my-2 ">
              <Icon
                icon={"material-symbols-light:work-history-outline"}
                className="absolute top-1 left-1 text-gray-400"
              />
              <input
                type="text"
                value={experience}
                onChange={(e) =>
                  handleFillChange(
                    index,
                    e.target.value,
                    "experiences",
                    cvData,
                    setCvData
                  )
                }
                className="input-group__input w-full pl-7 border-b-2 border-gray-300 focus:outline-none focus:border-customTeal transition duration-200"
              />
              <label
                htmlFor="experience"
                className="input-group__label block text-gray-400  text-sm"
              >
                {`Experience ${index + 1}`}
              </label>
              <div className="flex justify-end mt-1 space-x-1">
                {index !== 0 ? (
                  <button
                    type="button"
                    onClick={() =>
                      removeFill(index, "experiences", cvData, setCvData)
                    }
                    className="p-3 bg-transperent tooltip border text-red-500 hover:text-white  border-red-500 rounded-full hover:bg-red-500 transition duration-200"
                  >
                    <Icon icon={"fluent:delete-24-regular"} />
                    <div class="tooltiptext">Delete line</div>
                  </button>
                ) : (
                  ""
                )}
                {index === 0 ? (
                  <button
                    type="button"
                    onClick={() => addFill(cvData, setCvData, "experiences")}
                    className="p-3 bg-transperent tooltip border text-customTeal hover:text-white  border-customTeal rounded-full hover:bg-customTeal transition duration-200"
                  >
                    <Icon icon={"mingcute:add-line"} />
                    <div class="tooltiptext">Add more line</div>
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>
          ))}

          {/* languege */}
          <div className="mb-4 text-sm font-bold">Your Languages</div>
          {(cvData.languages || []).map((language, index) => (
            <div key={index} className="input-group relative w-full my-2 ">
              <Icon
                icon={"material-symbols-light:language"}
                className="absolute top-1 left-1 text-gray-400"
              />
              <input
                type="text"
                value={language}
                onChange={(e) =>
                  handleFillChange(
                    index,
                    e.target.value,
                    "languages",
                    cvData,
                    setCvData
                  )
                }
                className="input-group__input w-full pl-7 border-b-2 border-gray-300 focus:outline-none focus:border-customTeal transition duration-200"
              />
              <label
                htmlFor="language"
                className="input-group__label block text-gray-400  text-sm"
              >
                {`Languages ${index + 1}`}
              </label>
              <div className="flex justify-end mt-1 space-x-1">
                {index !== 0 ? (
                  <button
                    type="button"
                    onClick={() =>
                      removeFill(index, "languages", cvData, setCvData)
                    }
                    className="p-3 bg-transperent tooltip border text-red-500 hover:text-white  border-red-500 rounded-full hover:bg-red-500 transition duration-200"
                  >
                    <Icon icon={"fluent:delete-24-regular"} />
                    <div class="tooltiptext">Delete line</div>
                  </button>
                ) : (
                  ""
                )}
                {index === 0 ? (
                  <button
                    type="button"
                    onClick={() => addFill(cvData, setCvData, "languages")}
                    className="p-3 bg-transperent tooltip border text-customTeal hover:text-white  border-customTeal rounded-full hover:bg-customTeal transition duration-200"
                  >
                    <Icon icon={"mingcute:add-line"} />
                    <div class="tooltiptext">Add more line</div>
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
};

export default FillSkill;
