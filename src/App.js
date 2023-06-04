import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HOMEPAGE from "./pages/HOMEPAGE";
import PersonalProfile from "./pages/PersonalProfile";
import SCHOLARSHIPSSeeAllPopula from "./pages/SCHOLARSHIPSSeeAllPopula";
import COMMUNITIES11 from "./pages/COMMUNITIES";
import Dashboard from "./pages/Dashboard";
import Welcome from "./pages/Welcome";
import ONBOARDING2 from "./pages/ONBOARDING2";
import SERVICES from "./pages/SERVICES";
import SCHOLARSHIPSDESCRIPTION1 from "./pages/SCHOLARSHIPSDESCRIPTION1";
import SCHOLISTPROFILE4 from "./pages/SCHOLISTPROFILE4";
import CoachPage from "./pages/CoachPage";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import BasedOnProfile from "./pages/BasedOnProfile";
import BasedOnMajor from "./pages/BasedOnMajor";
import Popular from "./pages/Popular";
import Communities from "./pages/Communities";
import SCHOLARSHIPSCATEGORYPAGE from "./pages/SCHOLARSHIPSCATEGORYPAGE";
import SCHOLARSHIPSSeeAllScholar from "./pages/SCHOLARSHIPSSeeAllScholar";
import SCHOLARSHIPSSeeAllBased from "./pages/SCHOLARSHIPSSeeAllBased";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/student-activities-profile":
        title = "";
        metaDescription = "";
        break;
      case "/scholarships-see-all-popular":
        title = "";
        metaDescription = "";
        break;
      case "/communities1":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/onboarding-4":
        title = "";
        metaDescription = "";
        break;
      case "/signup":
        title = "";
        metaDescription = "";
        break;
      case "/services":
        title = "";
        metaDescription = "";
        break;
      case "/scholarships-description1":
        title = "";
        metaDescription = "";
        break;
      case "/profile":
        title = "";
        metaDescription = "";
        break;
      case "/coach-page":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/education-profile":
        title = "";
        metaDescription = "";
        break;
      case "/based-on-profile":
        title = "";
        metaDescription = "";
        break;
      case "/based-on-major":
        title = "";
        metaDescription = "";
        break;
      case "/popular":
        title = "";
        metaDescription = "";
        break;
      case "/communities":
        title = "";
        metaDescription = "";
        break;
      case "/scholarships-category-page":
        title = "";
        metaDescription = "";
        break;
      case "/scholarships-see-all-scholarship":
        title = "";
        metaDescription = "";
        break;
      case "/scholarships-see-all-based-on-your-profile":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HOMEPAGE />} />
      <Route path="/student-activities-profile" element={<PersonalProfile />} />
      <Route
        path="/scholarships-see-all-popular"
        element={<SCHOLARSHIPSSeeAllPopula />}
      />
      <Route path="/communities1" element={<COMMUNITIES11 />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/onboarding-4" element={<Welcome />} />
      <Route path="/signup" element={<ONBOARDING2 />} />
      <Route path="/services" element={<SERVICES />} />
      <Route
        path="/scholarships-description1"
        element={<SCHOLARSHIPSDESCRIPTION1 />}
      />
      <Route path="/profile" element={<SCHOLISTPROFILE4 />} />
      <Route path="/coach-page" element={<CoachPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/education-profile" element={<Profile />} />
      <Route path="/based-on-profile" element={<BasedOnProfile />} />
      <Route path="/based-on-major" element={<BasedOnMajor />} />
      <Route path="/popular" element={<Popular />} />
      <Route path="/communities" element={<Communities />} />
      <Route
        path="/scholarships-category-page"
        element={<SCHOLARSHIPSCATEGORYPAGE />}
      />
      <Route
        path="/scholarships-see-all-scholarship"
        element={<SCHOLARSHIPSSeeAllScholar />}
      />
      <Route
        path="/scholarships-see-all-based-on-your-profile"
        element={<SCHOLARSHIPSSeeAllBased />}
      />
    </Routes>
  );
}
export default App;
