import {
  React,
  useNavigate,
  Icon,
  FacebookIcon,
  InstargramIcon,
  GoogleIcon,
  LinkedInIcon,
  appStore,
  registerClient,
  Navbar,
  Footer,
} from "../import/all_import.jsx";

const Register = () => {
  const navigate = useNavigate();
  const {
    changePassword,
    setChangePassword,
    formData,
    setFormData,
    message,
    setMessage,
    errors,
    setErrors,
  } = appStore();

  function togglePasswordVisibility() {
    const passwordInput = document.getElementById("password");

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      setChangePassword(true);
    } else {
      passwordInput.type = "password";
      setChangePassword(false);
    }
  }

  const validatePassword = (password) => {
    const passwordRegex = /^[A-Z][a-zA-Z0-9]{7,}$/;
    const hasNumber = /\d/;

    if (!passwordRegex.test(password)) {
      return "Password must be at least 8 letters long and start with a capital letter.";
    } else if (!hasNumber.test(password)) {
      return "Password must contain at least one number.";
    } else {
      return "";
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return "Please enter a valid email address.";
    } else {
      return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "password") {
      const passwordError = validatePassword(value);
      if (passwordError) {
        setErrors({ ...errors, password: passwordError });
      } else {
        setErrors({ ...errors, password: null });
      }
    }


    if (name === "email") {
      const emailError = validateEmail(value);
      if (emailError) {
        setErrors({ ...errors, email: emailError });
      } else {
        setErrors({ ...errors, email: null });
      }
    }


  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    setErrors(null);

    const passwordError = validatePassword(formData.password);
    const emailError = validateEmail(formData.email);
    if (passwordError || emailError) {
      setErrors({ password: passwordError, email: emailError });
      return;
    }

    try {
      const response = await registerClient(formData);
      setMessage(response.message || "Registration successful!");
      navigate("/login");
    } catch (error) {
      setErrors(
        error.errors || { message: "Registration failed. Please try again." }
      );
    }
  };

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <div className="min-h-screen mt-8 flex items-center justify-center bg-gray-200">
        <div className="bg-white shadow-lg rounded-lg flex">
          <div className="w-1/2 min-h-[500px] bg-gradient-to-tl from-customTeal-light/50 to-customTeal-dark/80 text-white p-8 rounded-l-lg rounded-r-3xl flex flex-col justify-center items-center">
            <h2 className="text-2xl font-bold mb-4">Welcome To ScholarJob!</h2>
            <p className="mb-8">
              To keep connected with us please sign up with your personal
              information.
            </p>
            <p className="mb-2">Sign in, If you already have an account!</p>
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="bg-customTeal-dark text-white py-3 px-14 border bg-transparent text-sm rounded-full hover:bg-customTeal-dark"
            >
              SIGN IN
            </button>
          </div>
          <div className="w-2/3 p-8 flex flex-col justify-center items-center">
            <h2 className="text-3xl font-bold text-customTeal">
              Create Account
            </h2>
            <div className="w-1/6">
              <div className="border-t border-2 rounded-full border-customTeal my-4"></div>
            </div>
            <form
              onSubmit={handleSubmit}
              className="w-full flex flex-col items-center"
            >
              <div className="input-group relative w-4/5 mt-5 mb-4">
                <Icon
                  icon={"clarity:user-line"}
                  className="absolute top-1 left-1 text-gray-400"
                />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="input-group__input w-full pl-7 border-b-2 border-gray-300 focus:outline-none focus:border-customTeal transition duration-200"
                  required
                />
                <label
                  htmlFor="name"
                  className="input-group__label block text-gray-400 text-sm"
                >
                  Name
                </label>
              </div>

              <div className="input-group relative w-4/5 mt-5 mb-4">
                <Icon
                  icon={"mdi-light:email"}
                  className="absolute top-1 left-1 text-gray-400"
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input-group__input w-full pl-7 border-b-2 border-gray-300 focus:outline-none focus:border-customTeal transition duration-200"
                  required
                />
                <label
                  htmlFor="email"
                  className="input-group__label block text-gray-400 text-sm"
                >
                  Email
                </label>
              </div>

              <div className="input-group relative w-4/5 mt-5 mb-4">
                <Icon
                  icon={"arcticons:password"}
                  className="absolute top-1 left-1"
                />
                <Icon
                  icon={
                    changePassword
                      ? "streamline:visible"
                      : "streamline:invisible-1"
                  }
                  className="absolute text-gray-400 top-1 right-2 cursor-pointer"
                  onClick={togglePasswordVisibility}
                />
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="input-group__input w-full pl-7 border-b-2 border-gray-300 focus:outline-none focus:border-customTeal transition duration-200"
                  required
                />
                <label
                  htmlFor="password"
                  className="input-group__label block text-gray-400 text-sm"
                >
                  Password
                </label>
              </div>

              <button
                type="submit"
                className="bg-customTeal text-white mt-2 py-3 text-sm px-14 rounded-full hover:bg-customTeal-dark"
              >
                SIGN UP
              </button>
            </form>

            {message && <p className="text-green-500 absolute bottom-1/4 text-xs">{message}</p>}
            {errors && (
              <div className="text-red-500 text-xs absolute bottom-1/4">
                {Object.keys(errors).map((key) => (
                  <p key={key}>{errors[key]}</p>
                ))}
              </div>
            )}

            <div className="flex items-center w-4/5 m-4 pt-6">
              <div className="flex-grow border-t border-b w-4/5"></div>
              <h1 className="text-base mx-4">OR</h1>
              <div className="flex-grow border-t border-b w-4/5"></div>
            </div>

            <div className="flex justify-center space-x-4 mb-8">
            <button className="bg-white tooltip transform transition-transform duration-300 hover:scale-110">
                <img
                  src={FacebookIcon}
                  alt="Facebook"
                  className="rounded-full border border-blue-500 w-8 h-8"
                />
                <div className="tooltiptext">Facebook</div>
              </button>
              <button className="bg-white tooltip transform transition-transform duration-300 hover:scale-110">
                <img
                  src={GoogleIcon}
                  alt="Google"
                  className="p-2 rounded-full border bg-gray-5 0 border--200 w-9 h-9"
                />
                <div className="tooltiptext">Google</div>
              </button>
              <button className="bg-white tooltip transform transition-transform duration-300 hover:scale-110">
                <img
                  src={InstargramIcon}
                  alt="Instagram"
                  className="rounded-full border border-red-200 w-9 h-9"
                />
                <div className="tooltiptext">Instargram</div>
              </button>
              <button className="bg-white tooltip transform transition-transform duration-300 hover:scale-110">
                <img
                  src={LinkedInIcon}
                  alt="LinkedIn"
                  className="rounded-full border border-blue-300 w-9 h-9"
                />
                <div className="tooltiptext">LinkedIn</div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Register;
