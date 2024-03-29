import Error from "error";
import TakeTest from "takeTest";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "layout/RootLayout";
import Home from "home";
import HomePractice from "home/homePractice/HomePractice";
import HomeStudy from "home/homeStudy/HomeStudy";
import HomeTest from "home/homeTest/HomeTest";
import Correction from "answer/correction";
import Explanation from "answer/explanation";
import OnBoarding from "onboarding";
import Signup from "signup";
import Membership from "membership";
import RedirectPages from "socialLogin";
import Loading from "loading";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Loading />,

    children: [
      { path: "", element: <OnBoarding /> },
      {
        path: "/home",
        element: <Home />,
        children: [
          { path: "/home/practice", element: <HomePractice /> },
          { path: "/home/study", element: <HomeStudy /> },
          { path: "/home/test", element: <HomeTest /> },
        ],
      },
      { path: "/takeTest", element: <TakeTest /> },
      { path: "/correction", element: <Correction /> },
      { path: "/explanation", element: <Explanation /> },
      { path: "/signup", element: <Signup /> },
      { path: "/membership", element: <Membership /> },
      { path: "/login/oauth2/code/naver", element: <RedirectPages /> },
      { path: "/loading", element: <Loading /> },
      { path: "/error", element: <Error /> },
    ],
  },
]);
