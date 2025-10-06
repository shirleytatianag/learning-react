import {useState} from "react";
import useAuth from "./context/useAuth.ts";
import {useNavigate} from "react-router-dom";

export default function LoginPage() {
  const auth = useAuth()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const handleForm = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    auth.login(username, password);
    navigate('/about')
  }

  return (
    <>
      <h1>Login</h1>

      <form onSubmit={handleForm}>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" value={username}
                 onChange={e => setUsername(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={password}
                 onChange={e => setPassword(e.target.value)}/>
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  )
}