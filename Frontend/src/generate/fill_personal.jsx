import { React, appStore, UploadImage, Icon } from "../import/all_import.jsx";

const FillPersonal = () => {
  const { cvData, setCvData, setSelectedImage, selectedImage } = appStore();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCvData({ [name]: value });
  };

  const handleImageChange = (e) => {
    setCvData({
      profilePicture: URL.createObjectURL(e.target.files[0]),
    });
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-xl w-[70vw] z-10">
      <form className="">
        <div className="flex flex-col">
          <h1 className="text-lg font-bold">Establisheed Fact that a reader</h1>
          <p1 className="w-96">
            Includes your first and last name at least one way for employers to
            reach you.
          </p1>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h2 className="font-bold text-md m-4">YOUR PERSONALITY</h2>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-y-1 gap-x-3">
          {/* name */}
          <div className="input-group relative w-full mt-5 mb-4">
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
          {/* position */}
          <div className="input-group relative w-full mt-5 mb-4">
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
          {/* age */}
          <div className="input-group relative w-full mt-5 mb-4">
            <Icon
              icon={"tabler:number"}
              className="absolute top-1 left-1 text-gray-400"
            />
            <input
              type="number"
              id="age"
              name="age"
              value={cvData.age}
              onChange={handleChange}
              className="input-group__input w-full pl-7 border-b-2 border-gray-300 focus:outline-none focus:border-customTeal transition duration-200"
              required
            />
            <label
              htmlForor="age"
              className="input-group__label block text-gray-400  text-sm"
            >
              Age
            </label>
          </div>
          {/* gender */}
          <div className="input-group relative w-full mt-5 mb-4">
            <Icon
              icon={"icons8:gender"}
              className="absolute top-1 left-1 text-gray-400"
            />
            <select
              id="gender"
              name="gender"
              value={cvData.gender}
              onChange={handleChange}
              className="input-group__input w-full pl-7 border-b-2 border-gray-300 focus:outline-none focus:border-customTeal transition duration-200"
              required
            >
              <option value=""></option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <label
              htmlFor="gender"
              className="input-group__label block text-gray-400  text-sm"
            >
              Gender
            </label>
          </div>
          {/* phone */}
          <div className="input-group relative w-full mt-5 mb-4">
            <Icon
              icon={"solar:phone-linear"}
              className="absolute top-1 left-1 text-gray-400"
            />
            <input
              type="phone"
              id="phone"
              name="phone"
              value={cvData.phone}
              onChange={handleChange}
              className="input-group__input w-full pl-7 border-b-2 border-gray-300 focus:outline-none focus:border-customTeal transition duration-200"
              required
            />
            <label
              htmlFor="phone"
              className="input-group__label block text-gray-400  text-sm"
            >
              Phone
            </label>
          </div>
          {/* email */}
          <div className="input-group relative w-full mt-5 mb-4">
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
          {/* date of birth */}
          <div className="input-group relative w-full mt-5 mb-4">
            <Icon
              icon={"iconoir:birthday-cake"}
              className="absolute top-1 left-1 text-gray-400"
            />
            <input
              type="text"
              id="dateOfBirth"
              name="dateOfBirth"
              value={cvData.dateOfBirth}
              onChange={handleChange}
              className="input-group__input w-full pl-7 border-b-2 border-gray-300 focus:outline-none focus:border-customTeal transition duration-200"
              required
            />
            <label
              htmlFor="dateOfBirth"
              className="input-group__label block text-gray-400  text-sm"
            >
              Date of Birth
            </label>
          </div>
          {/* aboutyou */}
          <div className="input-group relative w-full mt-5 mb-4">
            <Icon
              icon={"mdi:about-circle-outline"}
              className="absolute top-1 left-1 text-gray-400"
            />
            <input
              type="text"
              id="aboutMe"
              name="aboutMe"
              value={cvData.aboutMe}
              onChange={handleChange}
              className="input-group__input w-full pl-7 border-b-2 border-gray-300 focus:outline-none focus:border-customTeal transition duration-200"
              required
            />
            <label
              htmlFor="aboutMe"
              className="input-group__label block text-gray-400  text-sm"
            >
              About you
            </label>
          </div>
          {/* place of birth */}
          <div className="input-group relative w-full mt-5 mb-4">
            <Icon
              icon={"weui:location-outlined"}
              className="absolute top-1 left-1 text-gray-400"
            />
            <input
              type="text"
              id="placeOfBirth"
              name="placeOfBirth"
              value={cvData.placeOfBirth}
              onChange={handleChange}
              className="input-group__input w-full pl-7 border-b-2 border-gray-300 focus:outline-none focus:border-customTeal transition duration-200"
              required
            />
            <label
              htmlForor="placeOfBirth"
              className="input-group__label block text-gray-400  text-sm"
            >
              Place of Birth
            </label>
          </div>
          {/* current address */}
          <div className="input-group relative w-full mt-5 mb-4">
            <Icon
              icon={"weui:location-outlined"}
              className="absolute top-1 left-1 text-gray-400"
            />
            <input
              type="text"
              id="currentAddress"
              name="currentAddress"
              value={cvData.currentAddress}
              onChange={handleChange}
              className="input-group__input w-full pl-7 border-b-2 border-gray-300 focus:outline-none focus:border-customTeal transition duration-200"
              required
            />
            <label
              htmlForor="currentAddress"
              className="input-group__label block text-gray-400  text-sm"
            >
              Address
            </label>
          </div>
          <div>
            <label className="text-sm font-bold">
              Choose your profile photo
            </label>
            <div className="bg-white h-[40vh] w-[140vh] border-dashed rounded-md border-customTeal border-2 flex justify-center items-center mt-4">
              <form>
                <label htmlFor="fileInput" className=" crusor-pointer">
                  <div>
                    <div className="flex justify-center h-24">
                      {selectedImage ? (
                        <img src={selectedImage} alt="Selected" />
                      ) : (
                        <img src={UploadImage} alt="uploadimage" />
                      )}
                    </div>
                    <div className="text-BlueDarrk font-bold my-3 text-base ">
                      <h1 className="flex justify-center ">
                        {selectedImage
                          ? "Your photo has been uploaded"
                          : "Drag and Drop your photo file here"}
                      </h1>
                      {!selectedImage ? <div className="flex items-center ">
                        <div className="flex-grow border-t border-b w-1/2"></div>
                        <h1 className="text-sm mx-4">OR</h1>
                        <div className="flex-grow border-t border-b w-1/2"></div>
                      </div> : ""}
                    </div>
                    <div className="flex justify-center">
                      <label className="py-2 px-4 rounded-md text-white text-sm bg-customTeal cursor-pointer  hover:bg-customTeal-dark ">
                        {selectedImage ? "Change Image" : "Browse files"}
                        <input
                          type="file"
                          id="fileInput"
                          accept="image/*"
                          className="hidden"
                          onChange={handleImageChange}
                        />
                      </label>
                    </div>
                  </div>
                </label>
              </form>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FillPersonal;
