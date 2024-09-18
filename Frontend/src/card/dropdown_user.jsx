import {
  useNavigate,
  React,
  appStore,
  UserIcon,
  useRef,
  useEffect,
  Icon,
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
        className="flex items-center hover:text-customTeal-dark"
      >
        <Icon icon="gridicons:dropdown" className="size-6 " />
        <div className="flex items-center space-x-2 focus:outline-none border-2 rounded-full border-customTeal hover:border-customTeal-dark ">
          <img src={UserIcon} alt="User" className="w-8 h-8 rounded-full" />
        </div>
      </button>

      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 border w-48 bg-white rounded-md shadow-lg py-2">
          <button
            onClick={handleProfileClick}
            className="flex items-center space-x-2 w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-customTeal hover:text-white"
          >
            <Icon icon="healthicons:ui-user-profile" className="size-6" />
            <span>Profile</span>
          </button>
          <div className="flex justify-center px-4">
            <div className="flex-grow border"></div>
          </div>
          <button
            onClick={handleLogoutClick}
            className="flex items-center space-x-2 w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-customTeal hover:text-white"
          >
            <Icon icon="solar:logout-broken" className="size-6" />
            <span>Log Out</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
