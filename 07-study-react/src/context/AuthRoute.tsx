import useAuth from "./useAuth.ts";
import {Navigate} from "react-router-dom";


export default function AuthRoute(props) {
  const auth = useAuth();
  if (!auth.user) {
    return <Navigate to="/login"/>;
  }
  return props.children;
}