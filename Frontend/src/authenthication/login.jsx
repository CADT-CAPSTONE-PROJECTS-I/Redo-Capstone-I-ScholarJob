import { React, useNavigate, Icon, FacebookIcon, InstargramIcon, GoogleIcon, LinkedInIcon, appStore } from '../import/all_import.jsx';

const Register = () => {
  const navigate = useNavigate();
  const {changePassword, setChangePassword} = appStore();

  function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');

    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      setChangePassword(true);
    } else {
      passwordInput.type = 'password';
      setChangePassword(false);
    }
  }
    
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white shadow-lg rounded-lg flex">
        <div className="w-2/3 p-8 flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold text-customTeal">Log In</h2>
          <div className="w-1/6 mb-4">
            <div className="border-t border-2 rounded-full border-customTeal my-4"></div>
          </div>

          <div className="input-group relative w-4/5 mb-4">
            <Icon
              icon={"mdi-light:email"}
              className="absolute top-1 left-1 text-gray-400"
            />
            <input
              type="text"
              id="email"
              className="input-group__input w-full pl-7 border-b-2 border-gray-300 focus:outline-none focus:border-customTeal transition duration-200"
              required
            />
            <label
              for="email"
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
              icon={changePassword ? "streamline:visible" : "streamline:invisible-1"}
              className="absolute text-gray-400 top-1 right-2 cursor-pointer"
              onClick={togglePasswordVisibility}
            />
            <input
              type="password"
              id="password"
              className="input-group__input w-full pl-7 border-b-2 border-gray-300 focus:outline-none focus:border-customTeal transition duration-200"
              required
            />
            <label
              for="password"
              className="input-group__label block text-gray-400  text-sm"
            >
              Password
            </label>
            <p className='text-xs text-blue-400 mt-1 right-1 absolute cursor-pointer'>Forgot password?</p>
          </div>

          <button 
          className="bg-customTeal text-white mt-4 py-3 text-sm px-14 rounded-full hover:bg-customTeal-dark">
            SIGN IN
          </button>
          <div className="flex items-center w-4/5 m-4">
            <div className="flex-grow border-t border-b w-4/5"></div>
            <h1 className="text-base  mx-4">OR</h1>
            <div className="flex-grow border-t border-b w-4/5"></div>
          </div>

          <div className="flex justify-center space-x-4 mb-8">
            <button className="bg-white">
              <img src={FacebookIcon} alt="image"  className="rounded-full border border-blue-500 w-8 h-8"/>
            </button>
            <button className="bg-white ">
              <img src={GoogleIcon} alt="image"  className="p-2 rounded-full border bg-gray-5 0 border--200 w-9 h-9"/>
            </button>
            <button className="bg-white">
              <img src={InstargramIcon} alt="image"  className="rounded-full border border-red-200 w-9 h-9"/>
            </button>
            <button className="bg-white">
              <img src={LinkedInIcon} alt="image"  className="rounded-full border border-blue-300 w-9 h-9"/>
            </button>
          </div>
        </div>
        <div className="w-1/2 min-h-[500px] bg-gradient-to-tr from-customTeal-light/50 to-customTeal-dark/80 text-white p-8  rounded-r-lg rounded-l-3xl flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold mb-4">Welcome Back!</h2>
          <p className="mb-8">
            To keep connected with us please sign in with your personal
            infomation.
          </p>
          <p className="mb-2">Sign up now, If you are not a member!</p>
          <button 
           type="bottom"
           onClick={()=>{
             navigate('/register');
           }}
          className="bg-customTeal-dark text-white py-3 px-14 border bg-transparent text-sm rounded-full hover:bg-customTeal-dark ">
            SIGN UP
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
