import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import ErrorPage from "../pages/ErrorPage";
import Games from "../pages/Games";
import GameDetails from "../pages/GameDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "../provider/PrivateRoute";
import Loading from "../components/Loading";
import Profile from "../pages/AuthPages/Profile";
import ForgetPassword from "../pages/ForgetPassword";
import UpdateProfile from "../pages/AuthPages/UpdateProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        index: true,
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/games/",
        element: <Games></Games>,
        loader: () => fetch('/games.json'),
        hydrateFallbackElement: <Loading></Loading>
      },
      {
        path: '/games/:id',
        element: <PrivateRoute><GameDetails></GameDetails></PrivateRoute>,
        loader: () => fetch('/games.json'),
        hydrateFallbackElement: <Loading></Loading>
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/*",
        element: <ErrorPage></ErrorPage>,
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/profile/',
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path: '/forget-password',
        element: <ForgetPassword></ForgetPassword>
      },
      {
        path: '/update-profile',
        element: <UpdateProfile></UpdateProfile>
      }
    ],
  },
]);
