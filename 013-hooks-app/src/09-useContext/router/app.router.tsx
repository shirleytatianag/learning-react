import {createBrowserRouter, Navigate} from "react-router";
import {AboutPage} from "@/09-useContext/pages/about/AboutPage.tsx";
import {ProfilePage} from "@/09-useContext/pages/profile/ProfilePage.tsx";
import {LoginPage} from "@/09-useContext/pages/auth/LoginPage.tsx";
import {PrivateRoute} from "@/09-useContext/router/PrivateRoute.tsx";


export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AboutPage/>
  },
  {
    path: "/profile",
    element: <PrivateRoute element={<ProfilePage/>} />
  },
  {
    path: "/login",
    element: <LoginPage/>
  },
  {
    path: '*',
    element: <Navigate to="/"/>
  }
]);