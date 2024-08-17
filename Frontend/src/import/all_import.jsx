
//import of all installation
export { default as React } from "react";
export { useNavigate, BrowserRouter as Router, Route, Routes, RouterProvider, createBrowserRouter, Link, NavLink } from 'react-router-dom';
export { Icon } from "@iconify/react";
export { appStore } from "../stores/appStore.js";

//import of all components
export { default as Register } from '../authenthication/register';
export { default as LoginPage } from '../authenthication/login';
export { default as Navbar } from '../footerAndHeader/NavBar.jsx';
export { default as HomePage } from "../components/homePage.jsx";
export { default as CareerPage } from "../components/careerPage.jsx";
export { default as ScholarshipPage } from "../components/scholarshipPage.jsx";
export { default as AboutUsPage } from "../components/aboutUsPage.jsx";
export { default as CVGeneratePage } from "../components/cvGeneratePage.jsx";

//import of all icon and image
export { default as FacebookIcon } from '../assets/icon/facebook_icon.jpg';
export { default as InstargramIcon } from '../assets/icon/instargram_icon.png';
export { default as GoogleIcon } from '../assets/icon/google_icon.png';
export { default as LinkedInIcon } from '../assets/icon/linkedIn_icon.png';
export { default as ScholarJobLogoGreen } from '../assets/logo/scholarJob_logo_green.png';
export { default as ScholarJobLogoWhite } from '../assets/logo/scholarjob_logo_white.png';
export { default as ManTable } from '../assets/image/man_table.png';

//import of all style css
import "../styles/authenthication_style.css";
import "../styles/navBar_style.css";

