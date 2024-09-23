//import of all installation
export {
  default as React,
  useRef,
  useEffect,
  forwardRef,
  useState,
} from "react";
export {
  useNavigate,
  useLocation,
  BrowserRouter as Router,
  Route,
  Routes,
  RouterProvider,
  createBrowserRouter,
  Link,
  NavLink,
  useParams,
} from "react-router-dom";
export { Icon } from "@iconify/react";
export {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
export { appStore } from "../stores/appStore.js";
export { default as axios } from "axios";

//import of all components
export { default as Register } from "../authenthication/register";
export { default as LoginPage } from "../authenthication/login";
export { default as Navbar } from "../footerAndHeader/NavBar.jsx";
export { default as Footer } from "../footerAndHeader/footer.jsx";
export { default as HomePage } from "../components/homePage.jsx";
export { default as CareerPage } from "../components/careerPage.jsx";
export { default as ScholarshipPage } from "../components/scholarshipPage.jsx";
export { default as AboutUsPage } from "../components/aboutUsPage.jsx";
export { default as CVGeneratePage } from "../components/cvGeneratePage.jsx";
export { default as FillPersonal } from "../generate/fill_personal.jsx";
export { default as FillSkill } from "../generate/fill_skill.jsx";
export { default as FormCVPage } from "../generate/form_cv.jsx";
export { default as ScholarshipDetail } from "../scholarshipDetail/schorlarship_details.jsx";
export { default as DetailedJobPage } from "../careerDetail/detail_page.jsx";
export { default as EditProfile } from "../profile/edit_profile.jsx";
export { default as ViewProfile } from "../profile/view_profile.jsx";
export { default as UnderlineTab } from "../activeTabs_Organization/UnderlineTabs.jsx";
export { default as OrganizationDetail } from "../scholarshipDetail/organization_details.jsx";
export { default as AboutUsTab } from "../activeTabs_Organization/aboutUs_tab.jsx";
export { default as Offerings } from "../activeTabs_Organization/jobOfferings_tab.jsx";
export { default as ApplyModalScholarship } from "../scholarshipDetail/apply_modal_scho.jsx";
export { loginClient } from "../API/authentication_api.jsx";
export { registerClient } from "../API/authentication_api.jsx";
export { default as MessagePopup } from "../card/pop_up.jsx";
export { getJobDetail } from "../API/career_api.jsx";
export { cvClientApi } from "../API/cv_api.jsx";
export { default as PopUpGen } from "../card/pop_up_general.jsx";
export { default as ApplyModalJob } from "../careerDetail/apply_modal_job.jsx";
export { default as LoadingPage } from "../card/loading_page.jsx";
export { getDataCVApi } from "../API/cv_api.jsx";
export { default as UserDropdown } from "../card/dropdown_user.jsx";
export { default as SeeMoreJobPage } from "../careerDetail/seeMoreJobsPage.jsx";
export { default as SeeMoreScholarshipPage } from "../scholarshipDetail/seeMoreScholarshipsPage.jsx";
export { default as SeeMoreOrganizationPage } from "../scholarshipDetail/seeMoreOrganizationPage.jsx";
// export { getRelatedJobs } from "../API/relatedJobs_api.jsx";
// export { default as RelatedJobs } from "../CareerDetail/relatedJobs.jsx";
export { submitJobApplication } from "../API/career_api.jsx";
export { fetchTopJobsCareer } from "../API/career_api.jsx";
export { getOrganizationAddresses } from "../API/career_api.jsx";
export { getJobs } from "../API/career_api.jsx";
export { fetchTopUniversities } from "../API/homepage_api.jsx";
export { fetchTopJobsHomepage } from "../API/homepage_api.jsx";
export { fetchTopOrgs } from "../API/homepage_api.jsx";
export { fetchScholarships } from "../API/scholarship_api.jsx";
export { submitApplication } from "../API/scholarship_api.jsx";
export { fetchOrganizationDetails } from "../API/scholarship_api.jsx";
export { fetchScholarshipDetails } from "../API/scholarship_api.jsx";
export { fetchTopOrganizations } from "../API/scholarship_api.jsx";
export { fetchTopScholarships } from "../API/scholarship_api.jsx";
export { fetchAboutData } from "../API/aboutus_api.jsx";
export { fetchTeamMembers } from "../API/aboutus_api.jsx";

//import of all icon and image
export { default as FacebookIcon } from "../assets/icon/facebook_icon.jpg";
export { default as InstargramIcon } from "../assets/icon/instargram_icon.png";
export { default as GoogleIcon } from "../assets/icon/google_icon.png";
export { default as LinkedInIcon } from "../assets/icon/linkedIn_icon.png";
export { default as ScholarJobLogoGreen } from "../assets/logo/scholarJob_logo_green.png";
export { default as ScholarJobLogoWhite } from "../assets/logo/scholarjob_logo_white.png";
export { default as ManTable } from "../assets/image/man_table.png";
export { default as UploadImage } from "../assets/image/upload-image.png";
export { default as CadtLogo } from "../assets/image/cadtLogo_image.png";
export { default as HarvardUniverity } from "../assets/image/harvardUniversity_image.png";
export { default as GraduateImage } from "../assets/image/graduate_image.jpg";
export { default as WorkImage } from "../assets/image/work_image.jpg";
export { default as FindYourNeed } from "../assets/image/FindYourNeed_Image.png";
export { default as FlourishYourFuture } from "../assets/image/flourishYourFuture_image.png";
export { default as ApplyIt } from "../assets/image/Applyit_image.png";
export { default as LoginImage } from "../assets/image/login_image.png";
export { default as ImageDone } from "../assets/image/image_done.png";
export { default as loadingImage } from "../assets/image/loading_image.png";
export { default as homepageVector } from "../assets/image/homepage_vector.png";
export { default as UserIcon } from "../assets/icon/user_icon.jpg";

//import of all style css
import "../styles/authenthication_style.css";
import "../styles/navBar_style.css";
import "../styles/generate_style.css";

// export const BASE_URL = 'https://dev-career.cammob.ovh/capstone/Backend/public/api';
export const BASE_URL = 'http://localhost:8000/api';