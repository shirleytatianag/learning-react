import {type JSX, use} from "react";
import {UserContext} from "@/09-useContext/context/UserContext.tsx";
import {Navigate} from "react-router";

interface Props {
  element: JSX.Element;
}

export const PrivateRoute = ({element} : Props) => {
  const { authStatus } = use(UserContext);
  if (authStatus === 'checking') return <h1>Laoding..</h1>;
  if (authStatus === 'authenticated') return element;
  return <Navigate to="/login" replace/>;
}