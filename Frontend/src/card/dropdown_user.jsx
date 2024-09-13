import {
  useNavigate,
  React,
  appStore,
  UserIcon,
  useRef,
  useEffect,
} from "../import/all_import.jsx";

const UserDropdown = () => {
  const navigate = useNavigate();
  const { isDropdownOpen, setIsDropdownOpen, logout } = appStore();
  const dropdownRef = useRef(null); 

  const handleProfileClick = () => {
    navigate("/view");
  };

  const handleLogoutClick = () => {
    logout();
    navigate("/login");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false); // Close the dropdown
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef, setIsDropdownOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="flex items-center space-x-2 focus:outline-none border-2 rounded-full border-customTeal"
      >
        <img src={UserIcon} alt="User" className="w-8 h-8 rounded-full" />
      </button>

      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2">
          <button
            onClick={handleProfileClick}
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Profile
          </button>
          <button
            onClick={handleLogoutClick}
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Log Out
          </button>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
