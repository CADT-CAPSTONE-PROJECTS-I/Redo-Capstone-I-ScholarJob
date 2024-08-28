import {
  useNavigate,
  React,
  ScholarJobLogoGreen,
  Link,
  NavLink,
  appStore,
  Icon,
  useEffect,
  useRef,
} from "../import/all_import.jsx";

const Navbar = () => {
  const navigate = useNavigate();
  const { message, setMessage, isDropdownOpen, setIsDropdownOpen } = appStore();

  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // const handleProfileClick = () => {
  //   navigate("/view");
  //   console.log("Hiiii")

  // };

  return (
    <nav className="bg-white shadow-md fixed w-full z-20 top-0  start-0 border-b border-gray-200 rounded-b-3xl">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-3  px-16">
        <Link
          to="/"
          className="flex items-center space-x-1 rtl:space-x-reverse "
          ref={dropdownRef}
        >
          <img
            src={ScholarJobLogoGreen}
            className="h-10"
            alt="ScholarJob Logo"
          />
          <span className="font-bebas self-center text-3xl mt-1 whitespace-nowrap font-bold bg-gradient-to-t from-customTeal/50 to-customTeal-dark/80 bg-clip-text text-transparent">
            SCHOLARJOB
          </span>
        </Link>
        {message === "Login successful!" ? (
          <div className=" flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button onClick={toggleDropdown} className="focus:outline-none">
              <Icon icon="ph:user-circle-light" className="w-10 h-10" />
            </button>
            {isDropdownOpen && (
              <div className="absolute right-20 mt-10 w-48 bg-white shadow-lg rounded-lg border border-gray-200 z-10">
                <div>
                  <div className="px-4 py-2 hover:bg-customTeal hover:text-white cursor-pointer">
                    <Link 
                      to="/view"
                      className="px-4 py-2 hover:bg-customTeal hover:text-white cursor-pointer"
                    >
                      Profile
                    </Link>
                  </div>
                  <Link className="px-4 py-2 hover:bg-customTeal hover:text-white cursor-pointer">
                    Logout
                  </Link>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="text-white bg-customTeal hover:bg-customTeal-dark  focus:ring-2 focus:outline-none focus:ring-customTeal-dark font-medium rounded-md text-sm px-4 py-2 text-center mr-2"
              onClick={() => {
                navigate("/login");
              }}
            >
              Log In
            </button>
            <button
              type="button"
              className="text-customTeal bg-white hover:text-white border border-customTeal hover:bg-customTeal  focus:ring-2 focus:outline-none focus:ring-customTeal-dark font-medium rounded-md text-sm px-4 py-2 text-center "
              onClick={() => {
                navigate("/register");
              }}
            >
              Sign Up
            </button>
          </div>
        )}

        <div
          className=" justify-between hidden w-full md:flex md:w-auto md:order-1 "
          id="navbar-sticky "
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 px-2 text-customTeal bg-transparent nav-link active"
                    : "block py-2 px-2 text-black bg-transparent hover:text-customTeal"
                }
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/career"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 px-2 text-customTeal bg-transparent nav-link active"
                    : "block py-2 px-2 text-black bg-transparent hover:text-customTeal"
                }
              >
                Career
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/scholarship"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 px-2 text-customTeal bg-transparent nav-link active"
                    : "block py-2 px-2 text-black bg-transparent hover:text-customTeal"
                }
              >
                Scholarship
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/generate"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 px-2 text-customTeal bg-transparent nav-link active       "
                    : "block py-2 px-2 text-black bg-transparent hover:text-customTeal"
                }
              >
                CV Generation
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 px-2 text-customTeal bg-transparent nav-link active"
                    : "block py-2 px-2 text-black bg-transparent hover:text-customTeal"
                }
              >
                About Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
