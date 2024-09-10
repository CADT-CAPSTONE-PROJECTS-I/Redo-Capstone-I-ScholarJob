import {
  React,
  useNavigate,
  Icon,
  FacebookIcon,
  InstargramIcon,
  GoogleIcon,
  LinkedInIcon,
  appStore,
  loginClient,
  Navbar,
  Footer,
} from "../import/all_import.jsx";
// import { loginClient } from '../API/authentication_api.jsx';

const LoginPage = () => {
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    setErrors(null);

    try {
      const response = await loginClient(formData);
      setMessage("Login successful!");
      navigate("/");
    } catch (error) {
      setErrors(
        error.errors || {
          message: "Login failed. Please check your credentials.",
        }
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
          <div className="w-2/3 p-8 flex flex-col justify-center items-center">
            <h2 className="text-3xl font-bold text-customTeal">Log In</h2>
            <div className="w-1/6 mb-4">
              <div className="border-t border-2 rounded-full border-customTeal my-4"></div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="w-full flex flex-col items-center"
            >
              <div className="input-group relative w-4/5 mb-4">
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
                <p className="text-xs text-blue-400 mt-1 right-1 absolute cursor-pointer">
                  Forgot password?
                </p>
              </div>

              <button
                type="submit"
                className="bg-customTeal text-white mt-4 py-3 text-sm px-14 rounded-full hover:bg-customTeal-dark"
              >
                SIGN IN
              </button>
            </form>

            {message && <p className="text-green-500 absolute bottom-44 text-xs">{message}</p>}
            {errors && (
              <div className="text-red-500 text-xs absolute bottom-44">
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
              <button className="bg-white">
                <img
                  src={FacebookIcon}
                  alt="Facebook"
                  className="rounded-full border border-blue-500 w-8 h-8"
                />
              </button>
              <button className="bg-white">
                <img
                  src={GoogleIcon}
                  alt="Google"
                  className="p-2 rounded-full border bg-gray-5 0 border--200 w-9 h-9"
                />
              </button>
              <button className="bg-white">
                <img
                  src={InstargramIcon}
                  alt="Instagram"
                  className="rounded-full border border-red-200 w-9 h-9"
                />
              </button>
              <button className="bg-white">
                <img
                  src={LinkedInIcon}
                  alt="LinkedIn"
                  className="rounded-full border border-blue-300 w-9 h-9"
                />
              </button>
            </div>
          </div>
          <div className="w-1/2 min-h-[500px] bg-gradient-to-tr from-customTeal-light/50 to-customTeal-dark/80 text-white p-8 rounded-r-lg rounded-l-3xl flex flex-col justify-center items-center">
            <h2 className="text-3xl font-bold mb-4">Welcome Back!</h2>
            <p className="mb-8">
              To keep connected with us please sign in with your personal
              information.
            </p>
            <p className="mb-2">Sign up now, If you are not a member!</p>
            <button
              type="button"
              onClick={() => navigate("/register")}
              className="bg-customTeal-dark text-white py-3 px-14 border bg-transparent text-sm rounded-full hover:bg-customTeal-dark"
            >
              SIGN UP
            </button>
          </div>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default LoginPage;
