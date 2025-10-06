import {useNavigate} from "react-router-dom";
import useAuth from "./context/useAuth.ts";

export default function LogoutPage() {
  const auth = useAuth()
  const navigate = useNavigate();

  const logout = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    auth.logout();
    navigate('/')
  }

  return (
    <>
      <h1>Logout</h1>

      <form onSubmit={logout}>
        <label htmlFor="username">¿Segura de que quieres cerrar sesión?</label>
        <button type="submit">SALIR</button>
      </form>
    </>
  )
}