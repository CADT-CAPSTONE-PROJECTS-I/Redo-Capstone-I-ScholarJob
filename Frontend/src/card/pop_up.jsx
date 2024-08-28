import {
    React,
    appStore,
    useNavigate,
  } from "../import/all_import.jsx";

const MessagePopup = ({MessagePopUp, ImagePopup}) => {
  const navigate = useNavigate();
  const { isPopupOpen, setIsPopupOpen, message } = appStore();

    const closePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    }

  if (!isPopupOpen) return null;

  const toLogin = () => {
    navigate('/login'),
    setIsPopupOpen(!isPopupOpen);
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-4 rounded-xl shadow-lg max-w-lg w-full h-2/4 ">
        <div className="flex flex-col border-2 border-customTeal rounded-xl justify-center flex items-center min-h-full space-y-2">
        <img src={ImagePopup} className="size-32" />
        <p className="text-gray-800 text-xl font-bold px-4">{MessagePopUp}</p>
        <div className="flex space-x-4 w-full px-4">
        <button
          onClick={closePopup}
          className=" w-1/2 text-center bg-red-500 hover:bg-red-600 text-white rounded-lg"
        >
          Close
        </button>
        
        <button
          onClick={toLogin}
          className=" w-1/2 text-center bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg"
        >
          Log in
        </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default MessagePopup;
