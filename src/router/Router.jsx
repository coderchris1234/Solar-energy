import { createBrowserRouter } from "react-router-dom";
import { HomeLayout } from "../components";
import HomePage from "../pages/HomePage";
import AboutUspage from "../pages/AboutUspage";
import EducationPage from "../pages/EducationPage";
import FinancePage from "../pages/FinancePage";
import WhyChooseUs from "../pages/WhyChooseUs";

export const Element = createBrowserRouter([
   {
      path: "/",
      element: <HomeLayout />,
      children: [
         {
            path: "/",
            element: <HomePage />
         },
         {
            path: "/about",
            element: <AboutUspage />
         },
         {
            path: "/education",
            element: <EducationPage />
         },
         {
            path: "/finance",
            element: <FinancePage />
         },
         {
            path: "/why-choose-us",
            element: <WhyChooseUs />
         },
      ]
   }
])