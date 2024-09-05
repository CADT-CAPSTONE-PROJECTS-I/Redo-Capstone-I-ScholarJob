import {
  React,
  Icon,
} from "../import/all_import.jsx";
import PropTypes from 'prop-types';

const PopUpGen = ({ isOpen, title, message, onClose, color, icon, iconColor}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-3 w-[40vw]">
        <div className="bg-white p-6 rounded-lg border-2 border-customTeal  flex justify-center flex-col items-center">
          {icon && <Icon icon={icon} className={`mb-4 size-20 ${iconColor}`} />}
          <h2 className={`text-2xl font-bold mb-4 ${color}`}>{title}</h2>
          <p className="mb-4 text-gray-700">{message}</p>
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

PopUpGen.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  iconColor: PropTypes.string.isRequired,
  icon: PropTypes.string, 
};


export default PopUpGen;
