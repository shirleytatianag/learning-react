import {createContext, type ReactNode, useState} from "react";
import {useNavigate} from "react-router-dom";

type User = {
  username: string;
  password: string;
  isAdmin?: boolean;
};

type UserContextType = {
  user: User | null;
  login: (username: string, password: string) => void;
  logout: () => void;
}

const adminList: string[] = ['admin', 'user1', 'user2'];

const AuthContext = createContext<UserContextType | null>(null);

export function AuthProvider({children}: { children: ReactNode }) {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const login = (username: string, password: string) => {
    const isAdmin: boolean = adminList.includes(username);
    setUser({
      username, password, isAdmin
    })
    navigate('/about')
  };

  const logout = () => {
    setUser(null);
  }
  const auth = {user, login, logout}

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
